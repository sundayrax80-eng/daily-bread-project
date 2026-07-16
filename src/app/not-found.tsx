import { Button } from "@/components/Button";
import { Inner, Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="bg-ivory">
      <Inner className="max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-terracotta">Page not found</p>
        <h1 className="mt-4 font-serif text-5xl font-bold text-chocolate">This page is not available.</h1>
        <p className="mt-5 text-lg leading-8 text-charcoal/75">
          The link may have changed, or the page may not be published yet. Use one of these paths to keep moving.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Home</Button>
          <Button href="/projects" variant="secondary">Projects</Button>
          <Button href="/contact" variant="secondary">Contact</Button>
        </div>
      </Inner>
    </Section>
  );
}
