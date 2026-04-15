import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { venues, getVenueBySlug, tierLabels } from "@/data/venues";
import type { Metadata } from "next";

export function generateStaticParams() {
  return venues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);
  if (!venue) return { title: "Not Found — Bathpass" };
  return { title: `${venue.name} ${venue.neighborhood} — Bathpass`, description: venue.shortDescription };
}

const sessions = [
  { name: "General Access", time: "Tomorrow, 10am–2pm", mod: 0, tag: "Off-peak", cls: "pill-sage" },
  { name: "General Access", time: "Friday, 6pm–10pm", mod: 1, tag: "Peak", cls: "pill-warm" },
  { name: "Guided Session", time: "Saturday, 11am–1pm", mod: 2, tag: null, cls: "" },
];

export default async function VenueDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);
  if (!venue) notFound();

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[55vh] overflow-hidden bg-black">
        <img src={venue.heroImage} alt={venue.name} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-[1200px] mx-auto">
            <span className="pill pill-white text-[11px] mb-3 inline-flex">{tierLabels[venue.tier]}</span>
            <h1 className="font-display text-4xl md:text-5xl text-white mb-1">{venue.name}</h1>
            <p className="text-white/60 text-sm">{venue.neighborhood}, {venue.borough}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-base text-charcoal leading-relaxed max-w-xl">{venue.shortDescription}</p>
                <a href="https://dipdays.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-sage font-medium mt-3 hover:text-sage-dark transition-colors">
                  Full review on Dipdays
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              </div>

              <div>
                <p className="section-label mb-3">Amenities</p>
                <div className="flex flex-wrap gap-2">
                  {venue.amenities.map((a) => (
                    <span key={a} className="text-xs font-medium text-ash px-3 py-1.5 bg-cloud rounded-lg">{a}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="section-label mb-3">Vibe</p>
                <div className="flex flex-wrap gap-2">
                  {venue.vibeTags.map((t) => (
                    <span key={t} className="text-xs font-medium text-ash px-3 py-1.5 bg-sage-wash border border-sage-muted rounded-lg">{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="section-label mb-3">Available Sessions</p>
                <div className="space-y-2">
                  {sessions.map((s, i) => (
                    <div key={i} className="card p-5 flex items-center justify-between hover:translate-y-0">
                      <div>
                        <p className="text-sm font-medium text-black">{s.name}</p>
                        <p className="text-xs text-ash mt-0.5">{s.time}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        {s.tag && <span className={`pill ${s.cls} text-[10px]`}>{s.tag}</span>}
                        <span className="pill pill-white text-[13px] font-semibold">{venue.baseCreditCost + s.mod} cr</span>
                        <Link href={`/book/${venue.slug}/general`} className="btn-sage text-xs py-2 px-4">Book</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {venue.socialSlots && (
                <div>
                  <p className="section-label mb-3">Upcoming Plans</p>
                  <div className="card p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="pill pill-sage text-[12px]">Thu 7:00 PM</span>
                      <span className="text-xs text-silver">2 spots left</span>
                    </div>
                    <h3 className="text-[17px] font-semibold text-black mb-1">Post-Work Reset</h3>
                    <p className="text-sm text-ash mb-4">4 members going</p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[0, 1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white"
                            style={{ background: `hsl(${130 + i * 20}, ${25 + i * 3}%, ${68 - i * 4}%)` }} />
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <span className="pill pill-white text-[13px] font-semibold">{venue.baseCreditCost - 1} cr</span>
                          <p className="text-[11px] text-sage mt-1">Save 1 with group</p>
                        </div>
                        <button className="btn-sage text-xs py-2 px-4">Join</button>
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 text-sm text-sage font-medium flex items-center gap-1.5 hover:text-sage-dark transition-colors">
                    Create a group plan
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-sage text-white p-6 rounded-xl sticky top-24">
                <p className="text-xs font-medium text-sage-light uppercase tracking-wider mb-2">Quick Book</p>
                <p className="text-2xl font-bold mb-0.5">From {venue.baseCreditCost} credits</p>
                <p className="text-xs text-white/50 mb-5">Off-peak times cost fewer</p>
                <Link href={`/book/${venue.slug}/general`}
                  className="block w-full text-center py-3 bg-white text-sage rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors">
                  Book Now
                </Link>
                <p className="text-[10px] text-white/30 mt-2 text-center">Requires Bathpass membership</p>
              </div>

              <div className="card p-6 space-y-4 hover:translate-y-0 hover:shadow-none">
                <div>
                  <p className="text-xs font-medium text-ash uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-sm text-charcoal">{venue.hours}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ash uppercase tracking-wider mb-1">Address</p>
                  <p className="text-sm text-charcoal">{venue.address}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ash uppercase tracking-wider mb-1">Group Friendly</p>
                  <p className="text-sm text-charcoal">
                    {venue.groupFriendly ? `Yes, up to ${venue.maxGroupSize}` : "Individual only"}
                  </p>
                </div>
                <a href={venue.website} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-sage font-medium flex items-center gap-1.5 hover:text-sage-dark transition-colors pt-2">
                  Venue website
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
