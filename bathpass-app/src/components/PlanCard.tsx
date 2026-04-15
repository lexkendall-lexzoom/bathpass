import type { MembershipPlan } from "@/data/plans";
import { formatPrice, pricePerCredit } from "@/data/plans";
import Link from "next/link";

export default function PlanCard({ plan }: { plan: MembershipPlan }) {
  const pop = plan.popular;

  return (
    <div
      className={`relative flex flex-col p-7 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
        pop
          ? "bg-sage text-white shadow-lg"
          : "bg-white text-black border border-mist hover:border-fog hover:shadow-md"
      }`}
    >
      {pop && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="pill bg-sage-dark text-white text-[11px] whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      <p className={`text-xs font-medium mb-2 ${pop ? "text-sage-light" : "text-ash"}`}>
        {plan.name}
      </p>

      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-[36px] font-bold tracking-tight leading-none">
          {formatPrice(plan.priceCents)}
        </span>
        <span className={`text-sm ${pop ? "text-white/50" : "text-silver"}`}>/mo</span>
      </div>

      <p className={`text-sm leading-relaxed mb-5 ${pop ? "text-white/70" : "text-ash"}`}>
        {plan.description}
      </p>

      <div className={`flex items-center gap-3 p-4 rounded-lg mb-5 ${
        pop ? "bg-white/10" : "bg-sage-wash border border-sage-muted"
      }`}>
        <span className={`text-2xl font-bold ${pop ? "text-white" : "text-sage"}`}>
          {plan.creditsPerMonth}
        </span>
        <div>
          <p className={`text-sm font-medium ${pop ? "text-white" : "text-black"}`}>
            credits/month
          </p>
          <p className={`text-xs ${pop ? "text-white/50" : "text-ash"}`}>
            {pricePerCredit(plan)}/credit
          </p>
        </div>
      </div>

      <ul className="space-y-2.5 mb-7 flex-1">
        {plan.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              className={`flex-shrink-0 mt-0.5 ${pop ? "text-sage-light" : "text-sage"}`}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className={`text-sm ${pop ? "text-white/70" : "text-ash"}`}>{h}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/signup?plan=${plan.slug}`}
        className={`w-full text-center py-3 rounded-lg text-sm font-semibold transition-all ${
          pop
            ? "bg-white text-sage hover:bg-white/90"
            : "bg-sage text-white hover:bg-sage-dark"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}
