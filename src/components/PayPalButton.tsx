"use client";

import { useEffect, useRef } from "react";

type PayPalApprovalData = { orderID: string };
type PayPalButtonsConfig = {
  createOrder: () => Promise<string>;
  onApprove: (data: PayPalApprovalData) => Promise<void>;
  onError: (error: unknown) => void;
};
type PayPalButtonsInstance = { render: (element: HTMLElement) => void };
type PayPalNamespace = { Buttons: (config: PayPalButtonsConfig) => PayPalButtonsInstance };

declare global {
  interface Window {
    paypal: PayPalNamespace;
  }
}

export default function PayPalButton({ amount }: { amount: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID) {
      console.warn("NEXT_PUBLIC_PAYPAL_CLIENT_ID not set");
      return;
    }

    if (typeof document === "undefined") return;
    const existing = document.getElementById("paypal-sdk-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "paypal-sdk-script";
      script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`;
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

      window.paypal
        .Buttons({
          createOrder: async () => {
            const numericAmount = Number(amount);
            if (!Number.isFinite(numericAmount) || numericAmount < 1 || numericAmount > 100_000) {
              throw new Error("Enter a donation amount between $1 and $100,000");
            }

            const res = await fetch("/api/paypal/create-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ amount }),
            });
            const data = await res.json();
            if (!res.ok || !data.orderID) {
              throw new Error(data.error || "Unable to create PayPal order");
            }
            return data.orderID;
          },
          onApprove: async (data: PayPalApprovalData) => {
            const res = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderID: data.orderID }),
            });
            const capture = await res.json();
            if (!res.ok || capture.capture?.status !== "COMPLETED") {
              throw new Error(capture.error || "PayPal did not complete the payment");
            }
            // On success, redirect to thank you page with orderID for server lookup
            window.location.href = `/donation-thank-you?orderID=${encodeURIComponent(data.orderID)}`;
          },
          onError: (err: unknown) => {
            console.error("PayPal error", err);
            alert("Payment error. Please try again.");
          },
        })
        .render(ref.current);
    }

    return () => {
      // cleanup if needed
    };
  }, [amount]);

  return <div ref={ref} />;
}
