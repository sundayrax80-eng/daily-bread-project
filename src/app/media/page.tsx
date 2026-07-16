import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/Forms";
import { Inner, PageHero, Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = { title: "Media & Press", description: "Media information, founder bio, brand assets, and inquiry form." };

export default function MediaPage() {
  const topics = ["Faith in action", "Financial stability", "Dignity-centered service", "Entrepreneurship and purpose", "Widow support", "Community development", "From survival to stability"];
  const fieldPhotos = [
    { src: "/images/field/food-distribution-group.jpg", alt: "Women holding food support bags during outreach", label: "Food support outreach" },
    { src: "/images/field/community-partner-meeting.jpg", alt: "Community leaders and partners gathered around a table", label: "Partner meetings" },
    { src: "/images/field/widow-support-handshake.jpg", alt: "A local partner greeting a woman during outreach", label: "Dignity-centered care" },
    { src: "/images/field/food-packing-team.jpg", alt: "Local team members packing food support bags", label: "Local preparation" },
  ];
  return (
    <>
      <PageHero title="Media & Press" text="For interviews, speaking, press questions, and storytelling about faith in action, dignity-centered service, and practical compassion." />
      <Section><Inner className="grid gap-6 md:grid-cols-3">{["Organization overview", "Short boilerplate", "Founder bio", "Founder photo", "Logo files", "Brand colors", "Press photos", "Fact sheet", "Recent announcements"].map((item) => <div key={item} className="rounded-lg bg-white p-5 font-bold text-chocolate shadow-sm">{item}</div>)}</Inner></Section>
      <Section className="bg-sand/35">
        <Inner>
          <SectionHeading title="Field photos" text="Real-life photos from partner meetings, local preparation, food support, and dignity-centered outreach." />
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {fieldPhotos.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <Image src={photo.src} alt={photo.alt} width={620} height={520} className="h-52 w-full object-cover" />
                <figcaption className="p-4 font-serif text-xl font-bold text-chocolate">{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </Inner>
      </Section>
      <Section className="bg-white"><Inner><SectionHeading title="Speaking topics" /><div className="mt-8 grid gap-4 md:grid-cols-4">{topics.map((topic) => <div key={topic} className="rounded-lg border border-chocolate/10 p-5">{topic}</div>)}</div></Inner></Section>
      <Section className="bg-sand/35"><Inner className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading title="Media inquiry" text="Use this form for interview, speaking, or press requests." /><ContactForm endpoint="/api/media" type="media" /></Inner></Section>
    </>
  );
}
