import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How It Works — Bathpass",
  description: "Learn how Bathpass credits, booking, and social plans work.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="text-center pt-16 pb-10 md:pt-24 md:pb-14 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="section-label mb-2">How It Works</p>
          <h1 className="font-display text-4xl md:text-[56px] leading-[1.08] tracking-tight text-black max-w-lg mx-auto mb-4">
            Membership, simplified.
          </h1>
          <p className="text-base text-ash leading-relaxed max-w-lg mx-auto">
            Bathpass replaces expensive drop-ins and rigid single-venue memberships
            with one flexible plan that works everywhere we partner.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-20 bg-white border-y border-mist">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {[
            { n: "01", t: "Pick a plan", lead: "Choose the tier that fits your frequency.", d: "Every plan gives you a monthly credit allocation. Light is great for one or two visits. Core fits regulars. Ritual and Social are for the committed. No contracts, no lock-in." },
            { n: "02", t: "Browse venues", lead: "See what each visit costs before you book.", d: "Every partner venue shows a clear credit cost. Standard venues are 3–4 credits. Premium 5–6. Luxury 7–8. Off-peak costs less. Groups save more. You always see the full breakdown." },
            { n: "03", t: "Book with credits", lead: "One tap. Credits deducted. Confirmed.", d: "Pick a venue, choose a session and time, confirm. Credits deducted instantly. Confirmation email and calendar invite. Cancel for full refund up to 24 hours before." },
            { n: "04", t: "Go with others", lead: "The best part. Join or create social plans.", d: "See when other members are heading to a venue. Join their plan to save credits — groups of 3+ save 1 credit each, 5+ save 2. Create your own plan and invite friends." },
            { n: "05", t: "Build your ritual", lead: "Come back. Try new venues. Find your rhythm.", d: "Credits refresh monthly. Unused credits roll over. Your membership works at every venue, so mix favorites with new discoveries. As we expand, your pass travels with you." },
          ].map((step, i, arr) => (
            <div key={step.n} className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 ${i < arr.length - 1 ? "border-b border-mist" : ""}`}>
              <div className="md:col-span-1">
                <div className="w-10 h-10 rounded-full bg-sage-muted flex items-center justify-center text-sage text-sm font-bold">
                  {step.n}
                </div>
              </div>
              <div className="md:col-span-4">
                <h2 className="text-xl font-semibold text-black mb-1">{step.t}</h2>
                <p className="text-sm font-medium text-sage">{step.lead}</p>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm text-ash leading-relaxed max-w-lg">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Bathpass */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="section-label">Why Bathpass</p>
            <h2 className="font-display text-3xl md:text-[36px] tracking-tight text-black">
              Compared to how it works today.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card p-7 hover:translate-y-0 hover:shadow-none">
              <p className="text-xs font-medium text-error uppercase tracking-wider mb-3">Drop-ins</p>
              <p className="text-xl font-semibold text-black mb-3">$40–$150 per visit</p>
              <ul className="space-y-2 text-sm text-ash">
                <li>Full price every time</li>
                <li>No flexibility across venues</li>
                <li>No social coordination</li>
                <li>No relationship with the space</li>
              </ul>
            </div>

            <div className="card p-7 hover:translate-y-0 hover:shadow-none">
              <p className="text-xs font-medium text-error uppercase tracking-wider mb-3">Single-Venue Membership</p>
              <p className="text-xl font-semibold text-black mb-3">$100–$300/mo, one venue</p>
              <ul className="space-y-2 text-sm text-ash">
                <li>Locked to one location</li>
                <li>Expensive to stack</li>
                <li>No variety</li>
                <li>Hard to cancel</li>
              </ul>
            </div>

            <div className="bg-sage text-white p-7 rounded-xl">
              <p className="text-xs font-medium text-sage-light uppercase tracking-wider mb-3">Bathpass</p>
              <p className="text-xl font-semibold mb-3">From $49/mo, nineteen venues</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Credits work everywhere</li>
                <li>Off-peak and group rates</li>
                <li>Social plans built in</li>
                <li>No contracts, cancel anytime</li>
                <li>Membership travels to new cities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-[40px] tracking-tight mb-4 max-w-xl mx-auto">
            Ready to make it part of your week?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/membership" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-sage rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors">
              View Plans
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
