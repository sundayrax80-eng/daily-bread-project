"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import type { InputHTMLAttributes } from "react";
import { Button } from "@/components/Button";
import PayPalButton from "@/components/PayPalButton";

// Read NEXT_PUBLIC at build time; avoid throwing during prerender if it's missing.
const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? null;

const paymentMethods = ["Credit or debit card", "Bank transfer", "PayPal or digital wallet"] as const;
type PaymentMethod = (typeof paymentMethods)[number];
const giftSchedules = ["One-time gift", "Monthly Bread Partner"] as const;
type GiftSchedule = (typeof giftSchedules)[number];

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="grid min-w-0 gap-2 font-semibold">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        inputMode={inputMode}
        className="min-h-12 w-full rounded-md border border-chocolate/20 px-3"
      />
    </label>
  );
}

export function PaymentForm() {
  // If the build environment doesn't provide the public PayPal client id,
  // avoid crashing during prerender and show a helpful message.
  if (!PAYPAL_CLIENT_ID) {
    return (
      <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-sm text-yellow-800">
        PayPal is not configured for this build (NEXT_PUBLIC_PAYPAL_CLIENT_ID missing). Please set the environment variable and redeploy.
      </div>
    );
  }
  const searchParams = useSearchParams();
  const paramAmount = searchParams?.get("amount") ?? undefined;
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Credit or debit card");
  const [giftSchedule, setGiftSchedule] = useState<GiftSchedule>("One-time gift");
  const [amount, setAmount] = useState<string>(paramAmount ? paramAmount : "50.00");
  const isRecurring = giftSchedule === "Monthly Bread Partner";

  return (
    <form action="/donation-thank-you" className="grid gap-6 rounded-lg bg-white p-6 shadow-sm">
      <fieldset>
        <legend className="font-serif text-2xl font-bold text-chocolate">Gift schedule</legend>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {giftSchedules.map((schedule) => (
            <label key={schedule} className="flex min-h-14 items-center gap-3 rounded-md border border-chocolate/15 px-4 font-semibold">
              <input
                name="giftSchedule"
                type="radio"
                value={schedule}
                checked={giftSchedule === schedule}
                onChange={() => setGiftSchedule(schedule)}
              />
              {schedule}
            </label>
          ))}
        </div>
        {isRecurring && (
          <div className="mt-4 rounded-lg border border-forest/20 bg-forest/5 p-5">
            <h2 className="font-serif text-2xl font-bold text-chocolate">Recurring debit setup</h2>
            <p className="mt-3 leading-7 text-charcoal/75">
              Monthly Bread Partner gifts are set up as a recurring monthly debit or charge until the donor cancels or updates the gift.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 font-semibold">
                Monthly debit date
                <select name="recurringDebitDate" className="min-h-12 rounded-md border border-chocolate/20 px-3">
                  <option>1st of each month</option>
                  <option>5th of each month</option>
                  <option>10th of each month</option>
                  <option>15th of each month</option>
                  <option>20th of each month</option>
                  <option>25th of each month</option>
                </select>
              </label>
              <label className="grid gap-2 font-semibold">
                Start month
                <input name="recurringStartMonth" type="month" className="min-h-12 rounded-md border border-chocolate/20 px-3" />
              </label>
            </div>
            <label className="mt-5 flex gap-3 rounded-md bg-white p-4 text-sm font-semibold leading-6 text-charcoal/78">
              <input name="recurringAuthorization" type="checkbox" required={isRecurring} className="mt-1" />
              I authorize The Daily Bread Project, through its secure giving provider, to process this gift monthly using the selected payment method. I understand I can request changes or cancellation by contacting the organization.
            </label>
          </div>
        )}
      </fieldset>

      <fieldset>
        <legend className="font-serif text-2xl font-bold text-chocolate">Payment method</legend>
        <div className="mt-4 grid gap-3">
          {paymentMethods.map((method) => (
            <label key={method} className="flex min-h-14 items-center gap-3 rounded-md border border-chocolate/15 px-4 font-semibold">
              <input
                name="paymentMethod"
                type="radio"
                value={method}
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-2 font-semibold">
        Gift amount (USD)
        <input
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          inputMode="decimal"
          className="min-h-12 w-full rounded-md border border-chocolate/20 px-3"
        />
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" name="fullName" autoComplete="name" />
        <Field label="Email address" name="email" type="email" autoComplete="email" />
      </div>

      <label className="grid gap-2 font-semibold">
        Billing address
        <input name="address" autoComplete="address-line1" className="min-h-12 w-full rounded-md border border-chocolate/20 px-3" />
      </label>
      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(170px,1fr)_minmax(130px,0.8fr)]">
        <Field label="City" name="city" autoComplete="address-level2" />
        <label className="grid min-w-0 gap-2 font-semibold">
          State
          <select name="state" autoComplete="address-level1" className="min-h-12 w-full rounded-md border border-chocolate/20 px-3">
            <option value="">Select state</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </label>
        <Field label="ZIP code" name="zip" autoComplete="postal-code" inputMode="numeric" />
      </div>

      <div className="rounded-lg border border-forest/20 bg-forest/5 p-5">
        <h2 className="font-serif text-2xl font-bold text-chocolate">{paymentMethod}</h2>
        {paymentMethod === "Credit or debit card" && (
          <div className="mt-5 grid gap-4">
            <Field label="Name on card" name="cardName" autoComplete="cc-name" />
            <Field label="Card number" name="cardNumber" autoComplete="cc-number" placeholder="0000 0000 0000 0000" />
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Expiration month" name="expMonth" autoComplete="cc-exp-month" placeholder="MM" />
              <Field label="Expiration year" name="expYear" autoComplete="cc-exp-year" placeholder="YY" />
              <Field label="Security code" name="securityCode" autoComplete="cc-csc" placeholder="CVV" />
            </div>
          </div>
        )}
        {paymentMethod === "Bank transfer" && (
          <div className="mt-5 grid gap-4">
            <Field label="Account holder name" name="accountHolder" autoComplete="name" />
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Routing number" name="routingNumber" inputMode="numeric" />
              <Field label="Account number" name="accountNumber" inputMode="numeric" />
            </div>
            <label className="grid gap-2 font-semibold">
              Account type
              <select name="accountType" className="min-h-12 rounded-md border border-chocolate/20 px-3">
                <option>Checking</option>
                <option>Savings</option>
              </select>
            </label>
          </div>
        )}
        {paymentMethod === "PayPal or digital wallet" && (
          <div className="mt-5 grid gap-4">
            <Field label="PayPal or wallet email" name="walletEmail" type="email" autoComplete="email" />
            <label className="grid gap-2 font-semibold">
              Preferred wallet
              <select name="walletType" className="min-h-12 rounded-md border border-chocolate/20 px-3">
                <option>PayPal</option>
                <option>Apple Pay</option>
                <option>Google Pay</option>
                <option>Other digital wallet</option>
              </select>
            </label>
            <div className="mt-3">
              {/* PayPal button component */}
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <PayPalButton amount={amount} />
            </div>
          </div>
        )}
        <p className="mt-4 text-sm leading-6 text-charcoal/70">
          This preview page does not process a real payment. When the final giving provider is connected, sensitive payment details and recurring debit authorization should be handled through that secure provider.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button type="submit">Submit Payment</Button>
        <Button href="/donate" variant="secondary">Back to Gift Details</Button>
      </div>
    </form>
  );
}
