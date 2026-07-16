import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Inner, PageHero, Section, SectionHeading } from "@/components/Section";
import { siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "Transparency & Accountability",
  description: "Nonprofit status, donor stewardship, and accountability commitments for The Daily Bread Project.",
};

const commitments = [
  {
    title: "We use gifts with care",
    text: "Donations are handled with the intention of meeting real needs, supporting active projects, and stewarding resources responsibly.",
  },
  {
    title: "We protect dignity",
    text: "Stories, photos, and updates are shared with care so the people being served are honored, not exposed.",
  },
  {
    title: "We report honestly",
    text: "As projects move forward, we share updates that reflect what is confirmed, what is still in progress, and what support made possible.",
  },
  {
    title: "We respect donor intent",
    text: "When gifts are given toward a specific project or purpose, we make every reasonable effort to use them for that purpose.",
  },
];

const availableNow = [
  "IRS-recognized 501(c)(3) nonprofit status",
  siteSettings.ein,
  "Donation policy",
  "Privacy policy",
  "Safeguarding statement",
  "Contact information for giving questions",
];

const laterReports = [
  "Project updates and outcome summaries",
  "Annual report when the first reporting year is complete",
  "Form 990 or public filing information when applicable",
  "Financial summaries as they are prepared for public sharing",
];

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        title="Transparency & Accountability"
        text="Trust matters. We want donors, partners, and families to understand how The Daily Bread Project handles gifts, communicates progress, and protects dignity."
      />

      <Section>
        <Inner className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">Nonprofit status</p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-chocolate md:text-5xl">Approved to receive charitable gifts.</h2>
            <p className="mt-5 text-lg leading-8 text-charcoal/78">{siteSettings.taxDeductibleWording}</p>
          </div>
          <div className="rounded-lg bg-white p-7 shadow-sm">
            <h3 className="font-serif text-3xl font-bold text-chocolate">Organization details</h3>
            <dl className="mt-6 grid gap-4 text-charcoal/78">
              <div className="rounded-md bg-ivory p-4">
                <dt className="text-sm font-bold uppercase tracking-[0.12em] text-terracotta">Legal name</dt>
                <dd className="mt-1 text-lg font-bold text-chocolate">{siteSettings.name}</dd>
              </div>
              <div className="rounded-md bg-ivory p-4">
                <dt className="text-sm font-bold uppercase tracking-[0.12em] text-terracotta">Status</dt>
                <dd className="mt-1">{siteSettings.nonprofitStatus}</dd>
              </div>
              <div className="rounded-md bg-ivory p-4">
                <dt className="text-sm font-bold uppercase tracking-[0.12em] text-terracotta">EIN</dt>
                <dd className="mt-1">{siteSettings.ein.replace("EIN ", "")}</dd>
              </div>
            </dl>
          </div>
        </Inner>
      </Section>

      <Section className="bg-white">
        <Inner>
          <SectionHeading
            title="How we approach accountability"
            text="The Daily Bread Project is still growing, so this page starts with the essentials and will expand as reports, filings, and project documentation become ready for public sharing."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {commitments.map((item) => (
              <article key={item.title} className="rounded-lg border border-chocolate/10 bg-ivory p-6">
                <h3 className="font-serif text-2xl font-bold text-chocolate">{item.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/75">{item.text}</p>
              </article>
            ))}
          </div>
        </Inner>
      </Section>

      <Section className="bg-sand/35">
        <Inner className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg bg-white p-7 shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-chocolate">Available now</h2>
            <p className="mt-3 leading-7 text-charcoal/75">
              These are the accountability items that are appropriate to share now.
            </p>
            <ul className="mt-6 grid gap-3">
              {availableNow.map((item) => (
                <li key={item} className="flex gap-3 text-charcoal/78">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-lg bg-forest p-7 text-white shadow-sm">
            <h2 className="font-serif text-3xl font-bold">What will be added as we grow</h2>
            <p className="mt-3 leading-7 text-white/82">
              We do not want to list reports that are not ready yet as though they already exist. As the organization completes projects and reporting periods, this page will be updated.
            </p>
            <ul className="mt-6 grid gap-3">
              {laterReports.map((item) => (
                <li key={item} className="flex gap-3 text-white/86">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </Inner>
      </Section>

      <Section className="bg-white">
        <Inner className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            title="Policies and donor questions"
            text="The pages below explain how gifts, privacy, safeguarding, and website information are handled. Donors are also welcome to contact us directly with giving questions."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Donation Policy", href: "/donation-policy" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Safeguarding", href: "/safeguarding" },
              { label: "Contact Us", href: "/contact" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg border border-chocolate/10 bg-ivory p-5 font-bold text-chocolate shadow-sm transition hover:-translate-y-1 hover:bg-sand/50">
                {item.label}
              </Link>
            ))}
          </div>
        </Inner>
      </Section>

      <Section className="bg-chocolate text-white">
        <Inner className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold sm:text-5xl">Have a question about giving?</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/82">
              Email {siteSettings.contact.donations} and we will do our best to respond clearly and respectfully.
            </p>
          </div>
          <Button href="/contact" variant="light">Contact Us</Button>
        </Inner>
      </Section>
    </>
  );
}
