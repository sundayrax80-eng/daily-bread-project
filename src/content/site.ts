export type PublishState = "draft" | "review" | "approved" | "published" | "archived";

export const siteSettings = {
  name: "The Daily Bread Project",
  tagline: "Restoring dignity. Meeting real needs. Renewing hope.",
  logo: "/images/live-site/the-daily-bread-header-logo-transparent.png",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dailybreadproject.us",
  description:
    "The Daily Bread Project walks alongside widows, families, and underserved communities across Nigeria-focused outreach areas, including surrounding villages and nearby communities served through trusted local partners.",
  locationLine: "Houston, Texas, USA",
  serviceLine: "Serving Nigeria-focused communities, surrounding villages, and nearby outreach areas",
  isTaxDeductible: true,
  taxDeductibleWording:
    "The Daily Bread Project is recognized by the IRS as a 501(c)(3) nonprofit organization. Contributions may be tax-deductible to the extent allowed by law. Please consult your tax advisor for guidance.",
  nonprofitStatus: "IRS-recognized 501(c)(3) nonprofit organization",
  ein: "EIN 41-4110356",
  contact: {
    general: "contact@dailybreadproject.us",
    volunteer: "volunteer@dailybreadproject.us",
    assistance: "support@dailybreadproject.us",
    partnership: "partners@dailybreadproject.us",
    media: "media@dailybreadproject.us",
    donations: "giving@dailybreadproject.us",
    phone: "832-856-1668",
    officeHours: "Office hours to be added",
  },
  controls: {
    showDonationPage: true,
    showAssistanceForm: true,
    showVolunteerPage: true,
    showImpactStats: false,
    showPartnerLogos: false,
    showTransparencyDocuments: false,
    showMap: true,
    showNewsletter: true,
    showVideos: true,
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Projects", href: "/projects" },
  { label: "Where We Work", href: "/where-we-work" },
  { label: "Ways to Give", href: "/ways-to-give" },
  { label: "Partner", href: "/partner" },
  { label: "Resources", href: "/resources" },
  { label: "Updates", href: "/updates" },
  { label: "Transparency", href: "/transparency" },
  { label: "Contact", href: "/contact" },
];

export type AudiencePathway = {
  title: string;
  text: string;
  cta: string;
  supportingLine: string;
  href: string;
  icon: "give" | "volunteer" | "support" | "partner";
  ariaLabel: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export const audiencePathways: AudiencePathway[] = [
  {
    title: "I Want to Give",
    text: "Your gift can help a family breathe a little easier with food, clean water, light, and care that reminds them they are not forgotten.",
    cta: "Explore Ways to Give",
    supportingLine: "Give once, monthly, or toward a specific project.",
    href: "/ways-to-give",
    icon: "give",
    ariaLabel: "Explore ways to give to The Daily Bread Project",
    image: "/images/field/food-supply-staging.jpg",
    imageAlt: "Food supplies being prepared for families",
  },
  {
    title: "I Want to Volunteer",
    text: "If you have time, skills, a caring voice, or helpful connections, there is room to serve in a way that feels meaningful and respectful.",
    cta: "View Volunteer Opportunities",
    supportingLine: "Serve through outreach, professional skills, fundraising, prayer, or remote support.",
    href: "/volunteer",
    icon: "volunteer",
    ariaLabel: "View volunteer opportunities with The Daily Bread Project",
    image: "/images/field/food-packing-team.jpg",
    imageAlt: "Volunteers preparing food support bags",
  },
  {
    title: "I’m Looking for Support",
    text: "If your family is carrying more than you can manage alone, you can reach out in a simple and private way.",
    cta: "Request Support",
    supportingLine: "Every request is reviewed with care, though assistance cannot be guaranteed.",
    href: "/request-support",
    icon: "support",
    ariaLabel: "Request support from The Daily Bread Project",
    image: "/images/field/widow-support-handshake.jpg",
    imageAlt: "Dignity-centered support during a local outreach",
  },
  {
    title: "I Want to Partner",
    text: "Your church, business, foundation, nonprofit, or community group can help make care reach farther and last longer.",
    cta: "Explore Partnerships",
    supportingLine: "Partner through sponsorships, supply drives, grants, or shared outreach.",
    href: "/partner",
    icon: "partner",
    ariaLabel: "Explore partnership opportunities with The Daily Bread Project",
    image: "/images/field/community-partner-meeting.jpg",
    imageAlt: "Local partners gathered for a community meeting",
    imagePosition: "center 45%",
  },
];

export const founder = {
  name: "Sunday Rax",
  title: "Founder and Executive Director",
  image: "/images/founder/sunday-rax-founder.png",
  bio: [
    "Sunday Rax founded The Daily Bread Project from a deep belief that practical compassion can help families breathe again when daily needs become overwhelming.",
    "Her background in finance, ministry, entrepreneurship, and community advocacy shapes the way the organization serves: with dignity, wise stewardship, faith, and care that meets real needs without making people feel small.",
    "Sunday also brings hands-on nonprofit experience from serving as an administrative assistant, where she supported donation tracking, board meeting coordination, compliance responsibilities, and the careful behind-the-scenes work that helps an organization serve with accountability.",
    "Through this work, Sunday brings together donors, partners, and local leaders to stand with widows and underserved families as they move from urgent relief toward renewed hope and stability.",
  ],
  letterExcerpt:
    "When I visited Nigeria and surrounding areas last year for two weeks, I saw families doing their best with far less than many of us are used to having. Things we often move through the day without thinking about, like food, clean water, light, Wi-Fi access, and steady support, were not always easy to reach. My heart ached because the need was real, but so was the strength of the people I met. I came home knowing I could not just feel moved and move on. I had to help make a difference.",
};

export const mission = {
  statement:
    "The Daily Bread Project exists to stand with widows and underserved communities in the moments that matter most. When access to food, clean water, or light is uncertain, even the smallest support can bring relief, restore dignity, and renew hope. We are committed to meeting these everyday needs with compassion.",
  vision:
    "We envision communities where widows and families have access to essential resources for stable daily living.",
  values: ["Dignity", "Compassion", "Integrity", "Stewardship", "Partnership", "Sustainability", "Faith in Action"],
  pillars: [
    {
      title: "Relief",
      text: "Food, clean water, hygiene supplies, solar lighting, emergency help, and household necessities when life feels heavy.",
    },
    {
      title: "Stability",
      text: "Budgeting education, family resources, household planning, coaching, and practical tools that help families regain footing.",
    },
    {
      title: "Empowerment",
      text: "Skills development, income education, mentorship, and community partnerships that help families rebuild with confidence.",
    },
  ],
};

export const newsletterInterests = [
  "Project updates",
  "Volunteer opportunities",
  "Partner opportunities",
  "Prayer and ministry updates",
  "Financial empowerment resources",
  "Monthly impact recap",
];

export const legalNote =
  "This page is provided for general information and should not be treated as legal, tax, or professional advice. The Daily Bread Project may update this language as policies, laws, and organizational practices evolve.";
