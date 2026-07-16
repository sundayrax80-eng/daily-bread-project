import type { PublishState } from "./site";

export type Project = {
  id: string;
  slug: string;
  title: string;
  status: "Planning" | "Active" | "Fundraising" | "Paused" | "Completed";
  publishState: PublishState;
  location: string;
  community: string;
  projectType: string;
  image: string;
  imagePosition?: string;
  summary: string;
  need: string;
  solution: string;
  story: string;
  whyItMatters: string;
  supportMakesPossible: string[];
  approach: string[];
  transparencyNote: string;
  goal: number;
  raised: number;
  homesFunded?: number;
  verified: boolean;
  lastUpdated: string | null;
  startDate: string | null;
  visibility: {
    budget: boolean;
    receipts: boolean;
    photos: boolean;
    videos: boolean;
    partnerDetails: boolean;
    outcomeReport: boolean;
    donationProgress: boolean;
    completionReport: boolean;
  };
};

export const projects: Project[] = [
  {
    id: "solar-100-homes",
    slug: "help-us-light-100-homes",
    title: "Help Us Light 100 Homes",
    status: "Active",
    publishState: "published",
    location: "Nigeria",
    community: "Nigeria-focused outreach areas and surrounding communities",
    projectType: "Solar lighting",
    image: "/images/programs/solar-lighting-realistic.png",
    summary:
      "Many families in underserved communities live without dependable electricity. Solar-powered lighting can help make homes safer, help children study after dark, and reduce the daily burden placed on families.",
    need: "When evening comes and a home has no dependable light, ordinary routines become harder. Children may struggle to study, caregivers have less visibility, and simple household tasks can feel unsafe or rushed.",
    solution: "Provide solar-powered lighting through verified community partners after local consultation, recipient confirmation, and clear purchasing plans.",
    story:
      "This project focuses on the quiet hours after sunset. A solar light is not just a device; it can mean a child finishing homework, a widow moving around her home with more confidence, and a family ending the day without depending on unsafe or costly alternatives.",
    whyItMatters:
      "Light changes how a home feels. It can reduce fear after dark, support evening study, make cooking and caregiving easier, and give families a steadier rhythm when electricity is not reliable.",
    supportMakesPossible: [
      "Solar lights purchased as close to the community as possible",
      "Recipient confirmation through trusted local relationships",
      "Safer evening routines for homes without dependable electricity",
      "Photo and progress updates when they can be shared with dignity",
    ],
    approach: [
      "Confirm the households and villages where lighting is most needed.",
      "Price solar options locally so support can stretch further and avoid unnecessary shipping delays.",
      "Distribute lights through local hands who know the families and can follow up.",
      "Share honest updates as homes are served and lessons are learned.",
    ],
    transparencyNote:
      "Because this campaign is still raising funds, final quantities, locations, and purchase details will be confirmed before distribution updates are published.",
    goal: 15000,
    raised: 0,
    homesFunded: 0,
    verified: false,
    lastUpdated: null,
    startDate: null,
    visibility: {
      budget: false,
      receipts: false,
      photos: false,
      videos: false,
      partnerDetails: true,
      outcomeReport: false,
      donationProgress: false,
      completionReport: false,
    },
  },
  {
    id: "feed-a-widow",
    slug: "feed-a-widow-campaign",
    title: "Feed a Widow Campaign",
    status: "Active",
    publishState: "published",
    location: "Nigeria",
    community: "Nigeria-focused outreach areas and surrounding communities",
    projectType: "Food assistance",
    image: "/images/field/food-distribution-group.jpg",
    summary: "A planned food-support campaign created to help widows and families facing immediate pressure receive food with dignity, care, and local follow-through.",
    need: "When food is uncertain, every other decision becomes heavier. Widows and caregivers may have to stretch small resources, choose between needs, or carry the pressure of feeding a household alone.",
    solution: "Coordinate food packages only after partner capacity, locations, local pricing, and recipient processes are confirmed.",
    story:
      "Food support is often the first breath of relief. It does not solve every challenge, but it can help a household get through a hard stretch without feeling invisible or ashamed.",
    whyItMatters:
      "A food package can protect dignity when life is tight. It can free a caregiver to think beyond the next meal, reduce stress in the home, and remind a widow that someone has noticed what she is carrying.",
    supportMakesPossible: [
      "Rice, staples, and household food items purchased locally when possible",
      "Respectful distribution through trusted community partners",
      "Priority support for widows and families under urgent pressure",
      "Follow-up notes that help guide future campaigns",
    ],
    approach: [
      "Listen with local partners to identify households facing the greatest pressure.",
      "Confirm food items, pricing, and distribution capacity before funds are spent.",
      "Purchase nearby where possible so support also strengthens local vendors.",
      "Share updates that focus on dignity, not display.",
    ],
    transparencyNote:
      "This campaign is in planning, so public budget details and distribution dates will be added after local confirmation is complete.",
    goal: 0,
    raised: 0,
    verified: false,
    lastUpdated: null,
    startDate: null,
    visibility: {
      budget: false,
      receipts: false,
      photos: false,
      videos: false,
      partnerDetails: false,
      outcomeReport: false,
      donationProgress: false,
      completionReport: false,
    },
  },
  {
    id: "clean-water",
    slug: "clean-water-initiative",
    title: "Clean Water Initiative",
    status: "Active",
    publishState: "published",
    location: "Nigeria",
    community: "Nigeria-focused outreach areas and surrounding communities",
    projectType: "Clean water",
    image: "/images/programs/clean-water-access-realistic.png",
    summary: "A developing initiative to help communities move toward safer water access through careful listening, local verification, and the right response for each area.",
    need: "Water needs are not the same in every village. Some families may walk long distances, rely on unsafe sources, or spend money they do not have just to meet a basic daily need.",
    solution: "Document the need, consult local leaders, select an appropriate response, and report transparently as plans become ready.",
    story:
      "Clean water affects the whole day. It touches cooking, hygiene, school, health, and the time a family has left for everything else. This initiative is being shaped carefully so the response matches the actual community need.",
    whyItMatters:
      "When water is difficult to reach or unsafe to use, families lose time, energy, and peace of mind. A thoughtful water project can reduce daily strain and support healthier homes.",
    supportMakesPossible: [
      "Community-level water assessments before promises are made",
      "Local consultation around wells, storage, filtration, or repair needs",
      "Planning for long-term water well projects where appropriate",
      "Clear updates as options, costs, and timelines are confirmed",
    ],
    approach: [
      "Identify the specific water challenge in each area instead of assuming one solution fits all.",
      "Work with trusted local leaders to understand distance, safety, maintenance, and cost.",
      "Choose a response that can be cared for locally after installation or delivery.",
      "Report what is confirmed, what is still being planned, and what support is needed next.",
    ],
    transparencyNote:
      "Because water work can involve construction, maintenance, and local permissions, this initiative will only publish firm goals after the community assessment is complete.",
    goal: 0,
    raised: 0,
    verified: false,
    lastUpdated: null,
    startDate: null,
    visibility: {
      budget: false,
      receipts: false,
      photos: false,
      videos: false,
      partnerDetails: false,
      outcomeReport: false,
      donationProgress: false,
      completionReport: false,
    },
  },
  {
    id: "medical-care-support",
    slug: "medical-care-support-fund",
    title: "Medical Care Support Fund",
    status: "Active",
    publishState: "published",
    location: "Nigeria",
    community: "Nigeria-focused outreach areas and surrounding communities",
    projectType: "Medical assistance",
    image: "/images/field/medical-care-support.png",
    imagePosition: "center 72%",
    summary:
      "A compassionate support fund to help widows, children, and families facing medical expenses they cannot manage alone, including medicine, clinic visits, hospital care, and urgent health-related needs.",
    need: "When someone is sick and money is already tight, even a simple clinic visit can become a heavy decision. Families may delay care, go without needed medicine, or try to choose between treatment, food, transport, and other household needs.",
    solution:
      "Provide carefully reviewed assistance for verified medical needs through trusted local partners, with support directed toward medicine, hospital visits, basic treatment costs, and transportation connected to care.",
    story:
      "Medical needs can arrive without warning. A child gets sick, a widow needs medicine, or a hospital visit becomes urgent, and suddenly the whole household is under pressure. This fund exists so families do not have to face those moments feeling unseen or completely alone.",
    whyItMatters:
      "Timely care can protect health, dignity, and peace of mind. Helping with medical expenses can prevent small health issues from becoming larger crises and give families room to focus on healing instead of panic.",
    supportMakesPossible: [
      "Medicine and basic treatment support for verified needs",
      "Clinic or hospital visit assistance when care cannot wait",
      "Transportation help for families traveling to receive care",
      "Follow-up through trusted local relationships whenever possible",
    ],
    approach: [
      "Receive medical needs through local partners or direct support requests.",
      "Review each request with care, privacy, and respect before funds are used.",
      "Pay toward specific needs such as medicine, treatment, transport, or hospital-related costs.",
      "Keep simple records so donors can trust that support is being handled responsibly.",
    ],
    transparencyNote:
      "Because medical needs can involve private information, public updates will protect personal dignity. We will share general categories, totals, and impact notes when appropriate without exposing sensitive health details.",
    goal: 0,
    raised: 0,
    verified: false,
    lastUpdated: null,
    startDate: null,
    visibility: {
      budget: false,
      receipts: false,
      photos: false,
      videos: false,
      partnerDetails: false,
      outcomeReport: false,
      donationProgress: false,
      completionReport: false,
    },
  },
  {
    id: "family-stability",
    slug: "family-stability-program",
    title: "Family Stability Program",
    status: "Active",
    publishState: "published",
    location: "Nigeria and remote education",
    community: "Nigeria-focused outreach areas and surrounding communities",
    projectType: "Financial education",
    image: "/images/field/children-school-supplies.jpg",
    summary: "A family support pathway that pairs immediate relief with warm guidance, budgeting education, and resources that help households plan beyond the next emergency.",
    need: "Some families are not only facing one urgent bill or one empty pantry. They are trying to make decisions, care for children, manage loss, and rebuild stability with limited support.",
    solution: "Offer workshops, coaching, and resources through a phased program model shaped around real family needs.",
    story:
      "Stability grows slowly. This program is designed for families who need more than a one-time gift: they need encouragement, simple tools, trusted guidance, and a path that helps them keep going.",
    whyItMatters:
      "When families have support to plan, budget, learn, and access resources, they can move with more confidence. The goal is not to shame people for struggling; it is to walk with them toward steadier ground.",
    supportMakesPossible: [
      "Budgeting and household planning resources",
      "Family resource guidance and follow-up support",
      "Workshops shaped for local and remote learning",
      "Connections to medical attention funds or referrals when needs are urgent",
    ],
    approach: [
      "Start with the pressure families are already naming.",
      "Offer simple tools that can be used in real household situations.",
      "Connect families to trusted support instead of leaving them to navigate alone.",
      "Grow the program slowly through feedback, local partnerships, and clear reporting.",
    ],
    transparencyNote:
      "This program is still being shaped, so pilot details, materials, and reporting will be added as the model is tested and refined.",
    goal: 0,
    raised: 0,
    verified: false,
    lastUpdated: null,
    startDate: null,
    visibility: {
      budget: false,
      receipts: false,
      photos: false,
      videos: false,
      partnerDetails: false,
      outcomeReport: false,
      donationProgress: false,
      completionReport: false,
    },
  },
];

export const publishedProjects = projects.filter((project) => project.publishState === "published");
