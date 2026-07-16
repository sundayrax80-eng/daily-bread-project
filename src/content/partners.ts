export const partners = [
  {
    name: "Apostle Ezekiel Adenipekun",
    role: "Founder, Mercy Throne Missions International",
    image: "/images/apostle-ezekiel-adenipekun.png",
    contact: "Osogbo, Osun State, Nigeria",
    organization: "Mercy Throne Missions International",
    description:
      "Apostle Ezekiel Adenipekun is a trusted partner of The Daily Bread Project, known for his steady heart for people, strong faith, and long-standing commitment to mission work that meets real needs.",
    bio: [
      "He is the founder of Mercy Throne Missions International, a Christian ministry dedicated to raising and equipping individuals for purpose through discipleship, outreach, and practical kingdom service. Since the ministry began in 2017 in Ilesha, Osun State, Nigeria, starting in a small abandoned structure with nothing but a burden to serve, Apostle Ezekiel has remained faithful to the call.",
      "From the very beginning, he has been actively engaged in mission work across villages throughout Africa, consistently reaching rural communities with the gospel, humanitarian support, and tangible care. Over the years, that consistent obedience has grown into a wider mission presence, with continued evangelistic outreach, discipleship efforts, and community impact that has reached thousands.",
      "Through his leadership and compassion, The Daily Bread Project is able to connect with local communities in a deeper, more meaningful way, ensuring that support is not just delivered, but truly felt.",
    ],
    publishState: "published",
  },
  {
    name: "Additional community partners",
    role: "Future partner profiles",
    image: null,
    contact: "Details pending approval",
    organization: "The Daily Bread Project partner network",
    description: "Additional trusted local leaders, ministries, volunteers, and community partners will be added after confirmation and consent.",
    bio: [],
    publishState: "review",
  },
];

export const featuredPartner = partners.find((partner) => partner.publishState === "published");

export const boardMembers = [
  {
    name: "Board member name pending approval",
    role: "Board member",
    publishState: "draft",
  },
];
