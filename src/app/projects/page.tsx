import type { Metadata } from "next";
import { ProjectCard } from "@/components/Cards";
import { Inner, PageHero, Section, SectionHeading } from "@/components/Section";
import { publishedProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore current, planned, and fundraising projects from The Daily Bread Project.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Current Projects" text="Every project begins with a real need, a trusted relationship, and a commitment to serve with dignity." />
      <Section>
        <Inner>
          <SectionHeading title="Find a project to support" text="Explore the work taking shape now, from food and clean water to solar lighting, widow support, and family stability." />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {publishedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </Inner>
      </Section>
    </>
  );
}
