import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { WebsitePage } from "@/components/WebsitePage";
import { siteSettings } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Daily Bread Project for giving, volunteer, partnership, media, resource, or assistance questions.",
};

export default function ContactPage() {
  return (
    <WebsitePage
      eyebrow="Contact"
      title="Contact The Daily Bread Project"
      intro="Whether you want to give, volunteer, partner, request support, or simply ask a question, we are glad you are here."
      links={[
        { label: "Contact details", href: "#details" },
        { label: "Send a message", href: "#form" },
        { label: "Response notes", href: "#notes" },
      ]}
    >
      <div className="grid gap-10">
        <section id="details" className="scroll-mt-28 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="font-serif text-3xl font-bold text-chocolate">Contact details</h2>
          <dl className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-lg bg-ivory p-5">
              <dt className="font-bold text-chocolate">Website</dt>
              <dd className="mt-1">dailybreadproject.us</dd>
            </div>
            <div className="rounded-lg bg-ivory p-5">
              <dt className="font-bold text-chocolate">Email</dt>
              <dd className="mt-1">{siteSettings.contact.general}</dd>
            </div>
            <div className="rounded-lg bg-ivory p-5">
              <dt className="font-bold text-chocolate">Phone</dt>
              <dd className="mt-1">{siteSettings.contact.phone}</dd>
            </div>
            <div className="rounded-lg bg-ivory p-5">
              <dt className="font-bold text-chocolate">Location</dt>
              <dd className="mt-1">Houston, Texas, USA<br />Serving Nigeria-focused communities, surrounding villages, and nearby outreach areas</dd>
            </div>
          </dl>
        </section>

        <section id="form" className="scroll-mt-28">
          <ContactForm />
        </section>

        <section id="notes" className="scroll-mt-28 rounded-lg border border-chocolate/10 bg-sand/45 p-6">
          <h2 className="font-serif text-3xl font-bold text-chocolate">Response notes</h2>
          <p className="mt-4 leading-8 text-charcoal/80">
            Some messages may need follow-up, especially assistance requests, partnership conversations, and media inquiries. Please do not submit private financial records, government identification, medical records, or highly sensitive documents through the basic contact form.
          </p>
        </section>
      </div>
    </WebsitePage>
  );
}
