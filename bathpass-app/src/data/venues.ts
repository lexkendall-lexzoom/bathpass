export interface Venue {
  slug: string;
  name: string;
  neighborhood: string;
  borough: string;
  shortDescription: string;
  heroImage: string;
  tier: "tier-1" | "tier-2" | "tier-3";
  baseCreditCost: number;
  amenities: string[];
  vibeTags: string[];
  groupFriendly: boolean;
  maxGroupSize: number;
  socialSlots: boolean;
  hours: string;
  address: string;
  website: string;
  lat: number;
  lng: number;
}

export const venues: Venue[] = [
  {
    slug: "bathhouse-williamsburg",
    name: "Bathhouse",
    neighborhood: "Williamsburg",
    borough: "Brooklyn",
    shortDescription:
      "Eight thermal pools, rooftop plunge, and Aufguss ceremonies in a sprawling Williamsburg space.",
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/5f627ccbb290eb31d9234aee/3945cde9-78a8-4ad9-809f-97e823a756e6/Neutral+Pool+1.jpg",
    tier: "tier-2",
    baseCreditCost: 5,
    amenities: ["Sauna", "Steam", "Cold Plunge", "Pools", "Rooftop", "Restaurant"],
    vibeTags: ["social", "design-forward", "full-day"],
    groupFriendly: true,
    maxGroupSize: 8,
    socialSlots: true,
    hours: "Mon-Fri 7am-11pm, Sat-Sun 9am-12am",
    address: "103 N 10th St, Brooklyn, NY 11249",
    website: "https://www.abathhouse.com",
    lat: 40.7183,
    lng: -73.9599,
  },
  {
    slug: "bathhouse-flatiron",
    name: "Bathhouse",
    neighborhood: "Flatiron",
    borough: "Manhattan",
    shortDescription:
      "The Manhattan outpost. Same design-led thermal circuit, downtown setting.",
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/5f627ccbb290eb31d9234aee/6460163e-dafb-4640-952b-0358108df9ba/23095_press_bathhouse_10-23-23_20.jpg",
    tier: "tier-2",
    baseCreditCost: 5,
    amenities: ["Sauna", "Steam", "Cold Plunge", "Pools"],
    vibeTags: ["social", "design-forward", "central"],
    groupFriendly: true,
    maxGroupSize: 8,
    socialSlots: true,
    hours: "Mon-Fri 7am-11pm, Sat-Sun 9am-12am",
    address: "Flatiron District, Manhattan",
    website: "https://www.abathhouse.com",
    lat: 40.7401,
    lng: -73.9903,
  },
  {
    slug: "othership-flatiron",
    name: "Othership",
    neighborhood: "Flatiron",
    borough: "Manhattan",
    shortDescription:
      "Guided breathwork sauna sessions and cold plunge in a high-design group setting.",
    heroImage:
      "https://cdn.prod.website-files.com/67c208983c2848098aa364f1/683d6f30cf7199b36080324b_othership-flatiron-interior.avif",
    tier: "tier-2",
    baseCreditCost: 5,
    amenities: ["Sauna", "Cold Plunge", "Breathwork", "Guided Sessions"],
    vibeTags: ["guided", "intense", "community"],
    groupFriendly: true,
    maxGroupSize: 6,
    socialSlots: true,
    hours: "Daily 6am-10pm",
    address: "Flatiron District, Manhattan",
    website: "https://www.othership.us",
    lat: 40.7395,
    lng: -73.9897,
  },
  {
    slug: "othership-williamsburg",
    name: "Othership",
    neighborhood: "Williamsburg",
    borough: "Brooklyn",
    shortDescription:
      "Brooklyn location with the same guided hot/cold protocol and communal energy.",
    heroImage:
      "https://cdn.prod.website-files.com/67c208983c2848098aa364f1/68c86729b6fd32caa237791c_othership-williamsburg-brooklyn-sauna-interior.avif",
    tier: "tier-2",
    baseCreditCost: 5,
    amenities: ["Sauna", "Cold Plunge", "Breathwork", "Guided Sessions"],
    vibeTags: ["guided", "intense", "community"],
    groupFriendly: true,
    maxGroupSize: 6,
    socialSlots: true,
    hours: "Daily 6am-10pm",
    address: "Williamsburg, Brooklyn",
    website: "https://www.othership.us",
    lat: 40.7145,
    lng: -73.9612,
  },
  {
    slug: "lore-bathing-club",
    name: "Lore Bathing Club",
    neighborhood: "NoHo",
    borough: "Manhattan",
    shortDescription:
      "Members-only bathing club with an emphasis on quiet luxury and curated experiences.",
    heroImage:
      "https://cdn.prod.website-files.com/682939c2f8a0c33aaa289209/6945a26892f9e61d0843ddc2_seandavidson_lore_17.jpg",
    tier: "tier-2",
    baseCreditCost: 5,
    amenities: ["Sauna", "Cold Plunge", "Lounge", "Private Rooms"],
    vibeTags: ["luxe", "quiet", "exclusive"],
    groupFriendly: true,
    maxGroupSize: 4,
    socialSlots: false,
    hours: "By reservation",
    address: "Manhattan, NY",
    website: "#",
    lat: 40.7328,
    lng: -73.9975,
  },
  {
    slug: "aire-ancient-baths",
    name: "AIRE Ancient Baths",
    neighborhood: "Tribeca",
    borough: "Manhattan",
    shortDescription:
      "Candlelit thermal circuit in a 140-year-old textile factory. Silence required.",
    heroImage:
      "https://beaire.com/sites/all/modules/beaire/img/centros/_NYC_1.jpg",
    tier: "tier-1",
    baseCreditCost: 8,
    amenities: ["Thermal Pools", "Steam", "Salt Room", "Wine Bath"],
    vibeTags: ["luxe", "romantic", "candlelit"],
    groupFriendly: true,
    maxGroupSize: 4,
    socialSlots: false,
    hours: "Daily 9am-11pm",
    address: "88 Franklin St, New York, NY 10013",
    website: "https://beaire.com",
    lat: 40.719,
    lng: -74.0089,
  },
  {
    slug: "great-jones-spa",
    name: "Great Jones Spa",
    neighborhood: "NoHo",
    borough: "Manhattan",
    shortDescription:
      "A downtown classic. Three-story water lounge with plunge pool, sauna, and steam.",
    heroImage:
      "https://media.timeout.com/images/100539965/image.jpg",
    tier: "tier-3",
    baseCreditCost: 3,
    amenities: ["Sauna", "Steam", "Cold Plunge", "Water Lounge"],
    vibeTags: ["classic", "relaxed", "accessible"],
    groupFriendly: true,
    maxGroupSize: 6,
    socialSlots: true,
    hours: "Daily 10am-10pm",
    address: "29 Great Jones St, New York, NY 10012",
    website: "https://www.greatjonesspa.com",
    lat: 40.7262,
    lng: -73.9927,
  },
  {
    slug: "russian-turkish-baths",
    name: "Russian & Turkish Baths",
    neighborhood: "East Village",
    borough: "Manhattan",
    shortDescription:
      "Since 1892. The platza oak-leaf treatment and radiant-heat Russian room are the real thing.",
    heroImage:
      "https://media.timeout.com/images/101284415/image.jpg",
    tier: "tier-3",
    baseCreditCost: 3,
    amenities: ["Russian Sauna", "Turkish Room", "Cold Plunge", "Sun Deck"],
    vibeTags: ["authentic", "intense", "no-frills"],
    groupFriendly: true,
    maxGroupSize: 8,
    socialSlots: true,
    hours: "Daily, hours vary",
    address: "268 E 10th St, New York, NY 10009",
    website: "https://www.russianturkishbaths.com",
    lat: 40.7269,
    lng: -73.9818,
  },
  {
    slug: "world-spa",
    name: "World Spa",
    neighborhood: "Midwood",
    borough: "Brooklyn",
    shortDescription:
      "Korean-style jjimjilbang with multiple saunas, pools, and all-day lounge access.",
    heroImage:
      "https://worldspa.com/wp-content/uploads/2024/02/WorldSpa_038.jpg",
    tier: "tier-1",
    baseCreditCost: 7,
    amenities: ["Korean Sauna", "Pools", "Lounge", "Restaurant", "Salt Room"],
    vibeTags: ["all-day", "korean-style", "family-friendly"],
    groupFriendly: true,
    maxGroupSize: 10,
    socialSlots: true,
    hours: "24/7",
    address: "1718 Gravesend Neck Rd, Brooklyn, NY 11229",
    website: "https://worldspausa.com",
    lat: 40.5967,
    lng: -73.9554,
  },
  {
    slug: "brooklyn-bathhouse",
    name: "Brooklyn Bathhouse",
    neighborhood: "Flatbush",
    borough: "Brooklyn",
    shortDescription:
      "A compact neighborhood bathhouse. Sauna, steam, plunge. No frills, proper heat.",
    heroImage:
      "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2025/01/17154334/sauna.jpg",
    tier: "tier-3",
    baseCreditCost: 3,
    amenities: ["Sauna", "Steam", "Cold Plunge"],
    vibeTags: ["neighborhood", "accessible", "warm"],
    groupFriendly: true,
    maxGroupSize: 6,
    socialSlots: true,
    hours: "Mon-Fri 9am-10pm, Sat-Sun 8am-10pm",
    address: "Greenpoint, Brooklyn",
    website: "#",
    lat: 40.7306,
    lng: -73.9517,
  },
  {
    slug: "brooklyn-banya",
    name: "Brooklyn Banya",
    neighborhood: "Prospect Heights",
    borough: "Brooklyn",
    shortDescription:
      "Authentic Russian banya with proper birch venik treatments and intense heat.",
    heroImage:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/bb/9b/6d/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
    tier: "tier-3",
    baseCreditCost: 3,
    amenities: ["Banya", "Cold Plunge", "Venik Treatment", "Lounge"],
    vibeTags: ["authentic", "intense", "regulars"],
    groupFriendly: true,
    maxGroupSize: 6,
    socialSlots: true,
    hours: "Wed-Mon 10am-10pm",
    address: "602 Union St, Brooklyn, NY 11215",
    website: "#",
    lat: 40.6766,
    lng: -73.9781,
  },
  {
    slug: "qc-ny-spa",
    name: "QC NY Spa",
    neighborhood: "Governors Island",
    borough: "Manhattan",
    shortDescription:
      "Italian thermal spa on Governors Island with panoramic skyline views. Full day destination.",
    heroImage:
      "https://media.timeout.com/images/105895673/image.jpg",
    tier: "tier-1",
    baseCreditCost: 7,
    amenities: ["Thermal Pools", "Saunas", "Steam", "Infinity Pool", "Views"],
    vibeTags: ["scenic", "full-day", "destination"],
    groupFriendly: true,
    maxGroupSize: 8,
    socialSlots: true,
    hours: "Daily 10am-9pm (seasonal)",
    address: "Governors Island, New York, NY",
    website: "https://www.qcny.com",
    lat: 40.6892,
    lng: -74.0167,
  },
  {
    slug: "recoverie",
    name: "Recoverie",
    neighborhood: "Brooklyn Heights",
    borough: "Brooklyn",
    shortDescription:
      "Recovery-focused studio. Cold plunge, infrared sauna, compression. In and out in 60 minutes.",
    heroImage:
      "https://lirp.cdn-website.com/42e1ce53/dms3rep/multi/opt/Memeberships+page+-+Elevate+1-1920w.png",
    tier: "tier-3",
    baseCreditCost: 3,
    amenities: ["Cold Plunge", "Infrared Sauna", "Compression"],
    vibeTags: ["recovery", "quick", "efficient"],
    groupFriendly: true,
    maxGroupSize: 4,
    socialSlots: false,
    hours: "Mon-Fri 7am-9pm, Sat-Sun 8am-6pm",
    address: "Midtown, Manhattan",
    website: "#",
    lat: 40.7549,
    lng: -73.984,
  },
  {
    slug: "recovery-mode",
    name: "Recovery Mode",
    neighborhood: "Astoria",
    borough: "Queens",
    shortDescription:
      "Quick-hit contrast therapy. Cold plunge and sauna combos designed for athletes and busy professionals.",
    heroImage:
      "https://images.squarespace-cdn.com/content/v1/6490d443e8ecbc050460d986/5d1dc387-ae87-4ec8-96f6-845879907db7/SportsMassage-2.jpg",
    tier: "tier-3",
    baseCreditCost: 3,
    amenities: ["Cold Plunge", "Sauna", "IV Drip"],
    vibeTags: ["recovery", "quick", "athletic"],
    groupFriendly: true,
    maxGroupSize: 4,
    socialSlots: false,
    hours: "Daily 7am-9pm",
    address: "Multiple locations, Manhattan",
    website: "#",
    lat: 40.7411,
    lng: -73.9897,
  },
  {
    slug: "kove-studio",
    name: "Kove Studio",
    neighborhood: "East Village",
    borough: "Manhattan",
    shortDescription:
      "Modern infrared sauna studio with private suites and a clean, focused atmosphere.",
    heroImage:
      "https://www.missionmag.org/wp-content/uploads/2025/04/Homepage-BannerKove-1.jpg",
    tier: "tier-3",
    baseCreditCost: 2,
    amenities: ["Infrared Sauna", "Private Suites", "Cold Plunge"],
    vibeTags: ["infrared", "modern", "focused"],
    groupFriendly: true,
    maxGroupSize: 4,
    socialSlots: false,
    hours: "Daily 7am-9pm",
    address: "Manhattan, NY",
    website: "#",
    lat: 40.735,
    lng: -73.9925,
  },
  {
    slug: "remedy-place-flatiron",
    name: "Remedy Place",
    neighborhood: "Flatiron",
    borough: "Manhattan",
    shortDescription:
      "Social wellness club with guided ice baths, infrared sauna suites, cryotherapy, and hyperbaric oxygen.",
    heroImage:
      "https://cdn.sanity.io/images/jptxcgmn/production/aad31568d78f39db6364d3898358907ea670408e-8256x5504.jpg",
    tier: "tier-2",
    baseCreditCost: 5,
    amenities: ["Ice Bath", "Infrared Sauna", "Cryotherapy", "Hyperbaric", "IV Drip"],
    vibeTags: ["social", "clinical", "high-end"],
    groupFriendly: true,
    maxGroupSize: 6,
    socialSlots: true,
    hours: "Mon-Fri 7am-9pm, Sat-Sun 8am-7pm",
    address: "12 West 21st St, New York, NY 10010",
    website: "https://www.remedyplace.com",
    lat: 40.7406,
    lng: -73.9917,
  },
  {
    slug: "remedy-place-soho",
    name: "Remedy Place",
    neighborhood: "SoHo",
    borough: "Manhattan",
    shortDescription:
      "The SoHo outpost. Same social wellness club format with ice baths, sauna suites, and recovery therapies.",
    heroImage:
      "https://cdn.sanity.io/images/jptxcgmn/production/5660f27b2be79c92436a94c53c6a85d93883ea06-1340x1340.jpg",
    tier: "tier-2",
    baseCreditCost: 5,
    amenities: ["Ice Bath", "Infrared Sauna", "Cryotherapy", "Hyperbaric", "IV Drip"],
    vibeTags: ["social", "clinical", "high-end"],
    groupFriendly: true,
    maxGroupSize: 6,
    socialSlots: true,
    hours: "Mon-Fri 7am-9pm, Sat-Sun 8am-7pm",
    address: "11 Greene St, New York, NY 10013",
    website: "https://www.remedyplace.com",
    lat: 40.7208,
    lng: -74.0024,
  },
  {
    slug: "the-altar",
    name: "The Altar",
    neighborhood: "Flatiron",
    borough: "Manhattan",
    shortDescription:
      "50-person communal sauna with guided classes, cold plunge suite, and recovery therapies. Health as gathering.",
    heroImage:
      "https://cdn.sanity.io/images/nollro5b/production/ce27fde7259c682e44f2f8ccfc7feb85c0af3eaa-4919x3473.jpg",
    tier: "tier-2",
    baseCreditCost: 5,
    amenities: ["Communal Sauna", "Cold Plunge", "IV Drip", "Hyperbaric", "Red Light"],
    vibeTags: ["communal", "guided", "social"],
    groupFriendly: true,
    maxGroupSize: 8,
    socialSlots: true,
    hours: "Daily 6am-10pm",
    address: "122 Fifth Avenue, New York, NY 10011",
    website: "https://www.the-altar.com",
    lat: 40.7398,
    lng: -73.9920,
  },
  {
    slug: "saint",
    name: "Saint",
    neighborhood: "Chelsea",
    borough: "Manhattan",
    shortDescription:
      "Private cedar sauna and ice bath suites designed by BoND. One to two people per suite. Pure solitude.",
    heroImage:
      "https://media.timeout.com/images/106376998/image.jpg",
    tier: "tier-2",
    baseCreditCost: 5,
    amenities: ["Private Sauna", "Ice Bath", "Rain Shower"],
    vibeTags: ["private", "minimal", "design-forward"],
    groupFriendly: false,
    maxGroupSize: 2,
    socialSlots: false,
    hours: "Daily 7am-10pm",
    address: "242 West 29th St, New York, NY 10001",
    website: "https://www.saint.nyc",
    lat: 40.7488,
    lng: -73.9952,
  },
];

export function getVenueBySlug(slug: string): Venue | undefined {
  return venues.find((v) => v.slug === slug);
}

export function getVenuesByTier(tier: Venue["tier"]): Venue[] {
  return venues.filter((v) => v.tier === tier);
}

export const tierLabels: Record<Venue["tier"], string> = {
  "tier-1": "Tier 1",
  "tier-2": "Tier 2",
  "tier-3": "Tier 3",
};

export const tierCredits: Record<Venue["tier"], string> = {
  "tier-1": "7–8 credits",
  "tier-2": "4–5 credits",
  "tier-3": "2–3 credits",
};
