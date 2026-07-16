import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Inner, PageHero, Section } from "@/components/Section";

export const metadata: Metadata = { title: "Thank You", robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return (
    <>
      <PageHero title="Your generosity just became practical help." text="Thank you for supporting The Daily Bread Project. Your gift helps us respond with dignity, compassion, and practical support." />
      <Section><Inner className="grid gap-6 md:grid-cols-3">{["Gift summary", "Project updates", "Monthly Bread Partner invitation", "Volunteer invitation", "Share the mission", "Donor preferences"].map((item) => <div key={item} className="rounded-lg bg-white p-6 shadow-sm"><h2 className="font-serif text-2xl font-bold text-chocolate">{item}</h2><p className="mt-3 text-charcoal/75">After secure processing is connected, this space can help donors review their gift and stay close to the work.</p></div>)}</Inner></Section>
      <Section className="bg-sand/35"><Inner className="text-center"><Button href="/contact">Contact donation support</Button></Inner></Section>
    </>
  );
}
