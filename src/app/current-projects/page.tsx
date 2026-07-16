import type { Metadata } from "next";
import { ProjectCard } from "@/components/Cards";
import { Inner, PageHero, Section } from "@/components/Section";
import { publishedProjects } from "@/content/projects";

export const metadata: Metadata = { title: "Current Projects", description: "Explore current and planned Daily Bread Project campaigns." };

export default function CurrentProjectsPage() {
  return (
    <>
      <PageHero title="Current Projects" text="Explore the practical work taking shape now and the needs your support can help meet with dignity." />
      <Section><Inner className="grid gap-6 md:grid-cols-2">{publishedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</Inner></Section>
    </>
  );
}
