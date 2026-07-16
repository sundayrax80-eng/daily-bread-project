import type { Metadata } from "next";
import { MapSection } from "@/components/FeatureBlocks";
import { Inner, PageHero, Section, SectionHeading } from "@/components/Section";
import { publicLocations } from "@/content/locations";

export const metadata: Metadata = { title: "Where We Work", description: "Explore Daily Bread Project outreach areas in Nigeria, surrounding villages, and nearby communities." };

export default function WhereWeWorkPage() {
  return (
    <>
      <PageHero title="Nigeria-focused work rooted in local trust." text="The Daily Bread Project serves in Nigeria-focused outreach areas, including surrounding villages and nearby communities reached through trusted local relationships." />
      <MapSection />
      <Section><Inner><SectionHeading title="Growing community updates" text="As projects are ready to share publicly, this page can highlight states, villages, surrounding communities, active projects, local partners, and related stories without overstating exact coverage." />{publicLocations.length === 0 && <p className="mt-8 rounded-lg bg-white p-6 shadow-sm">More community details will be shared as local projects are ready for public updates.</p>}</Inner></Section>
    </>
  );
}
