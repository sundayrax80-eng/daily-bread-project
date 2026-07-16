import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { NewsletterForm } from "@/components/Forms";
import { Inner, PageHero, Section } from "@/components/Section";
import { publishedResources } from "@/content/resources";

export function generateStaticParams() {
  return publishedResources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = publishedResources.find((item) => item.slug === slug);
  return {
    title: resource?.title || "Resource",
    description: resource?.description || "The Daily Bread Project resource.",
    robots: resource?.active ? undefined : { index: false, follow: true },
  };
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = publishedResources.find((item) => item.slug === slug);
  if (!resource) notFound();
  const related = publishedResources.filter((item) => item.slug !== resource.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={resource.category} title={resource.title} text={resource.description} />
      <Section>
        <Inner className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="overflow-hidden rounded-lg bg-white shadow-sm">
            <Image src={resource.image} alt="" width={1200} height={760} className="h-80 w-full object-cover" />
            <div className="p-6">
              <nav aria-label="Breadcrumb" className="mb-5 text-sm font-semibold text-charcoal/70">
                <Link href="/" className="hover:text-chocolate">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/resources" className="hover:text-chocolate">Resources</Link>
                <span className="mx-2">/</span>
                <span className="text-chocolate">{resource.title}</span>
              </nav>
              <h2 className="font-serif text-3xl font-bold text-chocolate">Download information</h2>
              <p className="mt-4 leading-8 text-charcoal/80">
                This resource is designed to offer practical guidance in a simple {resource.fileType} format. {resource.active ? "It is available now." : "If you need it, reach out and we will let you know when it is ready to share."}
              </p>
              <p className="mt-4 leading-8 text-charcoal/80">
                {resource.gated || resource.emailRequired ? "We may ask for an email so we can send the resource and follow up with helpful updates." : "This resource is meant to be easy to access and share."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={resource.active && resource.downloadLink ? resource.downloadLink : "/contact"}>{resource.active ? "Download" : "Ask About This Resource"}</Button>
                <Button href="/what-we-do" variant="secondary">Related Programs</Button>
              </div>
            </div>
          </article>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg bg-sand/45 p-5">
              <p className="font-serif text-2xl font-bold text-chocolate">Related resources</p>
              <div className="mt-4 grid gap-3">
                {related.map((item) => (
                  <Link key={item.slug} href={`/resources/${item.slug}`} className="rounded-md bg-white p-3 text-sm font-bold text-chocolate hover:bg-ivory">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </Inner>
      </Section>
      <Section className="bg-sand/35">
        <Inner className="max-w-3xl"><NewsletterForm /></Inner>
      </Section>
    </>
  );
}
