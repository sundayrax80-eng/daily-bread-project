import Image from "next/image";
import Link from "next/link";
import { Project } from "@/content/projects";
import { formatMoney, percent } from "@/lib/utils";
import { Button } from "./Button";

type PathwayIcon = "give" | "volunteer" | "support" | "partner";

function PathwayIcon({ icon }: { icon: PathwayIcon }) {
  const common = "h-7 w-7";
  if (icon === "give") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 11.5 9.6 9a3.4 3.4 0 0 1 4.8 0L17 11.5" />
        <path d="M12 19 4.8 14.8A3.2 3.2 0 0 1 3 12V9.5A2.5 2.5 0 0 1 5.5 7H8" />
        <path d="m12 19 7.2-4.2A3.2 3.2 0 0 0 21 12V9.5A2.5 2.5 0 0 0 18.5 7H16" />
        <path d="M12 12.5c-1.3-1.4-3.8.1-2.6 2.1.6 1 1.8 1.7 2.6 2.4.8-.7 2-1.4 2.6-2.4 1.2-2-1.3-3.5-2.6-2.1Z" />
      </svg>
    );
  }
  if (icon === "volunteer") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 11a3 3 0 1 0-6 0" />
        <path d="M8 20a6 6 0 0 1 12 0" />
        <path d="M8 12a2.5 2.5 0 1 1-5 0" />
        <path d="M2 20a5 5 0 0 1 6-4.9" />
      </svg>
    );
  }
  if (icon === "support") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-3.5 7-10V5l-7-3-7 3v6c0 6.5 7 10 7 10Z" />
        <path d="M12 14.8c-1.7-1.5-3.5-2.9-3.5-4.7A2.1 2.1 0 0 1 12 8.7a2.1 2.1 0 0 1 3.5 1.4c0 1.8-1.8 3.2-3.5 4.7Z" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 12 2.3-2.3a2 2 0 0 1 2.8 0l1.2 1.2" />
      <path d="m14 11 2 2a2 2 0 0 1 0 2.8l-.2.2a2 2 0 0 1-2.8 0l-1-1" />
      <path d="m9 13 2 2" />
      <path d="M7 16 4 13l4-4 2 2" />
      <path d="m17 16 3-3-4-4-2 2" />
    </svg>
  );
}

export function PathwayCard({
  title,
  text,
  href,
  cta,
  supportingLine,
  icon,
  ariaLabel,
  image,
  imageAlt,
  imagePosition,
}: {
  title: string;
  text: string;
  href: string;
  cta?: string;
  supportingLine?: string;
  icon?: PathwayIcon;
  ariaLabel?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel || `${title}: ${cta || "Learn more"}`}
      className="group flex h-full min-h-[320px] flex-col overflow-hidden rounded-lg border border-chocolate/10 bg-white shadow-sm transition hover:-translate-y-1 hover:bg-gold/10 hover:shadow-md focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-gold sm:flex-row motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {image && (
        <div className="relative h-56 w-full overflow-hidden bg-sand sm:h-36 sm:w-auto">
          <Image
            src={image}
            alt={imageAlt || ""}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-contain transition duration-500 group-hover:scale-105 sm:object-cover motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            style={{ objectPosition: imagePosition || "center" }}
          />
          <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/95 text-forest shadow-sm transition group-hover:bg-forest group-hover:text-white motion-reduce:transition-none">
            {icon ? <PathwayIcon icon={icon} /> : null}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-2xl font-bold text-chocolate">{title}</h3>
        <p className="mt-3 leading-7 text-charcoal/78">{text}</p>
        {supportingLine && <p className="mt-3 text-sm font-semibold leading-6 text-forest">{supportingLine}</p>}
        <span className="mt-auto pt-4 font-bold text-terracotta group-hover:text-chocolate">
          {cta || "Learn More"} <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

export function ProgramCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-lg border border-chocolate/10 bg-white p-7">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-sand text-lg font-bold text-chocolate">DB</div>
      <h3 className="font-serif text-2xl font-bold text-chocolate">{title}</h3>
      <p className="mt-3 leading-7 text-charcoal/75">{text}</p>
    </article>
  );
}

export function ProgressBar({ project }: { project: Project }) {
  if (!project.verified || !project.visibility.donationProgress) {
    return <p className="rounded-md bg-sand/50 p-4 text-sm font-semibold text-chocolate">More giving details will be shared soon.</p>;
  }
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm font-bold">
        <span>{formatMoney(project.raised)} raised</span>
        <span>{formatMoney(project.goal)} goal</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-sand"><div className="h-full bg-forest" style={{ width: `${percent(project.raised, project.goal)}%` }} /></div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-chocolate/10 bg-white shadow-sm">
      <Image
        src={project.image}
        alt=""
        width={900}
        height={560}
        className="h-auto w-full object-contain sm:h-56 sm:object-cover"
        style={{ objectPosition: project.imagePosition || "center" }}
      />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em]">
          <span className="rounded-full bg-forest/10 px-3 py-1 text-forest">{project.status}</span>
          <span className="rounded-full bg-sand px-3 py-1 text-chocolate">{project.projectType}</span>
        </div>
        <h3 className="mt-4 font-serif text-2xl font-bold text-chocolate">{project.title}</h3>
        <p className="mt-3 text-charcoal/75">{project.summary}</p>
        <div className="mt-5"><ProgressBar project={project} /></div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/donate">Donate</Button>
          <Button href={`/projects/${project.slug}`} variant="secondary">View Project</Button>
        </div>
      </div>
    </article>
  );
}

export function ResourceCard({ resource }: { resource: { title: string; slug?: string; image: string; category: string; description: string } }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-chocolate/10 bg-white shadow-sm">
      <Image src={resource.image} alt="" width={900} height={560} className="h-44 w-full object-cover" />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-terracotta">{resource.category}</p>
        <h3 className="mt-3 font-serif text-2xl font-bold text-chocolate">{resource.title}</h3>
        <p className="mt-3 text-charcoal/75">{resource.description}</p>
        <div className="mt-auto pt-5">
          <Button href={resource.slug ? `/resources/${resource.slug}` : "/resources"} variant="secondary">View Resource</Button>
        </div>
      </div>
    </article>
  );
}

export function ArticleCard({ article }: { article: { slug: string; title: string; category: string; excerpt: string; author: string; readingTime: string; featuredImage: string; demoContent: boolean } }) {
  return (
    <article className="overflow-hidden rounded-lg border border-chocolate/10 bg-white">
      <Image src={article.featuredImage} alt="" width={900} height={560} className="h-52 w-full object-cover" />
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-terracotta">{article.category} · {article.readingTime}</p>
        <h3 className="mt-3 font-serif text-2xl font-bold text-chocolate">{article.title}</h3>
        <p className="mt-3 text-charcoal/75">{article.excerpt}</p>
        {article.demoContent && <p className="mt-3 text-sm font-semibold text-forest">Prepared as a helpful guide for readers.</p>}
        <Link className="mt-5 inline-block font-bold text-terracotta" href={`/updates/${article.slug}`}>Read More</Link>
      </div>
    </article>
  );
}
