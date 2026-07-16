"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import PayPalButton from "@/components/PayPalButton";

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? null;

function startingAmount(value: string | null) {
  if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) return "50.00";
  const parsed = Number(value);
  return parsed >= 1 && parsed <= 100_000 ? parsed.toFixed(2) : "50.00";
}

export function PaymentForm() {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState(() => startingAmount(searchParams.get("amount")));

  if (!PAYPAL_CLIENT_ID) {
    return (
      <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
        Online donations are temporarily unavailable. Please contact donation support for assistance.
      </div>
    );
  }

  return (
    <div className="grid gap-6 rounded-lg bg-white p-6 shadow-sm">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">Secure checkout</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-chocolate">One-time PayPal donation</h2>
        <p className="mt-3 leading-7 text-charcoal/75">
          PayPal securely handles your payment information. The Daily Bread Project never receives or stores your card or bank details.
        </p>
      </div>

      <label className="grid gap-2 font-semibold">
        Donation amount (USD)
        <input
          name="amount"
          type="number"
          min="1"
          max="100000"
          step="0.01"
          required
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          inputMode="decimal"
          className="min-h-12 w-full rounded-md border border-chocolate/20 px-3"
        />
      </label>

      <div className="rounded-lg border border-forest/20 bg-forest/5 p-5">
        <PayPalButton amount={amount} />
      </div>

      <p className="text-sm leading-6 text-charcoal/70">
        You will review and approve the final amount in PayPal before your donation is completed.
      </p>
    </div>
  );
}
