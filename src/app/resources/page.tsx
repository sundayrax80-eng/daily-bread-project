import type { Metadata } from "next";
import { ResourceCard } from "@/components/Cards";
import { Inner, PageHero, Section } from "@/components/Section";
import { resources } from "@/content/resources";

export const metadata: Metadata = { title: "Resource Center", description: "Financial education, family stability, widow support, volunteer, church, and partner resources." };

export default function ResourcesPage() {
  return (
    <>
      <PageHero title="Resource Center" text="Practical guides, checklists, and tools to support families, volunteers, churches, and partners with care." />
      <Section><Inner className="grid gap-6 md:grid-cols-3">{resources.map((resource) => <ResourceCard key={resource.title} resource={resource} />)}</Inner></Section>
    </>
  );
}
