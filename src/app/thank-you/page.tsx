import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Inner, PageHero, Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function GeneralThankYouPage() {
  return (
    <>
      <PageHero title="Thank you for reaching out." text="Your message has been received. The Daily Bread Project team will review it and follow up when appropriate." />
      <Section>
        <Inner className="grid gap-5 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm"><h2 className="font-serif text-2xl font-bold text-chocolate">Need support?</h2><p className="mt-3 text-charcoal/75">Assistance requests are reviewed with dignity and privacy.</p><Button href="/request-support" className="mt-5">Request Support</Button></div>
          <div className="rounded-lg bg-white p-6 shadow-sm"><h2 className="font-serif text-2xl font-bold text-chocolate">Want to help?</h2><p className="mt-3 text-charcoal/75">Explore volunteer, giving, and partnership pathways.</p><Button href="/ways-to-give" className="mt-5">Ways to Give</Button></div>
          <div className="rounded-lg bg-white p-6 shadow-sm"><h2 className="font-serif text-2xl font-bold text-chocolate">Keep reading</h2><p className="mt-3 text-charcoal/75">Learn more about the mission and current projects.</p><Button href="/projects" className="mt-5">View Projects</Button></div>
        </Inner>
      </Section>
    </>
  );
}
