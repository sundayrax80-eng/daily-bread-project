import Link from "next/link";
import type { ReactNode } from "react";
import { siteSettings } from "@/content/site";
import { Button } from "./Button";
import { Inner, Section } from "./Section";

type SidebarLink = { label: string; href: string };

export function WebsitePage({
  eyebrow,
  title,
  intro,
  links,
  children,
  hideSidebar = false,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  links: SidebarLink[];
  children: ReactNode;
  hideSidebar?: boolean;
}) {
  return (
    <>
      <Section className="border-b border-chocolate/10 bg-ivory py-12 sm:py-14">
        <Inner>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm font-semibold text-charcoal/70">
            <Link href="/" className="hover:text-chocolate">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-chocolate">{title}</span>
          </nav>
          {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-terracotta">{eyebrow}</p>}
          <h1 className="max-w-5xl font-serif text-4xl font-bold text-chocolate sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-charcoal/80">{intro}</p>
        </Inner>
      </Section>
      <Section className="py-10 sm:py-14">
        <Inner className={hideSidebar ? "" : "grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]"}>
          <div className="min-w-0">{children}</div>
          {!hideSidebar && (
            <aside className="lg:sticky lg:top-28 lg:self-start" aria-label={`${title} page tools`}>
              <div className="rounded-lg border border-chocolate/10 bg-white p-5 shadow-sm">
                <p className="font-serif text-2xl font-bold text-chocolate">On this page</p>
                <nav className="mt-4 grid gap-2">
                  {links.map((link) => (
                    <a key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm font-bold text-charcoal hover:bg-sand/45">
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="mt-5 rounded-lg bg-forest p-5 text-white shadow-sm">
                <p className="font-serif text-2xl font-bold">Ready to help?</p>
                <p className="mt-3 text-sm leading-6 text-white/85">Give, volunteer, partner, or ask a question. However you begin, we will help you find a meaningful next step.</p>
                <div className="mt-5 grid gap-2">
                  <Button href="/donate" variant="light" className="w-full">Donate</Button>
                  <Button href="/contact" variant="light" className="w-full">Contact Us</Button>
                </div>
              </div>
              <div className="mt-5 rounded-lg border border-chocolate/10 bg-sand/55 p-5 text-sm leading-6 text-charcoal">
                <p className="font-bold text-chocolate">Contact</p>
                <p className="mt-2">{siteSettings.contact.general}</p>
                <p>{siteSettings.contact.phone}</p>
                <p className="mt-2">{siteSettings.locationLine}<br />{siteSettings.serviceLine}</p>
              </div>
            </aside>
          )}
        </Inner>
      </Section>
    </>
  );
}
