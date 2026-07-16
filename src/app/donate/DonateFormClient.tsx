"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { TrustNote } from "@/components/FeatureBlocks";
import { Inner } from "@/components/Section";
import { donationAmounts } from "@/content/programs";
import { publishedProjects } from "@/content/projects";

export default function DonateFormClient() {
  const router = useRouter();
  const [selectedAmount, setSelectedAmount] = useState<string>(String(donationAmounts?.[0]?.amount ?? "50"));

  function goToPayment() {
    const amt = selectedAmount || String(donationAmounts?.[0]?.amount ?? "50");
    const value = Number(amt) || 0;
    const formatted = value.toFixed(2);
    router.push(`/donate/payment?amount=${encodeURIComponent(formatted)}`);
  }

  return (
    <Inner className="grid gap-5 rounded-lg bg-white p-6 shadow-sm">
      <fieldset>
        <legend className="font-bold text-chocolate">Gift type</legend>
        <div className="mt-3 flex flex-wrap gap-3">
          <label><input name="giftType" type="radio" defaultChecked /> One-time</label>
          <label><input name="giftType" type="radio" /> Monthly Bread Partner</label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="font-bold text-chocolate">Amount</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {donationAmounts.map((item) => (
            <label key={item.label} className="rounded-md border border-chocolate/15 p-3">
              <input name="amount" type="radio" value={item.amount} checked={String(item.amount) === selectedAmount} onChange={() => setSelectedAmount(String(item.amount))} /> {item.amount ? `$${item.amount}` : "Custom"}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-2 font-semibold">
        Project selection
        <select className="min-h-12 rounded-md border border-chocolate/20 px-3">
          <option>Give where needed most</option>
          {publishedProjects.map((project) => <option key={project.id}>{project.title}</option>)}
        </select>
      </label>
      {/* First name and email removed here — collected on payment information step */}
      <label className="grid gap-2 font-semibold">Optional dedication<input className="min-h-12 rounded-md border border-chocolate/20 px-3" /></label>
      <label className="flex gap-2"><input type="checkbox" /> Make this gift anonymous publicly</label>
      <label className="flex gap-2"><input type="checkbox" /> Send me project updates</label>
      <div className="rounded-lg bg-sand/50 p-5 text-sm">Next, you will review payment information and continue to secure processing.</div>
      <Button type="button" onClick={goToPayment}>Continue Giving</Button>
    </Inner>
  );
}
