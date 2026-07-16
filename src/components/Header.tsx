"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, siteSettings } from "@/content/site";
import { Button } from "./Button";
import { cx } from "@/lib/utils";

const primaryDesktopHrefs = ["/", "/our-story", "/what-we-do", "/projects", "/ways-to-give", "/partner", "/contact"];
const moreDesktopHrefs = ["/where-we-work", "/resources", "/updates", "/transparency"];

export function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const primaryNavigation = navigation.filter((item) => primaryDesktopHrefs.includes(item.href));
  const moreNavigation = navigation.filter((item) => moreDesktopHrefs.includes(item.href));

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const moreIsActive = moreNavigation.some((item) => isActive(item.href));

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && panelRef.current) {
        const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a, button"));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-chocolate/10 bg-ivory/95 backdrop-blur">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:p-3">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link href="/" className="shrink-0 text-chocolate">
          <span className="block font-serif text-lg font-bold leading-tight xl:text-xl">{siteSettings.name}</span>
        </Link>
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 text-[13px] font-semibold lg:flex xl:gap-5" aria-label="Main navigation">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cx(
                "rounded-md px-1 py-1.5 text-charcoal hover:text-forest",
                isActive(item.href) && "text-forest underline decoration-gold decoration-2 underline-offset-4",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={moreIsActive ? "true" : undefined}
              className={cx(
                "rounded-md px-1 py-1.5 text-[13px] font-semibold text-charcoal hover:text-forest",
                moreIsActive && "text-forest underline decoration-gold decoration-2 underline-offset-4",
              )}
            >
              More
            </button>
            <div className="invisible absolute right-0 top-full z-50 w-52 translate-y-2 rounded-lg border border-chocolate/10 bg-white p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {moreNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cx("block rounded-md px-3 py-2.5 text-charcoal hover:bg-sand/50 hover:text-forest", isActive(item.href) && "bg-sand/70 text-forest")}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="hidden shrink-0 lg:block">
          <Button href="/donate">Donate</Button>
        </div>
        <button
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded-md border border-chocolate/20 px-3 py-2 text-sm font-bold lg:hidden"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-[70] bg-chocolate/40 lg:hidden" role="dialog" aria-modal="true">
          <div id="mobile-menu" ref={panelRef} className="ml-auto flex min-h-dvh w-[86%] max-w-sm flex-col bg-ivory p-6 shadow-2xl">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-serif text-xl font-bold text-chocolate">{siteSettings.name}</p>
                <p className="text-sm text-charcoal/70">{siteSettings.tagline}</p>
              </div>
              <button className="rounded-md border border-chocolate/20 px-3 py-2 text-sm font-bold" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cx("rounded-md px-3 py-3 font-semibold hover:bg-sand/50", isActive(item.href) && "bg-sand/70 text-forest")}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="/donate" onClick={() => setOpen(false)} className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-bold text-chocolate">
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
