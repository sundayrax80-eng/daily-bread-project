"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import PayPalButton from "@/components/PayPalButton";
import { monthlyDonationAmounts } from "@/content/programs";

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? null;

function startingAmount(value: string | null) {
  if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) return "50.00";
  const parsed = Number(value);
  return parsed >= 1 && parsed <= 100_000 ? parsed.toFixed(2) : "50.00";
}

export function PaymentForm() {
  const searchParams = useSearchParams();
  const giftType = searchParams.get("gift") === "monthly" ? "monthly" : "one-time";
  const requestedAmount = startingAmount(searchParams.get("amount"));
  const monthlyAmountIsAllowed = monthlyDonationAmounts.some((item) => item.amount === Number(requestedAmount));
  const [amount, setAmount] = useState(() =>
    giftType === "monthly" && !monthlyAmountIsAllowed
      ? Number(monthlyDonationAmounts[0]?.amount ?? 10).toFixed(2)
      : requestedAmount,
  );

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
        <h2 className="mt-2 font-serif text-3xl font-bold text-chocolate">
          {giftType === "monthly" ? "Monthly Bread Partner donation" : "One-time PayPal donation"}
        </h2>
        <p className="mt-3 leading-7 text-charcoal/75">
          {giftType === "monthly"
            ? "PayPal will securely charge your selected amount each month until you cancel. You can manage or cancel the monthly gift from your PayPal account."
            : "PayPal securely handles your payment information. The Daily Bread Project never receives or stores your card or bank details."}
        </p>
      </div>

      {giftType === "monthly" ? (
        <label className="grid gap-2 font-semibold">
          Monthly donation amount (USD)
          <select
            name="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="min-h-12 w-full rounded-md border border-chocolate/20 px-3"
          >
            {monthlyDonationAmounts.map((item) => (
              <option key={item.amount} value={item.amount.toFixed(2)}>${item.amount} per month</option>
            ))}
          </select>
        </label>
      ) : (
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
      )}

      <div className="rounded-lg border border-forest/20 bg-forest/5 p-5">
        <PayPalButton amount={amount} giftType={giftType} />
      </div>

      <p className="text-sm leading-6 text-charcoal/70">
        {giftType === "monthly"
          ? "PayPal will show the monthly amount and ask you to approve the recurring donation before it begins."
          : "You will review and approve the final amount in PayPal before your donation is completed."}
      </p>
    </div>
  );
}
