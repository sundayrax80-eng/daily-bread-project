import { Button } from "@/components/Button";
import { TrustNote } from "@/components/FeatureBlocks";
import { Inner, PageHero, Section } from "@/components/Section";
import { donationAmounts } from "@/content/programs";
import { publishedProjects } from "@/content/projects";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Donate", description: "Give to The Daily Bread Project and help meet practical needs with dignity and care." };

export default function DonatePage() {
  return (
    <>
      <PageHero title="Your gift can become practical help." text="Every gift helps us respond with compassion, dignity, and care for families carrying real daily needs." />
      <Section>
        <Inner className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <TrustNote />
            <p className="mt-5 text-charcoal/75">A secure giving provider will process donations so payment information is handled safely outside this website.</p>
          </div>
          <form className="grid gap-5 rounded-lg bg-white p-6 shadow-sm">
            <fieldset>
              <legend className="font-bold text-chocolate">Gift type</legend>
              <div className="mt-3 flex flex-wrap gap-3">
                <label><input name="giftType" type="radio" defaultChecked /> One-time</label>
                <label><input name="giftType" type="radio" /> Monthly Bread Partner</label>
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-bold text-chocolate">Amount</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {donationAmounts.map((item) => (
                  <label key={item.label} className="rounded-md border border-chocolate/15 p-3">
                    <input name="amount" type="radio" value={item.amount} /> {item.amount ? `$${item.amount}` : "Custom"}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="grid gap-2 font-semibold">
              Project selection
              <select className="min-h-12 rounded-md border border-chocolate/20 px-3">
                <option>Give where needed most</option>
                {publishedProjects.map((project) => <option key={project.id}>{project.title}</option>)}
              </select>
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 font-semibold">First name<input className="min-h-12 rounded-md border border-chocolate/20 px-3" /></label>
              <label className="grid gap-2 font-semibold">Email<input type="email" className="min-h-12 rounded-md border border-chocolate/20 px-3" /></label>
            </div>
            <label className="grid gap-2 font-semibold">Optional dedication<input className="min-h-12 rounded-md border border-chocolate/20 px-3" /></label>
            <label className="flex gap-2"><input type="checkbox" /> Make this gift anonymous publicly</label>
            <label className="flex gap-2"><input type="checkbox" /> Send me project updates</label>
            <div className="rounded-lg bg-sand/50 p-5 text-sm">Next, you will review payment information and continue to secure processing.</div>
            <Button href="/donate/payment">Continue Giving</Button>
          </form>
        </Inner>
      </Section>
    </>
  );
}
