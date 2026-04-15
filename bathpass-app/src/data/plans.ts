export interface MembershipPlan {
  slug: string;
  name: string;
  creditsPerMonth: number;
  priceCents: number;
  maxRollover: number;
  topupPriceCents: number;
  description: string;
  highlights: string[];
  popular?: boolean;
}

export const membershipPlans: MembershipPlan[] = [
  {
    slug: "light",
    name: "Light",
    creditsPerMonth: 5,
    priceCents: 4900,
    maxRollover: 3,
    topupPriceCents: 1200,
    description: "For getting started. One to two visits a month at partner venues.",
    highlights: [
      "5 credits per month",
      "Access to all partner venues",
      "Roll over up to 3 unused credits",
      "Top up anytime at $12/credit",
    ],
  },
  {
    slug: "core",
    name: "Core",
    creditsPerMonth: 12,
    priceCents: 9900,
    maxRollover: 5,
    topupPriceCents: 1000,
    description:
      "For regulars. Two to three visits a month, with room for premium venues.",
    highlights: [
      "12 credits per month",
      "Access to all partner venues",
      "Roll over up to 5 unused credits",
      "Top up anytime at $10/credit",
      "Group plan creation",
    ],
    popular: true,
  },
  {
    slug: "ritual",
    name: "Ritual",
    creditsPerMonth: 20,
    priceCents: 15900,
    maxRollover: 8,
    topupPriceCents: 1000,
    description:
      "For committed practitioners. Three to five visits a month across any venue.",
    highlights: [
      "20 credits per month",
      "Access to all partner venues",
      "Roll over up to 8 unused credits",
      "Top up anytime at $10/credit",
      "Group plan creation",
      "Priority booking",
    ],
  },
  {
    slug: "social",
    name: "Social",
    creditsPerMonth: 30,
    priceCents: 21900,
    maxRollover: 10,
    topupPriceCents: 1000,
    description:
      "For the deeply committed and socially active. Five or more visits a month.",
    highlights: [
      "30 credits per month",
      "Access to all partner venues",
      "Roll over up to 10 unused credits",
      "Top up anytime at $10/credit",
      "Group plan creation + organizer bonuses",
      "Priority booking",
      "Exclusive social events",
    ],
  },
];

export function formatPrice(cents: number): string {
  return `$${Math.floor(cents / 100)}`;
}

export function pricePerCredit(plan: MembershipPlan): string {
  const perCredit = plan.priceCents / plan.creditsPerMonth / 100;
  return `$${perCredit.toFixed(2)}`;
}
