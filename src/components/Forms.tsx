"use client";

import { FormEvent, useState } from "react";
import { newsletterInterests } from "@/content/site";
import { Button } from "./Button";

type FormState = "idle" | "loading" | "success" | "error";

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-chocolate">
      {label}{required ? " *" : ""}
      <input name={name} type={type} required={required} className="min-h-12 rounded-md border border-chocolate/20 bg-white px-3 text-base text-charcoal focus:border-forest focus:outline-none focus:ring-2 focus:ring-gold/40" />
    </label>
  );
}

function Textarea({ label, name, required = false }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-chocolate">
      {label}{required ? " *" : ""}
      <textarea name={name} required={required} rows={5} className="rounded-md border border-chocolate/20 bg-white px-3 py-3 text-base text-charcoal focus:border-forest focus:outline-none focus:ring-2 focus:ring-gold/40" />
    </label>
  );
}

function Select({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-chocolate">
      {label}{required ? " *" : ""}
      <select name={name} required={required} className="min-h-12 rounded-md border border-chocolate/20 bg-white px-3 text-base text-charcoal focus:border-forest focus:outline-none focus:ring-2 focus:ring-gold/40">
        <option value="">Select one</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}

function Honeypot() {
  return <label className="hidden">Company website<input name="company_website" tabIndex={-1} autoComplete="off" /></label>;
}

function Status({ state, success }: { state: FormState; success: string }) {
  if (state === "success") return <p className="rounded-md bg-forest p-4 font-semibold text-white">{success}</p>;
  if (state === "error") return <p className="rounded-md bg-terracotta p-4 font-semibold text-white">Please review the required fields and try again.</p>;
  return null;
}

function useForm(formName: string, success: string) {
  const [state, setState] = useState<FormState>("idle");
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "loading") return;
    setState("loading");
    const formElement = event.currentTarget;
    const encoded = new URLSearchParams();
    for (const [key, value] of new FormData(formElement).entries()) {
      if (typeof value === "string") encoded.append(key, value);
    }
    encoded.set("form-name", formName);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });
      setState(response.ok ? "success" : "error");
      if (response.ok) formElement.reset();
    } catch {
      setState("error");
    }
  }
  return { state, onSubmit, success };
}

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const formName = "newsletter";
  const form = useForm(formName, "Welcome. You are on the list for future updates.");
  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="company_website"
      onSubmit={form.onSubmit}
      className={compact ? "grid gap-3 md:grid-cols-[1fr_1fr_auto]" : "grid gap-4 rounded-lg bg-white p-6 shadow-sm"}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="subject" value="New newsletter signup — The Daily Bread Project" data-remove-prefix />
      {!compact && <p className="font-serif text-2xl font-bold text-chocolate">Stay connected to the work.</p>}
      <Honeypot />
      <input
        name="firstName"
        required
        placeholder="First name"
        aria-label="First name"
        className="min-h-12 rounded-md border border-chocolate/20 bg-white px-3 text-charcoal placeholder:text-charcoal/55 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/45"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email address"
        aria-label="Email address"
        className="min-h-12 rounded-md border border-chocolate/20 bg-white px-3 text-charcoal placeholder:text-charcoal/55 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/45"
      />
      {!compact && (
        <fieldset className="grid gap-2 text-sm text-charcoal md:grid-cols-2">
          <legend className="mb-2 font-bold text-chocolate">Interests</legend>
          {newsletterInterests.map((interest) => <label key={interest} className="flex gap-2"><input name="interests" type="checkbox" value={interest} /> {interest}</label>)}
        </fieldset>
      )}
      <Button type="submit" className="whitespace-nowrap">{form.state === "loading" ? "Joining..." : "Join the Community"}</Button>
      <Status state={form.state} success={form.success} />
      {!compact && <p className="text-sm text-charcoal/70">We respect your privacy and will use your information only for updates you request.</p>}
    </form>
  );
}

export function ContactForm({ type = "contact" }: { type?: "contact" | "volunteer" | "assistance" | "partnership" | "media" }) {
  const success =
    type === "volunteer"
      ? "Thank you for volunteering with The Daily Bread Project. We received your information and will be in touch soon."
      : type === "assistance"
        ? "Thank you. We received your request and will review it with care. Submission does not guarantee assistance."
        : "Thank you. Your message was received.";
  const formName = type;
  const subject = `New ${type} submission — The Daily Bread Project`;
  const form = useForm(formName, success);
  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="company_website"
      onSubmit={form.onSubmit}
      className="grid gap-5 rounded-lg border border-chocolate/10 bg-white p-6 shadow-sm"
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="subject" value={subject} data-remove-prefix />
      <Honeypot />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={type === "contact" ? "Name" : "Full name"} name="name" required />
        <Field label="Email" name="email" type="email" required={type !== "assistance"} />
        <Field label="Phone" name="phone" required={type === "assistance"} />
        {type === "contact" && <Select label="Reason for contact" name="reason" required options={["General question", "Donation question", "Volunteer", "Partnership", "Media", "Request assistance", "Resource question", "Other"]} />}
        {type === "volunteer" && <><Field label="City" name="city" /><Field label="State or region" name="region" /><Field label="Country" name="country" required /><Select label="Areas of interest" name="interests" required options={["Remote support", "Event support", "Outreach support", "Administrative support", "Fundraising support", "Media and storytelling", "Professional skills", "Prayer support"]} /><Field label="Availability" name="availability" required /><Select label="Preference" name="preference" options={["Remote", "In person", "Either"]} /></>}
        {type === "assistance" && <><Field label="Country" name="country" required /><Field label="State or region" name="region" /><Field label="City or community" name="community" required /><Select label="Type of assistance requested" name="assistanceType" required options={["Food assistance", "Widow support", "Household essentials", "Solar lighting", "Clean water", "Financial education", "Family stability resources", "Other"]} /><Field label="Household size" name="householdSize" /><Select label="Widow status if voluntarily disclosed" name="widowStatus" options={["Prefer not to say", "Yes", "No"]} /><Select label="Best way to contact" name="contactMethod" required options={["Phone", "Email", "WhatsApp", "Through a local partner"]} /></>}
        {type === "partnership" && <><Field label="Organization" name="organization" required /><Select label="Partner type" name="partnerType" required options={["Church", "Business", "Foundation", "Nonprofit", "Community organization", "Media organization", "Other"]} /><Select label="Interest" name="interest" required options={["Project sponsorship", "Program underwriting", "Supply drive", "Volunteer team", "Grant partnership", "Media partnership", "Resource sharing", "Other"]} /></>}
        {type === "media" && <><Field label="Outlet or organization" name="outlet" required /><Field label="Deadline" name="deadline" required /></>}
      </div>
      <Textarea label={type === "assistance" ? "Brief description of need" : "Message"} name={type === "assistance" ? "need" : "message"} required />
      {type === "volunteer" && <Textarea label="Relevant experience, skills, and why you want to volunteer" name="skills" />}
      <label className="flex gap-3 text-sm text-charcoal"><input name="consent" value="yes" type="checkbox" required /> I consent to being contacted about this submission.</label>
      <Button type="submit">{form.state === "loading" ? "Sending..." : "Submit"}</Button>
      <Status state={form.state} success={form.success} />
    </form>
  );
}
