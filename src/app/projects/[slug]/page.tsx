import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ProgressBar, ProjectCard } from "@/components/Cards";
import { Inner, PageHero, Section, SectionHeading } from "@/components/Section";
import { publishedProjects } from "@/content/projects";

export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = publishedProjects.find((item) => item.slug === slug);
  return {
    title: project?.title || "Project",
    description: project?.summary || "The Daily Bread Project project detail.",
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = publishedProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  const related = publishedProjects.filter((item) => item.id !== project.id).slice(0, 2);

  return (
    <>
      <PageHero eyebrow={project.status} title={project.title} text={project.summary} />
      <Section>
        <Inner className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Image src={project.image} alt="" width={1200} height={760} className="rounded-lg object-cover shadow-sm" />
          <div className="rounded-lg bg-white p-7 shadow-sm">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm font-semibold text-charcoal/70">
              <Link href="/" className="hover:text-chocolate">Home</Link><span className="mx-2">/</span>
              <Link href="/projects" className="hover:text-chocolate">Projects</Link><span className="mx-2">/</span>
              <span className="text-chocolate">{project.title}</span>
            </nav>
            <h2 className="font-serif text-3xl font-bold text-chocolate">Project snapshot</h2>
            <div className="mt-5"><ProgressBar project={project} /></div>
            <dl className="mt-6 grid gap-4 text-sm">
              <div><dt className="font-bold">Status</dt><dd>{project.status}</dd></div>
              <div><dt className="font-bold">Location</dt><dd>{project.location}</dd></div>
              <div><dt className="font-bold">Community</dt><dd>{project.community}</dd></div>
              <div><dt className="font-bold">Last update</dt><dd>{project.lastUpdated || "More updates will be shared soon."}</dd></div>
            </dl>
            <Button href="/donate" className="mt-6">Support This Project</Button>
          </div>
        </Inner>
      </Section>
      <Section className="bg-sand/35">
        <Inner className="grid gap-6 md:grid-cols-3">
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-chocolate">The need</h2>
            <p className="mt-3 leading-7 text-charcoal/78">{project.need}</p>
          </article>
          <article className="rounded-lg bg-forest p-6 text-white shadow-sm">
            <h2 className="font-serif text-2xl font-bold">Why it matters</h2>
            <p className="mt-3 leading-7 text-white/86">{project.whyItMatters}</p>
          </article>
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-chocolate">How we respond</h2>
            <p className="mt-3 leading-7 text-charcoal/78">{project.solution}</p>
          </article>
        </Inner>
      </Section>
      <Section>
        <Inner className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-terracotta">Project story</p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-chocolate md:text-5xl">What this support can change</h2>
            <p className="mt-5 text-xl leading-9 text-charcoal/78">{project.story}</p>
          </div>
          <div className="rounded-lg bg-white p-7 shadow-sm">
            <h3 className="font-serif text-3xl font-bold text-chocolate">Support helps make room for</h3>
            <ul className="mt-6 grid gap-4">
              {project.supportMakesPossible.map((item) => (
                <li key={item} className="flex gap-3 text-lg leading-7 text-charcoal/78">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Inner>
      </Section>
      <Section className="bg-forest text-white">
        <Inner>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-gold">Our approach</p>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-5xl">Careful support, honest updates</h2>
            <p className="mt-5 text-lg leading-8 text-white/82">
              Every project should move at the pace of trust. We confirm the need, listen locally, use resources thoughtfully, and share what we can without turning families into displays.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {project.approach.map((item) => (
              <article key={item} className="rounded-lg border border-white/15 bg-white/8 p-5">
                <p className="leading-7 text-white/84">{item}</p>
              </article>
            ))}
          </div>
        </Inner>
      </Section>
      <Section className="bg-white">
        <Inner className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading title="Budget, timing, and reporting" text={project.transparencyNote} />
          <div className="rounded-lg border border-chocolate/10 bg-ivory p-6">
            <h3 className="font-serif text-2xl font-bold text-chocolate">What will be shared as it becomes ready</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {Object.entries(project.visibility).map(([key, visible]) => (
                <div key={key} className="rounded-md bg-white p-4 text-sm shadow-sm">
                  <p className="font-bold capitalize text-chocolate">{key.replace(/([A-Z])/g, " $1")}</p>
                  <p className="mt-1 text-charcoal/70">{visible ? "Planned for public updates." : "Added once confirmed."}</p>
                </div>
              ))}
            </div>
          </div>
        </Inner>
      </Section>
      {related.length ? <Section><Inner><SectionHeading title="Related projects" /><div className="mt-8 grid gap-6 md:grid-cols-2">{related.map((item) => <ProjectCard key={item.id} project={item} />)}</div></Inner></Section> : null}
    </>
  );
}
