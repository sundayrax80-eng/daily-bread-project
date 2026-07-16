import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { TrustNote } from "@/components/FeatureBlocks";
import { WebsitePage } from "@/components/WebsitePage";
import { originalSiteContent } from "@/content/original-site";
import { partnershipOptions } from "@/content/programs";

export const metadata: Metadata = {
  title: "Ways to Give",
  description: "Give with purpose through meals, solar lighting, clean water, family support, monthly giving, and partnerships.",
};

export default function WaysToGivePage() {
  const steps = [
    { title: "Choose your pathway", text: "Give once, give monthly, sponsor a project, or begin a partnership conversation." },
    { title: "Select the focus", text: "Support food, clean water, solar lighting, widow support, family stability, or where help is needed most." },
    { title: "Stay connected", text: "Receive updates as projects move forward and reporting is ready to share." },
  ];
  const faqs = [
    ["Is my gift tax-deductible?", "The Daily Bread Project is recognized by the IRS as a 501(c)(3). Contributions may be tax-deductible to the extent allowed by law."],
    ["Can I give toward a specific project?", "Yes. Project sponsorship can focus on a current initiative, or you can give where support is needed most."],
    ["Can I give monthly?", "Yes. Monthly Bread Partners help make practical support more consistent."],
    ["Can my church or business give?", "Yes. Churches, businesses, foundations, and groups can give, sponsor projects, or start a partnership conversation."],
  ];
  return (
    <WebsitePage
      eyebrow="Ways to Give"
      title="Give in a way that feels meaningful."
      intro="Your generosity can become a meal, a light in a dark home, safer water, or a moment of relief for a family carrying more than they should have to carry alone."
      links={[
        { label: "Donation tiers", href: "#donation-tiers" },
        { label: "Monthly giving", href: "#monthly" },
        { label: "Project sponsorship", href: "#projects" },
        { label: "In-kind gifts", href: "#in-kind" },
        { label: "Partnerships", href: "#partnerships" },
        { label: "Before you give", href: "#before-you-give" },
      ]}
      hideSidebar
    >
      <div className="grid gap-10">
        <section className="scroll-mt-28 rounded-lg bg-forest p-6 text-white shadow-sm">
          <h2 className="font-serif text-3xl font-bold">How giving works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.title} className="rounded-lg bg-white/10 p-5 ring-1 ring-white/15">
                <h3 className="font-serif text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="donation-tiers" className="scroll-mt-28 rounded-lg bg-white p-6 shadow-sm">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">Giving pathways</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-chocolate">{originalSiteContent.donationIntro.title}</h2>
            <p className="mt-4 text-lg leading-8 text-charcoal/80">{originalSiteContent.donationIntro.text}</p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {originalSiteContent.donationTiers.map((tier) => (
              <article key={tier.title} className="rounded-lg border border-chocolate/10 bg-ivory p-5">
                <Image
                  src={tier.image}
                  alt={tier.imageAlt}
                  width={720}
                  height={460}
                  className={`mb-5 h-48 w-full rounded-md ${"imageFit" in tier && tier.imageFit === "contain" ? "bg-sand/45 object-contain" : "object-cover"}`}
                  style={{ objectPosition: "imagePosition" in tier ? tier.imagePosition : "center" }}
                />
                <p className="font-serif text-2xl font-bold text-chocolate">{tier.title}</p>
                <p className="mt-2 text-3xl font-bold text-forest">{tier.amount ? `$${tier.amount}` : "Open gift"}</p>
                <p className="mt-4 leading-7 text-charcoal/75">{tier.text}</p>
                <Button href="/donate" className="mt-5">Donate</Button>
              </article>
            ))}
          </div>
        </section>

        <section id="monthly" className="scroll-mt-28 rounded-lg border border-chocolate/10 bg-sand/45 p-6">
          <h2 className="font-serif text-3xl font-bold text-chocolate">Become a Bread Partner</h2>
          <p className="mt-4 leading-8 text-charcoal/80">
            Bread Partners provide dependable monthly support so help does not only arrive during emergencies. Monthly giving helps make food support, solar lighting, clean-water planning, household essentials, and partner coordination more consistent.
          </p>
          <Button href="/donate" className="mt-6">Give Monthly</Button>
        </section>

        <section id="projects" className="scroll-mt-28 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="font-serif text-3xl font-bold text-chocolate">Sponsor a project</h2>
          <p className="mt-4 leading-8 text-charcoal/80">
            Project sponsorship helps move a specific need forward, such as solar lighting, food assistance, clean-water access, or family stability support. We share project details carefully so donors can give with confidence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/projects">View Current Projects</Button>
            <Button href="/partner" variant="secondary">Discuss Sponsorship</Button>
          </div>
        </section>

        <section id="in-kind" className="scroll-mt-28 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="font-serif text-3xl font-bold text-chocolate">Give in kind</h2>
          <p className="mt-4 leading-8 text-charcoal/80">
            In-kind gifts may include hygiene products, school supplies, household essentials, baby items, and project supplies. We coordinate these gifts before delivery so they match real needs and can be handled responsibly.
          </p>
        </section>

        <section id="partnerships" className="scroll-mt-28 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="font-serif text-3xl font-bold text-chocolate">Church, business, and foundation partnerships</h2>
          <p className="mt-4 leading-8 text-charcoal/80">
            Partners help make the work stronger. Churches, businesses, foundations, and community groups can sponsor projects, organize supply drives, support logistics, mobilize volunteers, and help care reach farther.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipOptions.slice(0, 12).map((option) => (
              <div key={option} className="rounded-md border border-chocolate/10 bg-ivory p-3 text-sm font-semibold text-chocolate">{option}</div>
            ))}
          </div>
        </section>

        <section id="before-you-give" className="scroll-mt-28 grid gap-5">
          <TrustNote />
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-chocolate">Before you give</h2>
            <p className="mt-4 leading-8 text-charcoal/80">
              Donation examples show the kinds of needs your gift can support. Actual costs may vary by location, availability, transportation, exchange rates, and community needs.
            </p>
          </div>
        </section>

        <section className="scroll-mt-28 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="font-serif text-3xl font-bold text-chocolate">Giving FAQs</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-lg border border-chocolate/10 bg-ivory p-5">
                <summary className="cursor-pointer font-bold text-chocolate">{question}</summary>
                <p className="mt-3 leading-7 text-charcoal/75">{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </WebsitePage>
  );
}
