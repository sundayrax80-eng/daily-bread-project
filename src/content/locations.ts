export const locations = [
  {
    country: "Nigeria",
    state: null,
    community: null,
    latitude: null,
    longitude: null,
    projectType: null,
    projectStatus: "Planning",
    shortDescription: "Community details will be added as projects are confirmed.",
    relatedProjectId: "solar-100-homes",
    featuredImage: "/images/map-placeholder.svg",
    publicVisibility: false,
    verificationStatus: false,
  },
];

export const publicLocations = locations.filter((location) => location.publicVisibility && location.verificationStatus);
