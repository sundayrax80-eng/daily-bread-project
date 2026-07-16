import Image from "next/image";
import { founder, siteSettings } from "@/content/site";
import { publicLocations } from "@/content/locations";
import { featuredPartner } from "@/content/partners";
import { Button } from "./Button";
import { Inner, Section, SectionHeading } from "./Section";

export function FounderSection() {
  return (
    <Section className="bg-white">
      <Inner className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Image src={founder.image} alt="Portrait of Sunday Rax" width={760} height={880} className="rounded-lg object-cover shadow-lg" />
        <div>
          <SectionHeading eyebrow="Meet Our Founder" title={founder.name} text={founder.title} />
          <div className="mt-6 grid gap-4 text-charcoal/80">
            {founder.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/our-story">Read Our Story</Button>
            <Button href="/our-story#founders-letter" variant="secondary">A Letter From Sunday</Button>
          </div>
        </div>
      </Inner>
    </Section>
  );
}

export function MapSection() {
  return (
    <Section className="bg-sand/35">
      <Inner className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="overflow-hidden rounded-lg bg-white shadow-sm">
          <iframe
            title="Map of Nigeria and nearby outreach areas"
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.5%2C3.5%2C15.5%2C14.5&layer=mapnik&marker=9.082%2C8.675"
            className="h-[360px] w-full border-0 sm:h-[460px] lg:h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="border-t border-chocolate/10 bg-white px-4 py-3 text-sm font-semibold text-chocolate">
            <a href="https://www.openstreetmap.org/?mlat=9.082&mlon=8.675#map=6/9.082/8.675" target="_blank" rel="noreferrer" className="hover:text-forest">
              View larger map
            </a>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Where We Work" title="Rooted in trusted local relationships." text="Our work is Nigeria-focused and may include surrounding villages and nearby communities as local partners identify real needs. We share details carefully so people are honored and protected." />
          <div className="mt-6 grid gap-4">
            {publicLocations.length ? publicLocations.map((location) => (
              <div key={`${location.state}-${location.community}`} className="rounded-lg bg-white p-5">{location.shortDescription}</div>
            )) : <div className="rounded-lg border border-chocolate/10 bg-white p-5 text-charcoal/75">More community details will be shared as local projects are ready for public updates.</div>}
          </div>
          <Button href="/where-we-work" className="mt-6">Explore Where We Work</Button>
        </div>
      </Inner>
    </Section>
  );
}

export function PartnerFeature() {
  if (!featuredPartner) return null;

  return (
    <Section className="bg-sand/35">
      <Inner className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative overflow-hidden rounded-lg bg-forest pt-8 shadow-sm">
          {featuredPartner.image ? (
            <Image
              src={featuredPartner.image}
              alt={`Portrait of ${featuredPartner.name}`}
              width={900}
              height={980}
              className="mx-auto h-auto max-h-[620px] w-full object-contain object-bottom"
            />
          ) : null}
        </div>
        <div>
          <SectionHeading
            eyebrow="About Our Partner"
            title={featuredPartner.name}
            text={featuredPartner.description}
          />
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-forest">{featuredPartner.role}</p>
          <div className="mt-6 grid gap-4 leading-8 text-charcoal/80">
            {featuredPartner.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-7 rounded-lg bg-forest p-5 text-white shadow-sm">
            <p className="font-serif text-2xl font-bold">Trusted hands close to home.</p>
            <p className="mt-2 text-white/82">
              We are grateful for a partner who already knows the people, the villages, and the needs on the ground. Because support can be purchased locally, families can receive help sooner, international shipping becomes less of a burden, and more of each gift helps strengthen the same communities receiving care.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/partner#partnership-form">Partner With Us</Button>
            <Button href="/where-we-work" variant="secondary">Where We Work</Button>
          </div>
        </div>
      </Inner>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section className="bg-forest text-white">
      <Inner className="text-center">
        <h2 className="mx-auto max-w-4xl font-serif text-3xl font-bold sm:text-5xl">You may not be able to change every life. But together, we can change one life at a time.</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/donate" variant="light">Donate</Button>
          <Button href="/volunteer" variant="light">Volunteer</Button>
          <Button href="/partner" variant="light">Partner With Us</Button>
        </div>
      </Inner>
    </Section>
  );
}

export function TrustNote() {
  return (
    <div className="rounded-lg border border-gold/30 bg-gold/10 p-5 text-sm leading-6 text-chocolate">
      {siteSettings.isTaxDeductible ? siteSettings.taxDeductibleWording : "Donation processing and legal wording are being finalized. No tax-deductible claim is shown until approved in site settings."}
    </div>
  );
}
