import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/Forms";
import { PartnerFeature } from "@/components/FeatureBlocks";
import { Inner, Section, SectionHeading } from "@/components/Section";
import { partnershipOptions } from "@/content/programs";

export const metadata: Metadata = { title: "Partner With Us", description: "Explore church, business, foundation, nonprofit, media, and community partnerships." };

export default function PartnerPage() {
  const audiences = ["Churches", "Businesses", "Foundations", "Nonprofits", "Community organizations", "Sponsors", "Volunteers", "Local leaders", "Diaspora organizations", "Media organizations"];
  const steps = [
    { title: "Start the conversation", text: "Tell us about your organization, your heart for the work, and the kind of support you are considering." },
    { title: "Shape the fit", text: "Together, we identify whether giving, sponsorship, supply drives, grants, media, or volunteer mobilization fits best." },
    { title: "Serve responsibly", text: "Partnerships move forward with clear expectations, respectful storytelling, and care for the people being served." },
  ];
  const faqs = [
    ["Can a small church or business partner?", "Yes. Partnership can begin with a supply drive, project sponsorship, volunteer team, prayer support, or a simple conversation."],
    ["Can we sponsor a specific project?", "Yes. We can discuss project sponsorships for food support, solar lighting, clean water, widow support, and family stability work."],
    ["Do you work with nonprofits and foundations?", "Yes. The Daily Bread Project welcomes aligned nonprofit, foundation, grant, and community collaborations."],
    ["How do you protect the people being served?", "We use careful storytelling, privacy standards, and trusted local relationships so support does not come at the expense of dignity."],
  ];
  const visuals = [
    { src: "/images/field/local-relationships-partners.png", alt: "Local partners standing together outdoors", label: "Local relationships", fit: "contain" },
    { src: "/images/field/food-packing-team.jpg", alt: "Local team members packing food support bags", label: "Practical care" },
    { src: "/images/field/partner-food-support.png", alt: "A local partner giving food support to a woman during outreach", label: "Food support" },
  ];
  return (
    <>
      <Section className="border-b border-chocolate/10 bg-ivory py-12 sm:py-14">
        <Inner>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm font-semibold text-charcoal/70">
            <Link href="/" className="hover:text-chocolate">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-chocolate">Partner With Us</span>
          </nav>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-terracotta">Partner With Us</p>
          <h1 className="max-w-5xl font-serif text-4xl font-bold text-chocolate sm:text-6xl">Partnership helps compassion reach farther.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-charcoal/80">
            The Daily Bread Project welcomes churches, businesses, foundations, nonprofits, community leaders, and media partners who want to serve with care, humility, and purpose.
          </p>
        </Inner>
      </Section>
      <PartnerFeature />
      <Section className="bg-forest text-white"><Inner><div className="max-w-3xl"><h2 className="font-serif text-3xl font-bold sm:text-5xl">Partnership process</h2><p className="mt-5 text-lg leading-8 text-white/82">Strong partnerships begin with relationship, clarity, and shared values.</p></div><div className="mt-8 grid gap-4 md:grid-cols-3">{steps.map((step) => <article key={step.title} className="rounded-lg bg-white/10 p-5 shadow-sm ring-1 ring-white/15"><h2 className="font-serif text-2xl font-bold text-white">{step.title}</h2><p className="mt-3 text-white/78">{step.text}</p></article>)}</div></Inner></Section>
      <Section className="bg-ivory">
        <Inner>
          <SectionHeading title="Partnership in the field" text="The strongest support is relational. Local connection helps practical help arrive with dignity, wisdom, and care." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {visuals.map((visual) => (
              <figure key={visual.src} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  width={760}
                  height={620}
                  className={`h-72 w-full ${"fit" in visual && visual.fit === "contain" ? "bg-sand/45 object-contain" : "object-cover"}`}
                />
                <figcaption className="p-4 font-serif text-xl font-bold text-chocolate">{visual.label}</figcaption>
              </figure>
            ))}
          </div>
        </Inner>
      </Section>
      <Section className="bg-white"><Inner><SectionHeading title="Who we partner with" /><div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-5">{audiences.map((item) => <div key={item} className="flex min-h-24 items-center justify-center rounded-lg bg-ivory p-4 text-center font-bold leading-6 text-chocolate shadow-sm ring-1 ring-chocolate/10">{item}</div>)}</div></Inner></Section>
      <Section className="bg-chocolate text-white"><Inner><div className="max-w-3xl"><h2 className="font-serif text-3xl font-bold sm:text-5xl">Partnership options</h2><p className="mt-5 text-lg leading-8 text-white/82">There are many ways to help, from project sponsorship and supply drives to volunteer teams, prayer, logistics, and storytelling.</p></div><div className="mt-8 grid gap-4 md:grid-cols-4">{partnershipOptions.map((item) => <div key={item} className="rounded-lg bg-white/10 p-5 text-white ring-1 ring-white/15">{item}</div>)}</div></Inner></Section>
      <Section id="partnership-form" className="scroll-mt-28 bg-terracotta/10"><Inner className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading title="Start a partnership conversation" text="Tell us a little about your organization and the kind of care you hope to make possible. We would be honored to talk with you." /><ContactForm type="partnership" /></Inner></Section>
      <Section className="bg-white"><Inner><SectionHeading title="Partnership FAQs" /><div className="mt-8 grid gap-4 md:grid-cols-2">{faqs.map(([question, answer]) => <details key={question} className="rounded-lg border border-chocolate/10 bg-ivory p-5"><summary className="cursor-pointer font-bold text-chocolate">{question}</summary><p className="mt-3 leading-7 text-charcoal/75">{answer}</p></details>)}</div></Inner></Section>
    </>
  );
}
