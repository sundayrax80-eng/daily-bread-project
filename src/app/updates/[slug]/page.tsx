import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { NewsletterForm } from "@/components/Forms";
import { Inner, PageHero, Section } from "@/components/Section";
import { articles } from "@/content/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return { title: article?.title || "Update", robots: article?.demoContent ? { index: false, follow: false } : undefined };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <>
      <PageHero eyebrow={article.category} title={article.title} text={article.excerpt} />
      <Section>
        <Inner className="max-w-4xl">
          <Image src={article.featuredImage} alt="" width={1200} height={760} className="rounded-lg" />
          <article className="mt-8 rounded-lg bg-white p-7 leading-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-terracotta">{article.author} · {article.date} · {article.readingTime}</p>
            <div className="mt-7 space-y-5 text-lg text-charcoal/82">
              {article.body.map((block, index) => {
                if (block.type === "heading") {
                  return <h2 key={`${block.text}-${index}`} className="pt-5 font-serif text-3xl font-bold leading-tight text-chocolate">{block.text}</h2>;
                }
                if (block.type === "list") {
                  return (
                    <ul key={`${block.items[0]}-${index}`} className="space-y-2 pl-6">
                      {block.items.map((item) => <li key={item} className="list-disc pl-1">{item}</li>)}
                    </ul>
                  );
                }
                return <p key={`${block.text}-${index}`}>{block.text}</p>;
              })}
            </div>
            <div className="mt-10 rounded-md bg-sand/45 p-5 text-sm font-semibold text-charcoal/75">
              {article.consentStatus}. We protect personal details while speaking honestly about the needs communities face.
            </div>
          </article>
        </Inner>
      </Section>
      <Section className="bg-sand/35"><Inner className="max-w-3xl"><NewsletterForm /></Inner></Section>
    </>
  );
}
