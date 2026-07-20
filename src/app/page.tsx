import Image from "next/image";
import Link from "next/link";
import { PathwayCard, ProjectCard } from "@/components/Cards";
import { Button } from "@/components/Button";
import { FinalCta } from "@/components/FeatureBlocks";
import { NewsletterForm } from "@/components/Forms";
import { Inner, Section, SectionHeading } from "@/components/Section";
import { articles } from "@/content/articles";
import { publishedProjects } from "@/content/projects";
import { resources } from "@/content/resources";
import { audiencePathways, founder } from "@/content/site";
import { donationAmounts } from "@/content/programs";
import { originalSiteContent } from "@/content/original-site";

export default function Home() {
  const featuredProject = publishedProjects.find((project) => project.slug === "clean-water-initiative") || publishedProjects[0];
  const featuredUpdate = articles[0];
  const featuredResource = resources[0];
  const donationPreview = donationAmounts.filter((item) => [25, 75, 300].includes(item.amount));
  const homepageMissionPillars = [
    {
      title: "Relief",
      text: "A moment of support can help a family get through today with a little more peace and dignity.",
    },
    {
      title: "Stability",
      text: "Care becomes steadier when families have trusted guidance, follow-through, and room to plan beyond the next emergency.",
    },
    {
      title: "Empowerment",
      text: "Over time, the goal is to help families and communities build confidence, opportunity, and local strength.",
    },
  ];
  const serviceSnapshot = originalSiteContent.serviceDetails.slice(0, 4).map((service) => ({
    ...service,
    shortText:
      service.title === "Food Support"
        ? "Meals and groceries that ease the pressure of daily survival."
        : service.title === "Clean Water Access"
          ? "Safer water for drinking, cooking, hygiene, and household care."
          : service.title === "Solar Lighting"
            ? "Simple solar light that improves safety, study time, and evening routines."
            : "Care that honors grief, responsibility, dignity, and family stability.",
  }));

  return (
    <>
      <section className="relative overflow-hidden bg-chocolate text-white sm:min-h-[590px]">
        <div className="relative aspect-[4/3] w-full bg-chocolate sm:absolute sm:inset-0 sm:aspect-auto">
          <Image
            src="/images/field/food-distribution-group.jpg"
            alt="Women receiving food support during a community outreach in Nigeria"
            fill
            priority
            sizes="100vw"
            className="object-contain sm:object-cover sm:object-center"
          />
        </div>
        <div className="absolute inset-0 hidden bg-gradient-to-r from-chocolate/90 via-chocolate/62 to-chocolate/18 sm:block" />
        <Inner className="relative flex px-4 py-10 sm:min-h-[590px] sm:items-center sm:py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-gold">Houston-rooted. Nigeria-focused.</p>
            <h1 className="font-serif text-4xl font-bold leading-tight sm:text-6xl">Restoring dignity, stability, and hope, one life at a time.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/88">
              The Daily Bread Project stands with widows and underserved communities in the moments that matter most. When access to food, clean water, or light is uncertain, even the smallest support can bring relief, restore dignity, and renew hope.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/donate">Give Hope</Button>
              <Button href="/projects" variant="light">See Our Work</Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-5 text-sm font-bold">
              <Link href="/request-support" className="underline">Request Assistance</Link>
              <Link href="/partner" className="underline">Partner With Us</Link>
            </div>
          </div>
        </Inner>
      </section>

      <Section className="-mt-16 relative z-10 bg-ivory pb-10">
        <Inner>
          <div className="grid grid-cols-2 gap-3 rounded-lg bg-white p-4 shadow-lg ring-1 ring-chocolate/10 md:grid-cols-4 md:gap-5 md:p-5">
            {[
              ["Food", "Meal support for families"],
              ["Water", "Safer drinking and cooking"],
              ["Light", "Solar lighting for homes"],
              ["Widows", "Dignified family care"],
            ].map(([label, text], index) => (
              <div key={label} className={index === 0 ? "rounded-md bg-forest p-3 text-white md:p-4" : index === 1 ? "rounded-md bg-gold/25 p-3 text-chocolate md:p-4" : index === 2 ? "rounded-md bg-sand/65 p-3 text-chocolate md:p-4" : "rounded-md bg-terracotta p-3 text-white md:p-4"}>
                <p className="font-serif text-xl font-bold md:text-2xl">{label}</p>
                <p className={index === 0 || index === 3 ? "mt-1 text-sm text-white/80" : "mt-1 text-sm text-charcoal/75"}>{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-forest p-5 text-white shadow-sm md:flex md:items-start md:justify-between md:gap-8 md:p-6">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-gold">Why This Work Matters</p>
              <h2 className="mt-2 font-serif text-3xl font-bold">No one should have to carry daily burdens alone.</h2>
              <p className="mt-3 leading-7 text-white/82">
                For many widows, life carries a quiet weight that often goes unseen. Providing for a family can mean stretching limited resources, walking long distances for water, or facing each night without light.
              </p>
            </div>
            <Button href="/what-we-do" variant="light" className="mt-5 md:mt-1 md:shrink-0">See What We Do</Button>
          </div>
        </Inner>
      </Section>

      <Section className="bg-sand/35 py-12 sm:py-14">
        <Inner>
          <div className="mb-7 max-w-3xl">
            <h2 className="font-serif text-3xl font-bold text-chocolate sm:text-4xl">There is more than one way to care.</h2>
            <p className="mt-3 text-lg leading-8 text-charcoal/78">
              Whether you are ready to give, lend your time, ask for help, or build something with us, start with the path that feels closest to your heart.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {audiencePathways.map((pathway, index) => (
              <div
                key={pathway.title}
                className={
                  index === 0
                    ? "order-1 md:order-none"
                    : index === 2
                      ? "order-2 md:order-none"
                      : index === 1
                        ? "order-3 md:order-none"
                        : "order-4 md:order-none"
                }
              >
                <PathwayCard {...pathway} />
              </div>
            ))}
          </div>
        </Inner>
      </Section>

      <Section className="bg-white py-12 sm:py-14">
        <Inner>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-terracotta">What We Do</p>
              <h2 className="font-serif text-3xl font-bold text-chocolate sm:text-5xl">Care for the moments that feel heaviest.</h2>
              <p className="mt-5 text-lg leading-8 text-charcoal/82">
                When a family is stretched thin, even one need can affect the whole day. We focus on support that brings relief, protects dignity, and helps people feel seen while trusted local partners help guide each response with care.
              </p>
              <Button href="/what-we-do" className="mt-7">Explore What We Do</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {serviceSnapshot.map((service) => (
                <article key={service.title} className="overflow-hidden rounded-lg bg-ivory shadow-sm ring-1 ring-chocolate/10">
                  <div className="relative aspect-[4/3] bg-sand/35 sm:h-32 sm:aspect-auto">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain sm:object-cover"
                      style={{ objectPosition: service.imagePosition || "center" }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-2xl font-bold text-chocolate">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-charcoal/75">{service.shortText}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Inner>
      </Section>

      <Section className="bg-white py-12 sm:py-14">
        <Inner>
          <div className="grid gap-8 rounded-lg border border-chocolate/10 bg-ivory p-6 shadow-sm md:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-terracotta">Mission</p>
              <h2 className="font-serif text-3xl font-bold text-chocolate sm:text-5xl">Hope feels different when help is close.</h2>
              <p className="mt-5 text-lg leading-8 text-charcoal/82">
                We show up because daily pressure can make people feel forgotten. A thoughtful response, offered with respect, can help a family breathe again and begin to imagine a steadier tomorrow.
              </p>
              <Button href="/our-story" className="mt-7">Read Our Story</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 lg:gap-4 xl:grid-cols-3 xl:gap-5">
              {homepageMissionPillars.map((pillar) => (
                <article key={pillar.title} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-chocolate/10">
                  <h3 className="font-serif text-2xl font-bold text-forest">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-charcoal/75">{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Inner>
      </Section>

      <Section className="bg-forest py-12 text-ivory sm:py-16">
        <Inner>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-gold">Mission Work in Action</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">See what compassion looks like in motion.</h2>
            <p className="mt-5 text-lg leading-8 text-ivory/80">
              Watch a moment of faith, care, and community connection from the field—where showing up with humility can remind people that they are seen and not forgotten.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl ring-1 ring-white/15 sm:mt-10">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/spIGxSGx1WI?rel=0"
                title="Mission work in action: Look at Jesus in this whole community"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Inner>
      </Section>

      <Section className="bg-gold/15">
        <Inner>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-terracotta">Featured Project</p>
              <h2 className="font-serif text-4xl font-bold text-chocolate sm:text-5xl">See compassion in motion.</h2>
              <p className="mt-5 text-lg leading-8 text-charcoal/80">
                Every project begins with a real need and a simple question: what would help this family breathe easier today?
              </p>
              <Button href="/projects" variant="secondary" className="mt-7">View All Projects</Button>
            </div>
            <div className="max-w-3xl">
              <ProjectCard project={featuredProject} />
            </div>
          </div>
        </Inner>
      </Section>

      <Section className="bg-sand/40">
        <Inner className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">Founder</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-chocolate">Meet {founder.name}</h2>
            <p className="mt-2 font-bold text-forest">{founder.title}</p>
            <p className="mt-4 leading-8 text-charcoal/80">{founder.bio[0]}</p>
            <Button href="/our-story#founder" className="mt-6">Read the Founder Story</Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Link href="/where-we-work" className="rounded-lg bg-forest p-6 text-white shadow-sm transition hover:-translate-y-1">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-gold">Where We Work</p>
              <h3 className="mt-3 font-serif text-2xl font-bold">Nigeria-focused outreach</h3>
              <p className="mt-3 text-white/78">We focus on Nigeria, surrounding villages, and nearby communities where trusted local relationships help us understand needs with care.</p>
            </Link>
            <Link href="/transparency" className="rounded-lg bg-terracotta p-6 text-white shadow-sm transition hover:-translate-y-1">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-sand">Accountability</p>
              <h3 className="mt-3 font-serif text-2xl font-bold">Trust before numbers</h3>
              <p className="mt-3 text-white/82">We share updates with care because trust matters as much as generosity.</p>
            </Link>
          </div>
        </Inner>
      </Section>

      <Section className="bg-chocolate text-white">
        <Inner>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-gold">Ways to Help</p>
              <h2 className="font-serif text-4xl font-bold sm:text-5xl">There is a place for your compassion here.</h2>
            </div>
            <Button href="/ways-to-give" variant="light">See All Ways to Give</Button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {donationPreview.map((item, index) => (
              <div key={item.label} className={index === 1 ? "rounded-lg bg-gold p-6 text-chocolate shadow-sm" : "rounded-lg bg-white/10 p-6 shadow-sm ring-1 ring-white/15"}>
                <p className="font-serif text-3xl font-bold">${item.amount}</p>
                <p className={index === 1 ? "mt-2 text-chocolate/80" : "mt-2 text-white/76"}>{item.label}</p>
              </div>
            ))}
          </div>
        </Inner>
      </Section>

      <Section className="bg-ivory">
        <Inner className="grid gap-6 lg:grid-cols-2">
          <Link href={`/updates/${featuredUpdate.slug}`} className="rounded-lg bg-white p-6 shadow-sm transition hover:-translate-y-1">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">Latest Update</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-chocolate">{featuredUpdate.title}</h2>
            <p className="mt-3 text-charcoal/75">{featuredUpdate.excerpt}</p>
            <span className="mt-5 inline-block font-bold text-terracotta">Read More Updates</span>
          </Link>
          <Link href={`/resources/${featuredResource.slug}`} className="rounded-lg bg-forest p-6 text-white shadow-sm transition hover:-translate-y-1">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-gold">Resource Center</p>
            <h2 className="mt-3 font-serif text-3xl font-bold">{featuredResource.title}</h2>
            <p className="mt-3 text-white/78">{featuredResource.description}</p>
            <span className="mt-5 inline-block font-bold text-gold">View Resources</span>
          </Link>
        </Inner>
      </Section>

      <Section className="bg-white">
        <Inner className="grid gap-8 rounded-lg border border-chocolate/10 bg-sand/45 p-6 shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
            <SectionHeading
              title="Stay close to the stories and the work."
              text="Receive project updates, volunteer opportunities, resources, and simple ways to keep helping."
            />
          <NewsletterForm />
        </Inner>
      </Section>

      <FinalCta />
    </>
  );
}
