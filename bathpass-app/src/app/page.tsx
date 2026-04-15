import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VenueCard from "@/components/VenueCard";
import PlanCard from "@/components/PlanCard";
import { venues } from "@/data/venues";
import { membershipPlans } from "@/data/plans";

const featured = venues.filter((v) =>
  ["bathhouse-williamsburg", "othership-flatiron", "aire-ancient-baths", "the-altar", "remedy-place-flatiron", "saint"].includes(v.slug)
);

const plans = [
  { id: 1, title: "Post-Work Reset", venue: "Bathhouse", hood: "Williamsburg", day: "Thu", time: "7:00 PM", going: 4, spots: 2, cr: 4, normal: 5 },
  { id: 2, title: "Sunday Recovery", venue: "Brooklyn Banya", hood: "Prospect Heights", day: "Sun", time: "11:00 AM", going: 6, spots: 2, cr: 2, normal: 3 },
  { id: 3, title: "Morning Contrast", venue: "Othership", hood: "Flatiron", day: "Fri", time: "7:00 AM", going: 3, spots: 3, cr: 4, normal: 5 },
];

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ─── HERO ─── */}
      <section className="text-center pt-16 pb-10 md:pt-24 md:pb-14 px-6">
        <div className="max-w-[1200px] mx-auto">
          <span className="pill pill-sage text-[13px] mb-6 inline-flex">
            Now in New York City
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-tight text-black max-w-2xl mx-auto mb-6">
            Make sauna part of your{" "}
            <span className="font-display italic text-sage">week</span>.
          </h1>
          <p className="text-base md:text-lg text-ash leading-relaxed max-w-md mx-auto mb-8">
            One membership. Nineteen partner bathhouses and saunas.
            Book with credits. Go with friends. Build a ritual.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/membership" className="btn-sage">
              View Plans — from $49/mo
            </Link>
            <Link href="/how-it-works" className="btn-outline">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ─── IMAGE STRIP ─── */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-3 gap-3">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5f627ccbb290eb31d9234aee/3945cde9-78a8-4ad9-809f-97e823a756e6/Neutral+Pool+1.jpg"
            alt="Bathhouse Williamsburg"
            className="col-span-3 md:col-span-1 w-full aspect-[16/9] md:aspect-[4/3] object-cover rounded-xl"
          />
          <img
            src="https://beaire.com/sites/all/modules/beaire/img/centros/_NYC_1.jpg"
            alt="AIRE Ancient Baths"
            className="hidden md:block w-full aspect-[4/3] object-cover rounded-xl"
          />
          <img
            src="https://cdn.prod.website-files.com/682939c2f8a0c33aaa289209/6945a26725252246c9321212_seandavidson_lore_15.jpg"
            alt="Lore Bathing Club"
            className="hidden md:block w-full aspect-[4/3] object-cover rounded-xl"
          />
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-16 md:py-24 bg-white border-y border-mist">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="section-label">How It Works</p>
            <h2 className="font-display text-3xl md:text-[40px] tracking-tight text-black">
              Three simple steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { n: "01", t: "Pick a plan", d: "Choose a membership tier. Every plan includes monthly credits that work at any partner venue." },
              { n: "02", t: "Book with credits", d: "Browse venues, see credit costs upfront. Off-peak times are cheaper. Groups save even more." },
              { n: "03", t: "Go together", d: "Join plans other members are organizing. Or create your own and invite friends." },
            ].map((s) => (
              <div key={s.n} className="card p-7">
                <div className="w-11 h-11 rounded-full bg-sage-muted flex items-center justify-center text-sage text-sm font-bold mb-5">
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{s.t}</h3>
                <p className="text-sm text-ash leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PLANS ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="section-label">This Week</p>
              <h2 className="font-display text-3xl md:text-[36px] tracking-tight text-black">
                Sessions with momentum
              </h2>
              <p className="text-sm text-ash mt-2 max-w-md">
                Members are coordinating visits across the city. Join a plan to save credits.
              </p>
            </div>
            <Link href="/plans" className="text-sm text-sage font-semibold hover:text-sage-dark transition-colors">
              See all plans &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((p) => (
              <div key={p.id} className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="pill pill-sage text-[12px]">{p.day} {p.time}</span>
                  <span className="text-xs text-silver">{p.spots} spots left</span>
                </div>
                <h3 className="text-[17px] font-semibold text-black mb-1">{p.title}</h3>
                <p className="text-sm text-ash">{p.venue} &middot; {p.hood}</p>

                <div className="mt-5 pt-4 border-t border-mist flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex -space-x-2">
                      {Array.from({ length: Math.min(p.going, 4) }).map((_, i) => (
                        <div
                          key={i}
                          className="w-7 h-7 rounded-full border-2 border-white"
                          style={{ background: `hsl(${130 + i * 20}, ${25 + i * 3}%, ${68 - i * 4}%)` }}
                        />
                      ))}
                    </div>
                    <span className="text-[13px] text-ash">{p.going} going</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="pill pill-white text-[13px] font-semibold">{p.cr} cr</span>
                    {p.cr < p.normal && (
                      <span className="text-[11px] font-medium text-sage">-{p.normal - p.cr}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CREDITS EXPLAINED ─── */}
      <section className="py-16 md:py-24 bg-white border-y border-mist">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-lg mx-auto mb-12">
            <p className="section-label">Credits</p>
            <h2 className="font-display text-3xl md:text-[36px] tracking-tight text-black mb-3">
              You always know what you&apos;re spending.
            </h2>
            <p className="text-sm text-ash leading-relaxed">
              Credits cost different amounts depending on venue, time, and group size.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {[
              { w: "Brooklyn Banya", t: "Tue 2pm · Solo", cr: 3, badge: "Off-peak", cls: "pill-sage" },
              { w: "Bathhouse", t: "Fri 7pm · Solo", cr: 6, badge: "Peak", cls: "pill-warm" },
              { w: "Othership", t: "Thu 6pm · Group of 4", cr: 4, badge: "Group rate", cls: "pill-sage" },
              { w: "AIRE Ancient Baths", t: "Sat 11am · Solo", cr: 8, badge: "Tier 1", cls: "pill-warm" },
            ].map((e) => (
              <div key={e.w} className="card p-5 flex items-center justify-between hover:translate-y-0 hover:shadow-none">
                <div>
                  <p className="text-sm font-semibold text-black">{e.w}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-ash">{e.t}</span>
                    <span className={`pill ${e.cls} text-[10px]`}>{e.badge}</span>
                  </div>
                </div>
                <span className="credit-num bg-cloud rounded-lg px-3 py-1.5">{e.cr}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/membership" className="btn-outline text-sm">
              See all plans &amp; pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PARTNER VENUES ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="section-label">Partner Venues</p>
              <h2 className="font-display text-3xl md:text-[36px] tracking-tight text-black">
                Nineteen venues, one membership
              </h2>
            </div>
            <Link href="/venues" className="text-sm text-sage font-semibold hover:text-sage-dark transition-colors">
              View all venues &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((v) => (
              <VenueCard key={v.slug} venue={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-16 md:py-24 bg-white border-y border-mist">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="section-label">Membership</p>
            <h2 className="font-display text-3xl md:text-[40px] tracking-tight text-black mb-2">
              Plans that fit your life
            </h2>
            <p className="text-sm text-ash">No contracts. Cancel anytime. Credits roll over.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {membershipPlans.map((p) => (
              <PlanCard key={p.slug} plan={p} />
            ))}
          </div>

          <p className="text-center text-sm text-ash mt-8">
            Founding members get 20% off, locked for 12 months.{" "}
            <Link href="/membership" className="text-sage font-semibold hover:text-sage-dark">
              Learn more
            </Link>
          </p>
        </div>
      </section>

      {/* ─── EXPANSION ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Coming Soon</p>
              <h2 className="font-display text-3xl md:text-[36px] tracking-tight text-black mb-4">
                Your membership travels with you.
              </h2>
              <p className="text-sm text-ash leading-relaxed max-w-md mb-2">
                Launching in NYC. Expanding to Los Angeles, Miami, Chicago, Austin, and beyond.
                Your credits work at partner venues in every city.
              </p>
              <p className="text-sm text-ash leading-relaxed max-w-md">
                No new sign-ups. No extra fees. Your Bathpass works wherever we are.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { city: "New York City", s: "Live", live: true },
                { city: "Los Angeles", s: "2026", live: false },
                { city: "Miami", s: "2026", live: false },
                { city: "Chicago", s: "2027", live: false },
                { city: "Austin", s: "2027", live: false },
                { city: "London", s: "2027", live: false },
              ].map((c) => (
                <div key={c.city} className={`p-5 rounded-xl ${c.live ? "bg-sage-muted border border-sage-muted" : "bg-cloud border border-mist"}`}>
                  <p className="text-sm font-medium text-black">{c.city}</p>
                  <p className={`text-xs mt-1 ${c.live ? "text-sage font-semibold" : "text-silver"}`}>{c.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-sage text-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-[42px] tracking-tight mb-4 max-w-xl mx-auto leading-tight">
            Your weekly reset starts here.
          </h2>
          <p className="text-base text-white/70 mb-8 max-w-md mx-auto">
            Founding memberships are open for New York City. Locked pricing. Bonus credits.
            Early access to every new venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/membership" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors">
              Become a Founding Member
            </Link>
            <Link href="/venues" className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">
              Browse Venues
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
