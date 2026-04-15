import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VenueCard from "@/components/VenueCard";
import { venues } from "@/data/venues";

export const metadata = {
  title: "Partner Venues — Bathpass",
  description: "Browse all Bathpass partner bathhouses, saunas, and recovery spaces in New York City.",
};

export default function VenuesPage() {
  const tier1 = venues.filter((v) => v.tier === "tier-1");
  const tier2 = venues.filter((v) => v.tier === "tier-2");
  const tier3 = venues.filter((v) => v.tier === "tier-3");

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="text-center pt-16 pb-10 md:pt-24 md:pb-14 px-6">
        <div className="max-w-[1200px] mx-auto">
          <span className="pill pill-sage text-[13px] mb-6 inline-flex">New York City</span>
          <h1 className="font-display text-4xl md:text-[56px] leading-[1.08] tracking-tight text-black max-w-lg mx-auto mb-4">
            Partner Venues
          </h1>
          <p className="text-base text-ash leading-relaxed max-w-lg mx-auto">
            Nineteen bathhouses, saunas, and recovery spaces. One membership.
            Book any of them with your monthly credits.
          </p>
        </div>
      </section>

      {/* Credit legend */}
      <section className="border-y border-mist bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-4">
          <div className="flex flex-wrap items-center gap-5 justify-center">
            <span className="text-xs font-medium text-ash uppercase tracking-wider">Credit Range</span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-black" />
              <span className="text-xs text-ash">Tier 1 &middot; 7–8 credits</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sage-muted border border-sage-muted" />
              <span className="text-xs text-ash">Tier 2 &middot; 4–5 credits</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cloud border border-mist" />
              <span className="text-xs text-ash">Tier 3 &middot; 2–3 credits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tier 1 */}
      {tier1.length > 0 && (
        <section className="py-14 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="mb-8">
              <p className="section-label">Tier 1 &middot; 7–8 credits</p>
              <p className="text-sm text-ash">Full-day destination experiences. Thermal circuits, skyline views, candlelit pools.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tier1.map((v) => <VenueCard key={v.slug} venue={v} />)}
            </div>
          </div>
        </section>
      )}

      {/* Tier 2 */}
      {tier2.length > 0 && (
        <section className="py-14 md:py-20 bg-white border-y border-mist">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="mb-8">
              <p className="section-label">Tier 2 &middot; 4–5 credits</p>
              <p className="text-sm text-ash">The core of the network. Design-forward bathhouses, guided sessions, recovery studios.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tier2.map((v) => <VenueCard key={v.slug} venue={v} />)}
            </div>
          </div>
        </section>
      )}

      {/* Tier 3 */}
      {tier3.length > 0 && (
        <section className="py-14 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="mb-8">
              <p className="section-label">Tier 3 &middot; 2–3 credits</p>
              <p className="text-sm text-ash">Neighborhood institutions and accessible entry points. Authentic heat, great value.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tier3.map((v) => <VenueCard key={v.slug} venue={v} />)}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
