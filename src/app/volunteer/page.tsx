import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { Inner, PageHero, Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = { title: "Volunteer", description: "Use your time, skills, voice, or network to support The Daily Bread Project." };

export default function VolunteerPage() {
  const roles = ["Remote volunteer options", "Event support", "Outreach support", "Administrative support", "Fundraising support", "Partnership outreach", "Media and storytelling support", "Professional skills support", "Prayer support"];
  const steps = [
    { title: "Tell us about you", text: "Share your interests, availability, location, and skills through the volunteer form." },
    { title: "We match thoughtfully", text: "We look for a role that fits current needs and protects the dignity of the communities served." },
    { title: "Serve with care", text: "Volunteers receive next steps, expectations, and approved language before representing the work." },
  ];
  const faqs = [
    ["Can I serve remotely?", "Yes. Remote support may include admin help, outreach, fundraising, storytelling, prayer, and professional skills."],
    ["Do I need nonprofit experience?", "No. We look for willing, respectful volunteers and match opportunities to real needs and readiness."],
    ["Can groups volunteer together?", "Yes. Churches, businesses, families, and community groups can ask about group opportunities."],
    ["Will I receive updates?", "Yes. When a fitting opportunity is available, we will share next steps and expectations."],
  ];
  return (
    <>
      <PageHero title="Volunteer with dignity, clarity, and purpose." text="There are meaningful ways to serve from Houston, remotely, through your network, or alongside local events and partners." />
      <Section><Inner><SectionHeading title="Volunteer process" text="We want every volunteer role to be useful, respectful, and clear." /><div className="mt-8 grid gap-4 md:grid-cols-3">{steps.map((step) => <article key={step.title} className="rounded-lg bg-white p-5 shadow-sm"><h2 className="font-serif text-2xl font-bold text-chocolate">{step.title}</h2><p className="mt-3 text-charcoal/75">{step.text}</p></article>)}</div></Inner></Section>
      <Section><Inner><SectionHeading title="Ways to serve" text="We match volunteer roles to real needs, your availability, and the care required to serve people well." /><div className="mt-8 grid gap-4 md:grid-cols-3">{roles.map((role) => <div key={role} className="rounded-lg bg-white p-5 font-bold text-chocolate shadow-sm">{role}</div>)}</div></Inner></Section>
      <Section className="bg-sand/35"><Inner className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading title="Apply to volunteer" text="Tell us how you would like to help. We will follow up when there is a fitting opportunity." /><ContactForm type="volunteer" /></Inner></Section>
      <Section><Inner><SectionHeading title="Volunteer expectations" text="Volunteers serve with dignity, confidentiality, consistency, and respect for local leadership." /><div className="mt-8 grid gap-4 md:grid-cols-3">{["Respect privacy and safeguarding standards", "Use approved stories, images, and public language", "Communicate availability clearly"].map((item) => <div key={item} className="rounded-lg bg-white p-5 font-bold text-chocolate shadow-sm">{item}</div>)}</div></Inner></Section>
      <Section className="bg-white"><Inner><SectionHeading title="Volunteer FAQs" /><div className="mt-8 grid gap-4 md:grid-cols-2">{faqs.map(([question, answer]) => <details key={question} className="rounded-lg border border-chocolate/10 p-5"><summary className="cursor-pointer font-bold text-chocolate">{question}</summary><p className="mt-3 text-charcoal/75">{answer}</p></details>)}</div></Inner></Section>
    </>
  );
}
