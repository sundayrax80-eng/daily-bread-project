"use client";

import { useEffect, useRef } from "react";

type PayPalApprovalData = { orderID?: string; subscriptionID?: string };
type PayPalSubscriptionActions = {
  subscription: { create: (options: { plan_id: string }) => Promise<string> };
};
type PayPalButtonsConfig = {
  createOrder?: () => Promise<string>;
  createSubscription?: (data: unknown, actions: PayPalSubscriptionActions) => Promise<string>;
  onApprove: (data: PayPalApprovalData) => Promise<void>;
  onError: (error: unknown) => void;
};
type PayPalButtonsInstance = { render: (element: HTMLElement) => Promise<void> };
type PayPalNamespace = { Buttons: (config: PayPalButtonsConfig) => PayPalButtonsInstance };

declare global {
  interface Window {
    paypal?: PayPalNamespace;
  }
}

export default function PayPalButton({ amount, giftType }: { amount: string; giftType: "one-time" | "monthly" }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const amountRef = useRef(amount);

  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID) {
      console.warn("NEXT_PUBLIC_PAYPAL_CLIENT_ID not set");
      return;
    }

    if (typeof document === "undefined") return;
    const scriptId = `paypal-sdk-script-${giftType}`;
    const existing = document.getElementById(scriptId);
    if (!existing) {
      const script = document.createElement("script");
      script.id = scriptId;
      const subscriptionParams = giftType === "monthly" ? "&vault=true&intent=subscription" : "";
      script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD${subscriptionParams}`;
      script.async = true;
      document.body.appendChild(script);
      script.onload = renderButtons;
    } else if (typeof window !== "undefined" && window.paypal) {
      renderButtons();
    } else if (existing) {
      existing.addEventListener("load", renderButtons);
    }

    function renderButtons() {
      if (typeof window === "undefined") return;
      if (!ref.current) return;
      if (!window.paypal) return console.error("PayPal SDK not available");

      // Clean previous render
      ref.current.innerHTML = "";

      const config: PayPalButtonsConfig = {
        onApprove: async (data) => {
          if (giftType === "monthly") {
            if (!data.subscriptionID) throw new Error("PayPal did not return a subscription ID");
            window.location.href = `/donation-thank-you?subscriptionID=${encodeURIComponent(data.subscriptionID)}`;
            return;
          }

          if (!data.orderID) throw new Error("PayPal did not return an order ID");

          const res = await fetch("/api/paypal/capture-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: data.orderID }),
          });
          const capture = await res.json();
          if (!res.ok || capture.capture?.status !== "COMPLETED") {
            throw new Error(capture.error || "PayPal did not complete the payment");
          }
          window.location.href = `/donation-thank-you?orderID=${encodeURIComponent(data.orderID)}`;
        },
        onError: (err: unknown) => {
          console.error("PayPal error", err);
          alert("Payment error. Please try again.");
        },
      };

      if (giftType === "monthly") {
        config.createSubscription = async (_data, actions) => {
          const res = await fetch("/api/paypal/create-plan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: amountRef.current }),
          });
          const plan = await res.json();
          if (!res.ok || !plan.planID) {
            throw new Error(plan.error || "Unable to prepare the monthly donation");
          }
          return actions.subscription.create({ plan_id: plan.planID });
        };
      } else {
        config.createOrder = async () => {
          const numericAmount = Number(amountRef.current);
          if (!Number.isFinite(numericAmount) || numericAmount < 1 || numericAmount > 100_000) {
            throw new Error("Enter a donation amount between $1 and $100,000");
          }

          const res = await fetch("/api/paypal/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: amountRef.current }),
          });
          const data = await res.json();
          if (!res.ok || !data.orderID) {
            throw new Error(data.error || "Unable to create PayPal order");
          }
          return data.orderID;
        };
      }

      window.paypal.Buttons(config).render(ref.current).catch((error) => console.error("PayPal render error", error));
    }

    return () => {
      existing?.removeEventListener("load", renderButtons);
      document.getElementById(scriptId)?.remove();
      delete window.paypal;
    };
  }, [giftType]);

  return <div ref={ref} />;
}
