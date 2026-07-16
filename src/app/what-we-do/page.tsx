import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { WebsitePage } from "@/components/WebsitePage";
import { originalSiteContent } from "@/content/original-site";

export const metadata: Metadata = {
  title: "What We Do",
  description: "Food support, clean water access, solar lighting, widow support, local partnerships, and family stability programs.",
};

export default function WhatWeDoPage() {
  const realLifePhotos = [
    {
      src: "/images/field/local-food-purchase.jpg",
      alt: "Food support bags being purchased and gathered locally",
      title: "Resources sourced nearby",
      text: "Buying locally can reduce shipping barriers and support the local economy.",
      position: "center 82%",
    },
    {
      src: "/images/field/community-line-outreach.jpg",
      alt: "Women gathered in a community line during local outreach",
      title: "Care organized with the community",
      text: "Practical support is planned with trusted people who understand the village, the families, and the needs that may not be obvious from a distance. Local partners help identify who is most vulnerable, organize distribution with care, and make sure support is given respectfully. This helps each outreach feel personal, orderly, and rooted in dignity rather than rushed charity.",
      position: "center 50%",
    },
    {
      src: "/images/field/field-volunteer-visit.jpg",
      alt: "A volunteer speaking with someone during a community visit",
      title: "Face-to-face follow-through",
      text: "Local partners help make sure care is personal, respectful, and grounded in real relationships.",
      position: "center 18%",
    },
    {
      src: "/images/field/children-school-supplies.jpg",
      alt: "Children holding school supplies during a community outreach",
      title: "Support beyond one meal",
      text: "The work can include school supplies, family stability, and practical encouragement.",
      position: "center 40%",
    },
    {
      src: "/images/field/partner-meeting-table.jpg",
      alt: "Community partners seated around a table during planning",
      title: "Listening before acting",
      text: "Partnership begins with real conversations, local wisdom, and careful planning.",
      position: "center 50%",
    },
    {
      src: "/images/field/rice-local-market.jpg",
      alt: "Rice being prepared at a local market before distribution",
      title: "Local supplies, local impact",
      text: "When items are bought nearby, support can move faster and strengthen the local economy.",
      position: "center 50%",
    },
  ];
  const serviceAreas = originalSiteContent.serviceDetails.map((service) => ({
    ...service,
    action:
      service.title === "Food Support" || service.title === "Widow Support"
        ? "Request support"
        : service.title === "Local Partnerships"
          ? "Partner with us"
          : "Fund this work",
    href:
      service.title === "Food Support" || service.title === "Widow Support"
        ? "/request-support"
        : service.title === "Local Partnerships"
          ? "/partner"
          : "/ways-to-give",
  }));
  const processSteps = [
    {
      title: "Listen locally",
      text: "Trusted partners help us understand what families are facing before a response is shaped.",
    },
    {
      title: "Confirm the need",
      text: "We review location, urgency, available funding, and partner capacity before making promises.",
    },
    {
      title: "Respond practically",
      text: "Support may include food, water, lighting, household resources, referrals, or family-stability tools.",
    },
    {
      title: "Report carefully",
      text: "Updates are shared with donor trust in mind while protecting the dignity and privacy of people served.",
    },
  ];
  const pathwayDetails = [
    {
      name: "Relief",
      purpose: "When a household is under immediate pressure, the first goal is to help them get through today with dignity.",
      examples: ["Food support", "Clean water", "Solar lighting", "Medical attention funds"],
      action: "Help meet urgent needs",
      href: "/ways-to-give",
    },
    {
      name: "Stability",
      purpose: "Once the urgent need is met, support can help families plan, recover, and feel steadier in daily life.",
      examples: ["Household planning", "Family resource guidance", "Local gardens", "Ongoing partner check-ins"],
      action: "Support stability work",
      href: "/current-projects",
    },
    {
      name: "Empowerment",
      purpose: "Longer-term care looks for ways families and communities can grow stronger with local leadership and practical tools.",
      examples: ["Water wells", "Skills training", "Income education", "Community partnerships"],
      action: "Build a partnership",
      href: "/partner",
    },
  ];

  return (
    <WebsitePage
      eyebrow="What We Do"
      title="Practical help that families can feel."
      intro="When daily life becomes heavy, support should feel personal, respectful, and close enough to matter. This is how The Daily Bread Project responds with care that brings relief today and helps families move toward a steadier tomorrow."
      links={[
        { label: "At a glance", href: "#at-a-glance" },
        { label: "On the ground", href: "#on-the-ground" },
        { label: "What we provide", href: "#what-we-provide" },
        { label: "How support works", href: "#how-support-works" },
        { label: "Long-term path", href: "#long-term-path" },
      ]}
      hideSidebar
    >
      <div className="grid gap-10">
        <section id="at-a-glance" className="scroll-mt-28 overflow-hidden rounded-lg bg-chocolate text-white shadow-sm">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-7 sm:p-9 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-gold">At a glance</p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl font-bold">We meet urgent needs first, then keep walking toward stability.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/84">
                The work starts with what a household can feel right away: food, safe water, light, widow support, and local care. From there, we look for practical next steps that help families breathe, plan, and rebuild.
              </p>
              <div className="mt-7 grid gap-3 min-[920px]:grid-cols-3 lg:grid-cols-1 2xl:grid-cols-3">
                {["Relief", "Dignity", "Stability"].map((item) => (
                  <div key={item} className="flex min-h-[124px] flex-col justify-center rounded-md bg-white/10 p-4 text-center ring-1 ring-white/15">
                    <p className="font-serif text-2xl font-bold">{item}</p>
                    <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-6 text-white/76">
                      {item === "Relief" && "Needs met with care."}
                      {item === "Dignity" && "People protected and honored."}
                      {item === "Stability" && "Support that points forward."}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/request-support" variant="light">Request Assistance</Button>
                <Button href="/ways-to-give" variant="light">Support the Work</Button>
              </div>
            </div>
            <Image
              src="/images/field/partner-meeting-speaker-enhanced.png"
              alt="A local partner speaking during a community planning meeting"
              width={1445}
              height={1088}
              className="h-80 w-full object-cover lg:h-full"
              style={{ objectPosition: "center 44%" }}
            />
          </div>
        </section>

        <section id="on-the-ground" className="scroll-mt-28">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">On the ground</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-chocolate sm:text-4xl">What care looks like in real life.</h2>
            <p className="mt-4 text-lg leading-8 text-charcoal/80">The work is not abstract. It looks like local preparation, trusted conversations, food distribution, and people being met with respect.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <figure className="overflow-hidden rounded-lg bg-white shadow-sm">
              <Image
                src={realLifePhotos[1].src}
                alt={realLifePhotos[1].alt}
                width={1100}
                height={720}
                className="h-[360px] w-full object-cover md:h-[440px]"
                style={{ objectPosition: realLifePhotos[1].position }}
              />
              <figcaption className="p-6">
                <p className="font-serif text-3xl font-bold text-chocolate">{realLifePhotos[1].title}</p>
                <p className="mt-2 leading-7 text-charcoal/75">{realLifePhotos[1].text}</p>
              </figcaption>
            </figure>
            <div className="grid gap-5">
              {[realLifePhotos[0], realLifePhotos[2], realLifePhotos[3]].map((photo) => (
                <figure key={photo.src} className="grid overflow-hidden rounded-lg bg-white shadow-sm sm:grid-cols-[180px_1fr] lg:grid-cols-1 xl:grid-cols-[180px_1fr]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={480}
                    height={360}
                    className="h-44 w-full object-cover sm:h-full lg:h-40 xl:h-full"
                    style={{ objectPosition: photo.position }}
                  />
                  <figcaption className="p-5">
                    <p className="font-serif text-2xl font-bold text-chocolate">{photo.title}</p>
                    <p className="mt-2 text-sm leading-6 text-charcoal/75">{photo.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="what-we-provide" className="scroll-mt-28">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">What we provide</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-chocolate sm:text-4xl">Six ways practical care reaches a household.</h2>
            </div>
            <Link href="/ways-to-give" className="font-bold text-terracotta underline-offset-4 hover:underline">Fund the work</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceAreas.map((service) => (
              <article key={service.title} className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={760}
                  height={520}
                  className={`w-full object-cover ${["Widow Support", "Local Partnerships", "Faith-Based Compassion and Spiritual Care"].includes(service.title) ? "h-72" : "h-52"}`}
                  style={{ objectPosition: service.imagePosition ?? "center" }}
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-3xl font-bold text-chocolate">{service.title}</h3>
                  <p className="mt-3 leading-7 text-charcoal/78">{service.text[0]}</p>
                  {service.title === "Local Partnerships" && (
                    <p className="mt-3 leading-7 text-charcoal/72">{service.text[1]}</p>
                  )}
                  <ul className="mt-5 grid gap-2">
                    {(service.title === "Local Partnerships" ? service.helps : service.helps.slice(0, 3)).map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-6 text-charcoal/75">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="mt-auto pt-5 font-bold text-terracotta underline-offset-4 hover:underline">{service.action}</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="how-support-works" className="scroll-mt-28 rounded-lg bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">How support works</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-chocolate sm:text-4xl">Simple enough to understand. Careful enough to protect people.</h2>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-lg bg-ivory p-5">
                <h3 className="font-serif text-2xl font-bold text-chocolate">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/72">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="long-term-path" className="scroll-mt-28 overflow-hidden rounded-lg bg-sand/45 shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">Long-term path</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-chocolate sm:text-4xl">Relief opens the door. Stability is the road ahead.</h2>
              <div className="mt-5 grid gap-4 leading-8 text-charcoal/80">
                {originalSiteContent.longTermVision.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="bg-forest p-6 text-white md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-gold">How care grows</p>
              <h3 className="mt-2 font-serif text-3xl font-bold">From urgent help to lasting support.</h3>
              <p className="mt-3 leading-7 text-white/78">
                A family may need food today, light tonight, medical help this month, and a steadier path for the future. This is how we think about walking with people over time.
              </p>
              <div className="mt-6 grid gap-4">
                {pathwayDetails.map((pathway) => (
                  <article key={pathway.name} className="rounded-lg bg-white/10 p-5 ring-1 ring-white/15">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="font-serif text-2xl font-bold">{pathway.name}</h4>
                      </div>
                      <Link href={pathway.href} className="text-sm font-bold text-white underline-offset-4 hover:underline">
                        {pathway.action}
                      </Link>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/80">{pathway.purpose}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pathway.examples.map((item) => (
                        <span key={item} className="rounded-full bg-white/12 px-3 py-1 text-xs font-bold text-white">{item}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-chocolate p-6 text-white shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl">Every gift of care helps a family feel less alone.</h2>
              <p className="mt-3 max-w-3xl leading-7 text-white/80">Whether you give, partner, volunteer, or reach out for support, there is a place for you in this work. Start where you are, and we will help make the next step clear, thoughtful, and respectful.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button href="/ways-to-give" variant="light">Ways to Give</Button>
              <Button href="/partner" variant="light">Partner With Us</Button>
            </div>
          </div>
        </section>
      </div>
    </WebsitePage>
  );
}
