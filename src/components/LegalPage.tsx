import Link from "next/link";
import { Inner, PageHero, Section } from "@/components/Section";
import { legalNote, siteSettings } from "@/content/site";

type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Policy = {
  intro: string;
  sections: PolicySection[];
};

const policies: Record<string, Policy> = {
  privacy: {
    intro:
      "This Privacy Policy explains how The Daily Bread Project collects, uses, and protects information shared through this website.",
    sections: [
      {
        title: "Information we collect",
        paragraphs: [
          "We collect information that visitors choose to submit through forms, email, newsletter signups, volunteer interest forms, assistance requests, partnership inquiries, media requests, donor preference forms, and contact forms.",
        ],
        bullets: ["Name", "Email address", "Phone number", "Location", "Message details", "Volunteer or partnership interests", "Assistance request information", "Donation preference information"],
      },
      {
        title: "How we use information",
        bullets: [
          "To respond to questions and requests",
          "To follow up with volunteers, donors, partners, and families seeking support",
          "To send newsletters or project updates when someone signs up",
          "To understand what kind of support or partnership is being requested",
          "To improve website content and communication",
          "To maintain basic records for accountability and donor stewardship",
        ],
      },
      {
        title: "Sensitive information",
        paragraphs: [
          "We do not ask visitors to upload highly sensitive documents through basic website forms. If additional information is ever needed for assistance, partnership, or donor records, it should be requested through a careful and appropriate process.",
          "Assistance requests are reviewed with respect and privacy, but submitting a request does not guarantee support.",
        ],
      },
      {
        title: "Donor and payment information",
        paragraphs: [
          "This website does not store raw payment-card information. Online gifts may be processed through third-party payment platforms, and those platforms may collect payment details according to their own privacy and security policies.",
        ],
      },
      {
        title: "Sharing information",
        paragraphs: ["We do not sell personal information. We may share limited information only when needed to respond to a request, operate the website, process donations, comply with law, protect safety, or coordinate approved nonprofit work."],
      },
      {
        title: "Photos, stories, and dignity",
        paragraphs: [
          "The Daily Bread Project uses care when sharing photos, stories, and updates. We avoid publishing private details that could expose or embarrass vulnerable people, and we seek to share stories in a way that honors dignity.",
        ],
      },
      {
        title: "Your choices",
        bullets: [
          "You may unsubscribe from emails when an unsubscribe option is provided.",
          "You may contact us to update or correct information you submitted.",
          "You may ask questions about how your information is used.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [`For privacy questions, contact ${siteSettings.contact.general}.`],
      },
    ],
  },
  donation: {
    intro:
      "This Donation Policy explains how gifts to The Daily Bread Project are received, described, and stewarded.",
    sections: [
      {
        title: "Nonprofit status",
        paragraphs: [
          `${siteSettings.name} is an ${siteSettings.nonprofitStatus}. ${siteSettings.ein}.`,
          siteSettings.taxDeductibleWording,
        ],
      },
      {
        title: "How donations may be used",
        paragraphs: [
          "Donations help support the mission of The Daily Bread Project, including food support, clean water access, solar lighting, widow support, family stability resources, project coordination, local partnerships, responsible operations, and related charitable work.",
        ],
      },
      {
        title: "Project-specific giving",
        paragraphs: [
          "When a donor gives toward a specific project or purpose, The Daily Bread Project makes every reasonable effort to use the gift for that stated purpose. If a project is fully funded, delayed, changed, or no longer feasible, remaining funds may be used for a similar charitable purpose that supports the mission.",
        ],
      },
      {
        title: "Donation examples",
        paragraphs: [
          "Gift examples on the website are intended to show the kinds of needs donations may support. Actual costs may vary by location, local availability, transportation, exchange rates, urgency, and community needs.",
        ],
      },
      {
        title: "Refunds",
        paragraphs: [
          "Because charitable gifts may be put to use quickly, donations are generally non-refundable. If a donation was made in error, please contact us as soon as possible so the request can be reviewed.",
        ],
      },
      {
        title: "Receipts and records",
        paragraphs: [
          "Donors should keep donation receipts for their records. Receipt timing may depend on the payment platform or giving method used. Donors are encouraged to consult a qualified tax advisor about tax deductibility.",
        ],
      },
      {
        title: "Payment security",
        paragraphs: [
          "The Daily Bread Project does not store raw payment-card information on this website. Online donations may be processed by third-party payment providers that maintain their own security and privacy practices.",
        ],
      },
      {
        title: "In-kind gifts",
        paragraphs: [
          "In-kind gifts such as supplies or goods should be coordinated before delivery so they match real needs and can be handled responsibly. The Daily Bread Project may decline items that cannot be used, stored, transported, or distributed safely.",
        ],
      },
      {
        title: "Questions about giving",
        paragraphs: [`For donation questions, contact ${siteSettings.contact.donations}.`],
      },
    ],
  },
  safeguarding: {
    intro:
      "This Safeguarding Statement explains The Daily Bread Project’s commitment to protecting dignity, privacy, and safety in all public storytelling and outreach.",
    sections: [
      {
        title: "Our commitment",
        paragraphs: [
          "The Daily Bread Project serves widows, families, children, and underserved communities with compassion and respect. Support should never come at the cost of someone’s dignity, privacy, or safety.",
        ],
      },
      {
        title: "Dignity-centered storytelling",
        bullets: [
          "We avoid exploitative images or language.",
          "We do not present people as helpless or hopeless.",
          "We share stories in a way that honors strength, resilience, and humanity.",
          "We avoid unnecessary details that could embarrass, expose, or endanger someone.",
        ],
      },
      {
        title: "Photos and consent",
        paragraphs: [
          "Photos and videos should be used with appropriate permission and care. Extra caution should be used with children, vulnerable adults, private homes, medical situations, financial hardship, and assistance requests.",
        ],
        bullets: [
          "Do not publish children’s full names or private identifying details.",
          "Do not publish exact home addresses or private location details.",
          "Do not share medical, financial, or family hardship details without clear permission.",
          "Use captions that protect dignity and avoid sensational language.",
        ],
      },
      {
        title: "Assistance requests",
        paragraphs: [
          "People who request support should be treated with privacy and respect. Submitting a request does not guarantee assistance, but every request should be reviewed with care.",
        ],
      },
      {
        title: "Local partners and volunteers",
        paragraphs: [
          "Partners and volunteers are expected to communicate respectfully, protect private information, follow approved public language, and avoid using stories or images in ways that could harm the people being served.",
        ],
      },
      {
        title: "Reporting concerns",
        paragraphs: [
          `Concerns about privacy, dignity, image use, volunteer conduct, or safeguarding may be sent to ${siteSettings.contact.general}.`,
        ],
      },
    ],
  },
  terms: {
    intro: "These Terms of Use explain basic expectations for using this website.",
    sections: [
      { title: "Website use", paragraphs: ["By using this website, visitors agree to use the content responsibly and understand that program availability may change."] },
      { title: "Third-party services", paragraphs: ["External links and third-party donation or newsletter platforms are governed by their own terms."] },
    ],
  },
  accessibility: {
    intro: "The Daily Bread Project wants this website to be usable by as many visitors as possible.",
    sections: [
      { title: "Accessibility approach", paragraphs: ["The website is designed with keyboard navigation, clear focus states, semantic structure, responsive layouts, and accessible form labels."] },
      { title: "Feedback", paragraphs: ["Accessibility feedback may be sent through the contact page."] },
    ],
  },
  disclaimer: {
    intro: "This Website Disclaimer explains the limits of the information provided on this site.",
    sections: [
      { title: "General information", paragraphs: ["Website content is provided for general information and does not constitute legal, tax, financial, medical, or professional advice."] },
      { title: "No guarantee of assistance", paragraphs: ["Program descriptions do not guarantee assistance, funding, or partnership approval."] },
    ],
  },
};

export function LegalPage({ title, kind }: { title: string; kind: keyof typeof policies }) {
  const policy = policies[kind];
  return (
    <>
      <PageHero title={title} text={policy.intro} />
      <Section>
        <Inner className="max-w-4xl">
          <div className="grid gap-5">
            {policy.sections.map((section) => (
              <article key={section.title} className="rounded-lg bg-white p-7 leading-8 shadow-sm">
                <h2 className="font-serif text-3xl font-bold text-chocolate">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-charcoal/78">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 grid gap-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 text-charcoal/78">
                        <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
            <div className="rounded-lg bg-gold/15 p-5 font-semibold leading-7 text-chocolate">
              <p>{legalNote}</p>
              <Link href="/contact" className="mt-3 inline-block underline-offset-4 hover:underline">Contact us with questions</Link>
            </div>
          </div>
        </Inner>
      </Section>
    </>
  );
}
