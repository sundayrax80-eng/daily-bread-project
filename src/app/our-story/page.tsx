import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { WebsitePage } from "@/components/WebsitePage";
import { founder, mission } from "@/content/site";
import { originalSiteContent } from "@/content/original-site";
import { featuredPartner } from "@/content/partners";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn why The Daily Bread Project began and how faith, dignity, and practical support guide the work.",
};

export default function OurStoryPage() {
  return (
    <WebsitePage
      eyebrow="Our Story"
      title="Why The Daily Bread Project began"
      intro="The Daily Bread Project began with a burden to stand with widows, families, and communities when ordinary needs become heavy, and to offer help in a way that protects dignity."
      links={[
        { label: "Beginning", href: "#beginning" },
        { label: "Founder", href: "#founder" },
        { label: "Mission", href: "#mission" },
        { label: "Faith", href: "#faith" },
      ]}
      hideSidebar
    >
      <div className="grid gap-8">
        <article id="beginning" className="scroll-mt-28 rounded-lg bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
            <Image
              src="/images/field/food-distribution-portrait.jpg"
              alt="Women holding food support bags during a community outreach"
              width={780}
              height={963}
              className="h-full max-h-[520px] w-full rounded-lg object-cover"
              style={{ objectPosition: "center 56%" }}
            />
            <div className="leading-8 text-charcoal/80">
              <h2 className="font-serif text-3xl font-bold text-chocolate">Standing with families when daily needs become too heavy to carry alone.</h2>
              <div className="mt-5 grid gap-4">
                {originalSiteContent.whyThisMattersIntro.slice(0, 4).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </article>

        <section id="founder" className="scroll-mt-28 rounded-lg bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
            <Image
              src={founder.image}
              alt="Portrait of Sunday Rax"
              width={500}
              height={580}
              className="h-72 w-full rounded-lg object-cover object-top lg:h-[340px]"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">Founder</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-chocolate">{founder.name}</h2>
              <p className="mt-1 font-bold text-forest">{founder.title}</p>
              <div className="mt-5 grid gap-4 leading-8 text-charcoal/80">
                {founder.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-ivory p-5">
                <p className="font-serif text-2xl font-bold text-chocolate">Why I Couldn’t Look Away</p>
                <p className="mt-3 leading-7 text-charcoal/75">{founder.letterExcerpt}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="scroll-mt-28 grid gap-5 md:grid-cols-2">
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-chocolate">Mission</h2>
            <p className="mt-4 leading-8 text-charcoal/80">{mission.statement}</p>
          </article>
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="font-serif text-3xl font-bold text-chocolate">Vision</h2>
            <p className="mt-4 leading-8 text-charcoal/80">{mission.vision}</p>
          </article>
        </section>

        <section className="rounded-lg bg-forest p-6 text-white shadow-sm">
          <h2 className="font-serif text-3xl font-bold">Why We Exist</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/84">
            We exist because no family should feel invisible when life becomes heavy. A meal, a light, safe water, or a trusted person showing up can bring more than temporary relief. It can remind someone that their life still matters, their dignity is worth protecting, and hope can begin again in small, practical ways.
          </p>
        </section>

        <section className="rounded-lg border border-chocolate/10 bg-sand/45 p-6">
          <h2 className="font-serif text-3xl font-bold text-chocolate">Core values</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {mission.values.map((value) => (
              <span key={value} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-chocolate shadow-sm">
                {value}
              </span>
            ))}
          </div>
        </section>

        <section id="faith" className="scroll-mt-28 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="font-serif text-3xl font-bold text-chocolate">Faith that shows up</h2>
          <p className="mt-4 leading-8 text-charcoal/80">
            Our faith calls us to notice people, listen with compassion, and respond with love. Prayer is part of our heart, but so is showing up with care that helps a family feel seen, respected, and less alone. We serve with humility and welcome people with dignity, regardless of background.
          </p>
        </section>

        {featuredPartner ? (
          <section className="rounded-lg bg-white p-6 shadow-sm">
            <div className="grid gap-6 md:grid-cols-[180px_1fr]">
              {featuredPartner.image ? (
                <Image src={featuredPartner.image} alt={`Portrait of ${featuredPartner.name}`} width={420} height={460} className="h-56 w-full rounded-lg object-contain" />
              ) : null}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">Local partner</p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-chocolate">{featuredPartner.name}</h2>
                <p className="mt-3 leading-8 text-charcoal/80">{featuredPartner.description}</p>
                <Button href="/partner" className="mt-5">Meet Our Partner</Button>
              </div>
            </div>
          </section>
        ) : null}

      </div>
    </WebsitePage>
  );
}
