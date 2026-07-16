"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    paypal: any;
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
            const res = await fetch("/api/paypal/create-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ amount }),
            });
            const data = await res.json();
            return data.orderID;
          },
          onApprove: async (data: any) => {
            const res = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderID: data.orderID }),
            });
            const capture = await res.json();
            // On success, redirect to thank you page with orderID for server lookup
            window.location.href = `/donation-thank-you?orderID=${encodeURIComponent(data.orderID)}`;
          },
          onError: (err: any) => {
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
