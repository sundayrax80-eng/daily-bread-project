export const programs = [
  {
    pillar: "Relief Programs",
    description: "Immediate practical help for households facing urgent pressure.",
    items: ["Food assistance", "Widow support", "Hygiene and household essentials", "Clean-water initiatives", "Solar lighting", "Emergency family support"],
    action: "Request Assistance",
    href: "/request-support",
  },
  {
    pillar: "Stability Programs",
    description: "Tools and guidance that help families plan, recover, and stay steady.",
    items: ["Budgeting education", "Financial literacy", "Family resource guidance", "Household planning", "Financial coaching", "Community workshops"],
    action: "Support This Program",
    href: "/ways-to-give",
  },
  {
    pillar: "Empowerment Programs",
    description: "Longer-term pathways designed to help families rebuild with dignity.",
    items: ["Skills training", "Business and income education", "Community partnerships", "Mentorship", "Long-term development projects", "Referral support"],
    action: "Partner With Us",
    href: "/partner",
  },
];

export const donationAmounts = [
  { amount: 10, label: "Offers flexible support where it is needed most" },
  { amount: 25, label: "Helps provide essential food items" },
  { amount: 50, label: "Supports a widow or family with household necessities" },
  { amount: 75, label: "Contributes toward solar lighting for a home" },
  { amount: 150, label: "Helps provide food and practical family support" },
  { amount: 300, label: "Contributes toward a clean-water initiative" },
  { amount: 500, label: "Supports a widow or underserved family with essential needs" },
  { amount: 0, label: "Custom gift: give where the need is greatest" },
];

export const monthlyDonationAmounts = donationAmounts.filter((item) => item.amount > 0);

export const partnershipOptions = [
  "Project sponsorship",
  "Program underwriting",
  "Monthly support",
  "Supply drives",
  "Volunteer teams",
  "Event sponsorship",
  "Matching gifts",
  "Technical support",
  "Transportation",
  "Logistics",
  "Media partnerships",
  "Community referrals",
  "Resource sharing",
  "Grant partnerships",
];
