import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlanCard from "@/components/PlanCard";
import { membershipPlans, formatPrice } from "@/data/plans";

export const metadata = {
  title: "Membership Plans — Bathpass",
  description: "Choose your Bathpass membership. Flexible credit-based plans starting at $49/month.",
};

export default function MembershipPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="text-center pt-16 pb-10 md:pt-24 md:pb-14 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="section-label mb-2">Membership</p>
          <h1 className="font-display text-4xl md:text-[56px] leading-[1.08] tracking-tight text-black max-w-xl mx-auto mb-4">
            One membership. Every venue.
          </h1>
          <p className="text-base text-ash leading-relaxed max-w-lg mx-auto">
            Pick the plan that matches your rhythm. Every tier gives you monthly credits
            to book at any partner venue. No contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {membershipPlans.map((plan) => (
              <PlanCard key={plan.slug} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Founding banner */}
      <section className="bg-sage-wash border-y border-sage-muted">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="section-label mb-1">Founding Member Offer</p>
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
                20% off, locked in for 12 months.
              </h2>
              <p className="text-sm text-ash max-w-lg">
                Founding members also get bonus credits on signup, early access to new
                partner venues, and priority booking for social events.
              </p>
            </div>
            <Link href="/signup?founding=true" className="btn-sage flex-shrink-0">
              Claim Founding Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* How Credits Work */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="section-label">How Credits Work</p>
            <h2 className="font-display text-3xl md:text-[36px] tracking-tight text-black">
              Simple, transparent, fair.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { q: "What does a visit cost?", a: "Each venue has a base credit cost from 3 to 8 credits depending on tier. The final cost adjusts for time of day, day of week, and group size." },
              { q: "How do group discounts work?", a: "Groups of 3+ each save 1 credit. Groups of 5+ save 2 each. The organizer earns 1 bonus credit when a plan reaches 3+ members." },
              { q: "Do unused credits roll over?", a: "Yes. Each plan has a rollover limit. Unused credits carry forward for up to two billing cycles, then expire." },
              { q: "Can I top up credits?", a: "Anytime. Light and Core members top up at $12/credit. Ritual and Social members at $10/credit. Available instantly." },
              { q: "What's off-peak pricing?", a: "Weekday mornings and early afternoons cost fewer credits. Better value when your schedule is flexible." },
              { q: "Can I cancel anytime?", a: "Yes. No contracts. Cancel from your account settings. Credits remain through end of billing period." },
            ].map((item) => (
              <div key={item.q} className="card p-6 hover:translate-y-0 hover:shadow-none">
                <h3 className="text-sm font-semibold text-black mb-2">{item.q}</h3>
                <p className="text-sm text-ash leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-24 bg-white border-y border-mist">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="section-label">Compare Plans</p>
            <h2 className="font-display text-3xl tracking-tight text-black">
              What&apos;s included at every tier.
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-4 pr-4 text-xs font-medium text-ash uppercase tracking-wider">Feature</th>
                  {membershipPlans.map((p) => (
                    <th key={p.slug} className={`text-center py-4 px-4 ${p.popular ? "text-sage font-semibold" : "text-black font-semibold"}`}>
                      {p.name}
                      <br />
                      <span className="text-xs font-normal text-ash">{formatPrice(p.priceCents)}/mo</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { f: "Monthly credits", v: ["5", "12", "20", "30"] },
                  { f: "All partner venues", v: ["Yes", "Yes", "Yes", "Yes"] },
                  { f: "Credit rollover", v: ["3", "5", "8", "10"] },
                  { f: "Top-up rate", v: ["$12", "$10", "$10", "$10"] },
                  { f: "Group plan creation", v: ["\u2014", "Yes", "Yes", "Yes"] },
                  { f: "Priority booking", v: ["\u2014", "\u2014", "Yes", "Yes"] },
                  { f: "Organizer bonuses", v: ["\u2014", "\u2014", "\u2014", "Yes"] },
                  { f: "Exclusive events", v: ["\u2014", "\u2014", "\u2014", "Yes"] },
                ].map((row) => (
                  <tr key={row.f} className="border-b border-mist">
                    <td className="py-3.5 pr-4 text-charcoal">{row.f}</td>
                    {row.v.map((v, i) => (
                      <td key={i} className={`text-center py-3.5 px-4 ${v === "\u2014" ? "text-fog" : "text-charcoal"}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-[40px] tracking-tight mb-4">
            Ready to start?
          </h2>
          <p className="text-sm text-white/70 mb-8 max-w-md mx-auto">
            Join as a founding member for 20% off. Your membership works at every partner venue.
          </p>
          <Link href="/signup" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors">
            Become a Member
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
