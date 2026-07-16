import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { Inner, PageHero, Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = { title: "Request Support", description: "Submit a respectful assistance request to The Daily Bread Project." };

export default function AssistancePage() {
  const steps = [
    { title: "Share the need", text: "Use the form to tell us the basic situation, location, and best way to contact you." },
    { title: "Careful review", text: "Requests are reviewed based on need, available funding, location, program fit, and partner capacity." },
    { title: "Follow-up if possible", text: "If support or a referral may be available, we will follow up through the contact method you provide." },
  ];
  return (
    <>
      <PageHero title="Request Support" text="Asking for help can take courage. We want this space to feel respectful, private, and compassionate from the very first step." />
      <Section><Inner><div className="rounded-lg bg-white p-6 shadow-sm"><h2 className="font-serif text-2xl font-bold text-chocolate">Before you submit</h2><p className="mt-3">Submitting a request does not guarantee assistance, but it does help us understand the need and whether current programs or partners may be able to respond.</p><p className="mt-3 font-semibold text-forest">Please do not submit government identification, banking information, medical records, or highly sensitive documents through this form.</p></div></Inner></Section>
      <Section className="bg-white"><Inner><SectionHeading title="What happens next" text="The process is intentionally simple and respectful." /><div className="mt-8 grid gap-4 md:grid-cols-3">{steps.map((step) => <article key={step.title} className="rounded-lg border border-chocolate/10 bg-ivory p-5"><h2 className="font-serif text-2xl font-bold text-chocolate">{step.title}</h2><p className="mt-3 text-charcoal/75">{step.text}</p></article>)}</div></Inner></Section>
      <Section className="bg-sand/35"><Inner className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading title="Assistance request form" text="This form only asks for basic information needed to begin a careful, respectful review." /><ContactForm endpoint="/api/assistance" type="assistance" /></Inner></Section>
      <Section><Inner><SectionHeading title="Request support FAQs" /><div className="mt-8 grid gap-4 md:grid-cols-2">{["Does submitting guarantee assistance?", "What information should I avoid sending?", "How will my privacy be protected?", "What if my location is not currently served?"].map((question) => <details key={question} className="rounded-lg bg-white p-5 shadow-sm"><summary className="cursor-pointer font-bold text-chocolate">{question}</summary><p className="mt-3 text-charcoal/75">Support depends on available funding, location, program fit, verification of need, and partner capacity. We review requests with care and ask that sensitive documents stay out of the basic form.</p></details>)}</div></Inner></Section>
    </>
  );
}
