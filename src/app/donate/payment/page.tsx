import { Inner, PageHero, Section } from "@/components/Section";
import { siteSettings } from "@/content/site";
import type { Metadata } from "next";
import { Suspense } from "react";
import { PaymentForm } from "./PaymentForm";

export const metadata: Metadata = {
  title: "Payment Information",
  description: "Review payment details before completing a gift to The Daily Bread Project.",
  robots: { index: false, follow: false },
};

export default function DonationPaymentPage() {
  return (
    <>
      <PageHero
        eyebrow="Step 2 of 2"
        title="Complete your donation"
        text="Make a secure, one-time donation through PayPal. Your payment details are entered only in PayPal's protected checkout."
      />
      <Section>
        <Inner className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Suspense fallback={null}>
            <PaymentForm />
          </Suspense>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg bg-sand/45 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">Gift summary</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-chocolate">Your gift makes a difference</h2>
              <div className="mt-5 grid gap-3 text-sm text-charcoal/75">
                <p><strong className="text-chocolate">Organization:</strong> {siteSettings.name}</p>
                <p><strong className="text-chocolate">Nonprofit status:</strong> {siteSettings.nonprofitStatus}</p>
                <p><strong className="text-chocolate">EIN:</strong> {siteSettings.ein.replace("EIN ", "")}</p>
              </div>
              <p className="mt-5 text-sm leading-7 text-charcoal/75">{siteSettings.taxDeductibleWording}</p>
              <p className="mt-5 text-sm font-semibold text-chocolate">Questions about giving? Email {siteSettings.contact.donations}.</p>
            </div>
          </aside>
        </Inner>
      </Section>
    </>
  );
}
