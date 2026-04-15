import Link from "next/link";

export const metadata = { title: "Direction A: Warm Mineral — Bathpass" };

/*
 * DIRECTION A — WARM MINERAL
 * ──────────────────────────────
 * Aesop restraint + Crown Affair warmth + MERIT simplicity
 *
 * Palette: deep espresso, warm sand, ivory, cream whites
 * Type: DM Serif Display (display) + DM Sans (body) — editorial but clean
 * Layout: generous whitespace, asymmetric grids, editorial rhythm
 * Cards: borderless with subtle shadows, warm backgrounds
 * Tone: mature, composed, ritual-oriented, quietly luxurious
 * Radius: 0 (sharp everywhere — Aesop-like discipline)
 */

const V = {
  bg: "#F7F5F0",
  card: "#FFFFFF",
  surface: "#EDE9E0",
  border: "#DDD8CC",
  espresso: "#2C2825",
  sand: "#B08C5A",
  sandLight: "#D4BF9A",
  sandMuted: "#F0EADE",
  text: "#2C2825",
  textSoft: "#7A7468",
  textMuted: "#A69E90",
  white: "#FFFFFF",
};

export default function DirectionA() {
  return (
    <div style={{ background: V.bg, color: V.text, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {/* Font imports */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />

      {/* Nav */}
      <nav
        style={{
          position: "sticky", top: 0, zIndex: 50,
          background: `${V.bg}ee`, backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${V.border}`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: V.espresso, letterSpacing: "-0.02em" }}>
            bathpass
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {["Venues", "Membership", "How It Works"].map((l) => (
              <span key={l} style={{ fontSize: 13, color: V.textSoft, letterSpacing: "0.01em" }}>{l}</span>
            ))}
            <span style={{
              padding: "10px 24px", background: V.espresso, color: V.white,
              fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" as const,
            }}>
              Join
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ width: 40, height: 1, background: V.sand, marginBottom: 32 }} />
            <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: V.sand, marginBottom: 20, fontWeight: 500 }}>
              A membership for bathhouse culture
            </p>
            <h1 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 64, lineHeight: 1.05, letterSpacing: "-0.02em",
              color: V.espresso, marginBottom: 28,
            }}>
              Make recovery
              <br />part of your
              <br /><span style={{ color: V.sand }}>weekly ritual.</span>
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: V.textSoft, maxWidth: 380, marginBottom: 40 }}>
              One membership across fifteen partner bathhouses and saunas in
              New York City. Book with credits. Go with others.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <span style={{
                padding: "14px 32px", background: V.espresso, color: V.white,
                fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const,
              }}>
                View Plans
              </span>
              <span style={{
                padding: "14px 32px", border: `1px solid ${V.espresso}`, color: V.espresso,
                fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const,
              }}>
                How It Works
              </span>
            </div>
          </div>
          <div>
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
                alt="Sauna"
                style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", bottom: 24, left: 24, right: 24,
                background: `${V.white}f0`, backdropFilter: "blur(8px)",
                padding: "20px 24px",
              }}>
                <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: V.textMuted, marginBottom: 4 }}>
                  From
                </p>
                <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, color: V.espresso }}>
                  $49<span style={{ fontSize: 14, color: V.textSoft }}>/month</span>
                </p>
                <p style={{ fontSize: 12, color: V.textSoft, marginTop: 4 }}>
                  5 credits &middot; 15 partner venues
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ borderTop: `1px solid ${V.border}`, borderBottom: `1px solid ${V.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { val: "15", label: "Partner Venues" },
            { val: "3–8", label: "Credits Per Visit" },
            { val: "4", label: "Membership Tiers" },
            { val: "NYC", label: "Launching In" },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: "28px 0", borderRight: i < 3 ? `1px solid ${V.border}` : "none",
              paddingLeft: i > 0 ? 32 : 0,
            }}>
              <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, color: V.sand }}>
                {s.val}
              </p>
              <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: V.textMuted, marginTop: 4 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: V.sand, marginBottom: 16, fontWeight: 500 }}>
          How It Works
        </p>
        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 40, lineHeight: 1.15, color: V.espresso, marginBottom: 60, maxWidth: 500 }}>
          Three steps to a weekly practice.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
          {[
            { n: "01", t: "Choose your plan", d: "Pick a tier that fits your rhythm. Every plan gives you monthly credits for any partner venue." },
            { n: "02", t: "Book with credits", d: "Browse venues, see the credit cost, book. Off-peak saves credits. Groups save more." },
            { n: "03", t: "Go with others", d: "See who else is going. Join a plan or start your own. Groups lower the cost for everyone." },
          ].map((s) => (
            <div key={s.n}>
              <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 48, color: V.surface, marginBottom: 20 }}>
                {s.n}
              </p>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: V.espresso, marginBottom: 10 }}>
                {s.t}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: V.textSoft }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Social plans */}
      <section style={{ background: V.surface, padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: V.sand, marginBottom: 16, fontWeight: 500 }}>
                This Week
              </p>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 36, color: V.espresso }}>
                Plans with momentum.
              </h2>
            </div>
            <span style={{ fontSize: 13, color: V.sand, fontWeight: 500 }}>View all &rarr;</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { title: "Post-Work Reset", venue: "Bathhouse, Williamsburg", day: "Thursday 7pm", going: 4, credits: 4, save: 1 },
              { title: "Sunday Recovery", venue: "Brooklyn Banya", day: "Sunday 11am", going: 6, credits: 2, save: 1 },
              { title: "Morning Contrast", venue: "Othership, Flatiron", day: "Friday 7am", going: 3, credits: 4, save: 1 },
            ].map((p) => (
              <div key={p.title} style={{ background: V.white, padding: 28 }}>
                <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: V.sand, marginBottom: 12, fontWeight: 500 }}>
                  {p.day}
                </p>
                <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: V.espresso, marginBottom: 4 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 13, color: V.textSoft, marginBottom: 20 }}>{p.venue}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: `1px solid ${V.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ display: "flex" }}>
                      {Array.from({ length: Math.min(p.going, 4) }).map((_, i) => (
                        <div key={i} style={{
                          width: 24, height: 24, borderRadius: "50%",
                          background: `hsl(${30 + i * 12}, ${35 + i * 5}%, ${72 - i * 4}%)`,
                          border: `2px solid ${V.white}`, marginLeft: i > 0 ? -6 : 0,
                        }} />
                      ))}
                    </div>
                    <span style={{ fontSize: 12, color: V.textSoft }}>{p.going} going</span>
                  </div>
                  <div style={{ textAlign: "right" as const }}>
                    <span style={{
                      display: "inline-block", padding: "4px 10px",
                      background: V.sandMuted, fontSize: 13, fontWeight: 600, color: V.espresso,
                    }}>
                      {p.credits} cr
                    </span>
                    <p style={{ fontSize: 10, color: "#6B8E6B", marginTop: 4 }}>Save {p.save} with group</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit explanation */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: V.sand, marginBottom: 16, fontWeight: 500 }}>
              Credits, Explained
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 36, lineHeight: 1.15, color: V.espresso, marginBottom: 20 }}>
              Always know what
              <br />you&apos;re spending.
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: V.textSoft, maxWidth: 360, marginBottom: 32 }}>
              Every visit has a clear credit cost. The price varies by venue tier,
              time of day, and whether you&apos;re going with others. No surprises.
            </p>
            <span style={{
              padding: "14px 32px", background: V.espresso, color: V.white,
              fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const,
            }}>
              See All Plans
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { when: "Tuesday 2pm", where: "Brooklyn Banya", note: "Solo, off-peak", cr: 3, tag: "Off-peak", tagColor: "#6B8E6B" },
              { when: "Friday 7pm", where: "Bathhouse", note: "Solo, peak", cr: 6, tag: "Peak", tagColor: V.sand },
              { when: "Thursday 6pm", where: "Othership", note: "Group of 4", cr: 4, tag: "Group rate", tagColor: "#6B8E6B" },
              { when: "Saturday 11am", where: "AIRE Ancient Baths", note: "Luxury, weekend", cr: 8, tag: "Luxury", tagColor: V.sand },
            ].map((e) => (
              <div key={e.when} style={{ background: V.white, border: `1px solid ${V.border}`, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 500, color: V.espresso }}>{e.when} &middot; {e.where}</p>
                  <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                    <span style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: e.tagColor, fontWeight: 500 }}>
                      {e.tag}
                    </span>
                    <span style={{ fontSize: 10, color: V.textMuted }}>{e.note}</span>
                  </div>
                </div>
                <span style={{
                  padding: "6px 14px", background: V.sandMuted,
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 16, color: V.espresso,
                }}>
                  {e.cr}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue preview */}
      <section style={{ background: V.white, padding: "100px 0", borderTop: `1px solid ${V.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: V.sand, marginBottom: 16, fontWeight: 500 }}>
                Partner Venues
              </p>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 36, color: V.espresso }}>
                Fifteen venues. One membership.
              </h2>
            </div>
            <span style={{ fontSize: 13, color: V.sand, fontWeight: 500 }}>View all &rarr;</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { name: "Bathhouse", hood: "Williamsburg", tier: "Premium", cr: 5, img: "https://images.squarespace-cdn.com/content/v1/5f627ccbb290eb31d9234aee/3945cde9-78a8-4ad9-809f-97e823a756e6/Neutral+Pool+1.jpg", tags: ["Sauna", "Pools", "Rooftop"] },
              { name: "AIRE Ancient Baths", hood: "Tribeca", tier: "Luxury", cr: 8, img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80", tags: ["Thermal", "Candlelit", "Wine Bath"] },
              { name: "Russian & Turkish Baths", hood: "East Village", tier: "Standard", cr: 3, img: "https://images.unsplash.com/photo-1515362655824-9a74989f318e?w=600&q=80", tags: ["Banya", "Cold Plunge", "Authentic"] },
            ].map((v) => (
              <div key={v.name}>
                <div style={{ position: "relative", marginBottom: 16 }}>
                  <img src={v.img} alt={v.name} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover" }} />
                  <span style={{
                    position: "absolute", bottom: 12, right: 12,
                    background: `${V.white}ee`, backdropFilter: "blur(4px)",
                    padding: "6px 12px", fontSize: 12, fontWeight: 600, color: V.espresso,
                  }}>
                    {v.cr} credits
                  </span>
                </div>
                <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: V.sand, marginBottom: 4, fontWeight: 500 }}>
                  {v.tier} &middot; {v.hood}
                </p>
                <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 22, color: V.espresso, marginBottom: 8 }}>
                  {v.name}
                </h3>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
                  {v.tags.map((t) => (
                    <span key={t} style={{
                      fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" as const,
                      color: V.textSoft, padding: "4px 10px", background: V.bg, fontWeight: 500,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: V.bg, padding: "100px 0", borderTop: `1px solid ${V.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 60 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: V.sand, marginBottom: 16, fontWeight: 500 }}>Membership</p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 40, color: V.espresso, marginBottom: 12 }}>
              Transparent plans. Real value.
            </h2>
            <p style={{ fontSize: 14, color: V.textSoft }}>No contracts. Cancel anytime.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { name: "Light", cr: 5, price: "$49", pop: false },
              { name: "Core", cr: 12, price: "$99", pop: true },
              { name: "Ritual", cr: 20, price: "$159", pop: false },
              { name: "Social", cr: 30, price: "$219", pop: false },
            ].map((p) => (
              <div key={p.name} style={{
                background: p.pop ? V.espresso : V.white,
                color: p.pop ? V.white : V.espresso,
                padding: 32, position: "relative",
              }}>
                {p.pop && (
                  <span style={{
                    position: "absolute", top: -12, left: 32,
                    background: V.sand, color: V.white,
                    fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase" as const,
                    padding: "4px 12px",
                  }}>
                    Most Popular
                  </span>
                )}
                <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: p.pop ? V.sandLight : V.textMuted, marginBottom: 8 }}>
                  {p.name}
                </p>
                <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 36, marginBottom: 4 }}>
                  {p.price}<span style={{ fontSize: 14, opacity: 0.5 }}>/mo</span>
                </p>
                <div style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "12px 0", marginTop: 12, marginBottom: 20,
                  borderTop: `1px solid ${p.pop ? "rgba(255,255,255,0.15)" : V.border}`,
                  borderBottom: `1px solid ${p.pop ? "rgba(255,255,255,0.15)" : V.border}`,
                }}>
                  <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 24, color: V.sand }}>{p.cr}</span>
                  <span style={{ fontSize: 12, color: p.pop ? "rgba(255,255,255,0.6)" : V.textSoft }}>credits/month</span>
                </div>
                <span style={{
                  display: "block", textAlign: "center" as const,
                  padding: "12px 0",
                  background: p.pop ? V.sand : V.espresso,
                  color: V.white, fontSize: 11, fontWeight: 500,
                  letterSpacing: "0.1em", textTransform: "uppercase" as const,
                }}>
                  Get Started
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section style={{ background: V.espresso, color: V.white, padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: V.sandLight, marginBottom: 16, fontWeight: 500 }}>
              Coming Soon
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 36, lineHeight: 1.15, marginBottom: 20 }}>
              Your membership travels with you.
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", maxWidth: 380 }}>
              Launching in NYC. Expanding nationally, then internationally.
              Your credits work at partner venues in every city.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.1)" }}>
            {[
              { city: "New York City", s: "Live" }, { city: "Los Angeles", s: "2026" },
              { city: "Miami", s: "2026" }, { city: "London", s: "2027" },
            ].map((c) => (
              <div key={c.city} style={{ background: V.espresso, padding: 24 }}>
                <p style={{ fontSize: 14, fontWeight: 500 }}>{c.city}</p>
                <p style={{ fontSize: 12, color: c.s === "Live" ? V.sand : "rgba(255,255,255,0.3)", marginTop: 4 }}>{c.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "100px 0", textAlign: "center" as const }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ width: 40, height: 1, background: V.sand, margin: "0 auto 32px" }} />
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 40, lineHeight: 1.15, color: V.espresso, marginBottom: 16 }}>
            Stop buying drop-ins.
            <br />Start building a ritual.
          </h2>
          <p style={{ fontSize: 14, color: V.textSoft, marginBottom: 36 }}>
            Founding memberships are open. 20% off, locked for 12 months.
          </p>
          <span style={{
            padding: "16px 40px", background: V.sand, color: V.white,
            fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const,
          }}>
            Become a Founding Member
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${V.border}`, padding: "40px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: V.textMuted }}>&copy; 2026 Bathpass</span>
          <Link href="/directions" style={{ fontSize: 12, color: V.sand, textDecoration: "none" }}>
            &larr; Back to all directions
          </Link>
        </div>
      </footer>
    </div>
  );
}
