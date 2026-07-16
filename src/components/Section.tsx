import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section"> & { children: ReactNode };

export function Section({ children, className = "", ...props }: SectionProps) {
  return <section className={cx("px-4 py-16 sm:py-20 lg:px-8", className)} {...props}>{children}</section>;
}

export function Inner({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={cx("mx-auto max-w-7xl", className)}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-terracotta">{eyebrow}</p>}
      <h2 className="font-serif text-3xl font-bold text-chocolate sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-charcoal/80">{text}</p>}
    </div>
  );
}

export function PageHero({ title, text, eyebrow }: { title: string; text: string; eyebrow?: string }) {
  return (
    <Section className="bg-forest text-white">
      <Inner>
        <div className="max-w-4xl py-6">
          {eyebrow && <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-gold">{eyebrow}</p>}
          <h1 className="font-serif text-4xl font-bold sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">{text}</p>
        </div>
      </Inner>
    </Section>
  );
}
