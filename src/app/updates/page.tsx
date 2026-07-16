import type { Metadata } from "next";
import { ArticleCard } from "@/components/Cards";
import { Inner, PageHero, Section } from "@/components/Section";
import { articles } from "@/content/articles";

export const metadata: Metadata = { title: "Updates", description: "Project updates, impact stories, founder notes, and transparency updates." };

export default function UpdatesPage() {
  return (
    <>
      <PageHero title="Updates, stories, and field notes." text="Follow the heart behind the work through project updates, reflections, and stories of practical compassion." />
      <Section><Inner className="grid gap-6 md:grid-cols-3">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</Inner></Section>
    </>
  );
}
