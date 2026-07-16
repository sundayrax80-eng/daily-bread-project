import { Button } from "@/components/Button";
import { TrustNote } from "@/components/FeatureBlocks";
import { Inner, PageHero, Section } from "@/components/Section";
import DonateFormClient from "./DonateFormClient";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Donate", description: "Give to The Daily Bread Project and help meet practical needs with dignity and care." };

export default function DonatePage() {
  return (
    <>
      <PageHero title="Your gift can become practical help." text="Every gift helps us respond with compassion, dignity, and care for families carrying real daily needs." />
      <Section>
        <Inner className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <TrustNote />
            <p className="mt-5 text-charcoal/75">A secure giving provider will process donations so payment information is handled safely outside this website.</p>
          </div>
          <DonateFormClient />
        </Inner>
      </Section>
    </>
  );
}
