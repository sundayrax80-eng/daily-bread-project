import Link from "next/link";
import Image from "next/image";
import { originalSiteContent } from "@/content/original-site";
import { audiencePathways, navigation, siteSettings } from "@/content/site";
import { NewsletterForm } from "./Forms";

export function Footer() {
  return (
    <footer className="bg-chocolate text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <div className="inline-flex rounded-lg bg-ivory p-3 shadow-sm ring-1 ring-white/15">
            <Image src={siteSettings.logo} alt={siteSettings.name} width={989} height={806} className="h-20 w-auto object-contain" />
          </div>
          <p className="sr-only">{siteSettings.name}</p>
          <p className="mt-4 max-w-md text-ivory/80">{originalSiteContent.footerMission}</p>
          <p className="mt-4 text-sm text-ivory/70">{siteSettings.locationLine}<br />{siteSettings.serviceLine}</p>
          <p className="mt-3 text-sm text-ivory/70">{siteSettings.nonprofitStatus}</p>
        </div>
        <div>
          <p className="font-bold">Explore</p>
          <div className="mt-4 grid gap-2 text-sm">
            {navigation.map((item) => <Link key={item.href} className="text-ivory/80 hover:text-white" href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="font-bold">Pathways</p>
          <div className="mt-4 grid gap-2 text-sm">
            {audiencePathways.map((item) => <Link key={item.href} className="text-ivory/80 hover:text-white" href={item.href}>{item.title}</Link>)}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-white/10 px-4 py-8 lg:px-8">
        <NewsletterForm compact />
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-sm text-ivory/70">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-4">
          <span>Copyright {new Date().getFullYear()} The Daily Bread Project.</span>
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms-of-use" className="hover:text-white">Terms of Use</Link>
          <Link href="/donation-policy" className="hover:text-white">Donation Policy</Link>
          <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
          <Link href="/safeguarding" className="hover:text-white">Safeguarding</Link>
          <Link href="/website-disclaimer" className="hover:text-white">Website Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
