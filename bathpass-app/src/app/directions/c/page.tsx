import Link from "next/link";

export const metadata = { title: "Direction C: Quiet Authority — Bathpass" };

/*
 * DIRECTION C — QUIET AUTHORITY
 * ──────────────────────────────
 * Oura trust + Aesop precision + Glossier structure
 *
 * Palette: true black, warm terracotta accent, pure whites, cool grays
 * Type: Satoshi/Geist (geometric sans) — clean, tech-premium, confident
 * Layout: strict grid, strong negative space, systematic, product-forward
 * Cards: minimal border, precise, zero decoration
 * Tone: confident, authoritative, modern-tech-meets-wellness, minimal
 * Radius: 4px (barely there — precise, not cold)
 */

const V = {
  bg: "#FAFAFA",
  card: "#FFFFFF",
  surface: "#F2F2F0",
  border: "#E5E5E3",
  black: "#0A0A0A",
  terra: "#C4956A",
  terraLight: "#D9B892",
  terraMuted: "#F5EDE3",
  text: "#0A0A0A",
  textSoft: "#5A5A5A",
  textMuted: "#999999",
  white: "#FFFFFF",
  r: "4px",
};

export default function DirectionC() {
  return (
    <div style={{ background: V.bg, color: V.text, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: V.black, color: V.white,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
          <span style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 18, fontWeight: 700, letterSpacing: "-0.03em" }}>
            bathpass
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {["Venues", "Membership", "How It Works"].map((l) => (
              <span key={l} style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{l}</span>
            ))}
            <span style={{
              padding: "8px 20px", background: V.terra, color: V.white,
              fontSize: 12, fontWeight: 600, letterSpacing: "0.04em",
              borderRadius: V.r,
            }}>
              Get Started
            </span>
          </div>
        </div>
      </nav>

      {/* Hero — full-width dark, left-aligned, product-confident */}
      <section style={{ background: V.black, color: V.white, padding: "80px 0 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 60, alignItems: "end" }}>
            <div style={{ paddingBottom: 80 }}>
              <p style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.16em",
                textTransform: "uppercase" as const, color: V.terra, marginBottom: 24,
              }}>
                Membership for Bathhouse Culture
              </p>
              <h1 style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: 68, fontWeight: 700, lineHeight: 0.95,
                letterSpacing: "-0.04em", marginBottom: 28,
              }}>
                Make sauna
                <br />part of your
                <br />week.
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", maxWidth: 400, marginBottom: 40 }}>
                One membership. Fifteen partner venues in New York City. Book
                with credits. Go with others. Build your ritual.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <span style={{
                  padding: "14px 28px", background: V.terra, color: V.white,
                  fontSize: 13, fontWeight: 600, borderRadius: V.r,
                }}>
                  View Plans
                </span>
                <span style={{
                  padding: "14px 28px", border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500,
                  borderRadius: V.r,
                }}>
                  How It Works
                </span>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
                alt=""
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: `${V.r} ${V.r} 0 0` }}
              />
            </div>
          </div>
        </div>

        {/* Stats strip inside hero */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {[
              { v: "15", l: "Partner Venues" },
              { v: "3–8", l: "Credits/Visit" },
              { v: "$49", l: "Starting Price" },
              { v: "NYC", l: "Launch City" },
            ].map((s, i) => (
              <div key={s.l} style={{
                padding: "24px 0",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                paddingLeft: i > 0 ? 24 : 0,
              }}>
                <p style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 24, fontWeight: 700, color: V.terra }}>{s.v}</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — precise, numbered */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: V.terra, marginBottom: 16 }}>
              How It Works
            </p>
            <h2 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Three steps.
              <br />No complexity.
            </h2>
          </div>
          <div>
            {[
              { n: "01", t: "Choose your plan", d: "Pick a membership tier. Every plan includes monthly credits that work at any partner venue in the network." },
              { n: "02", t: "Book with credits", d: "Browse venues. See the credit cost upfront. Off-peak times cost less. Groups save more. Book in seconds." },
              { n: "03", t: "Go together", d: "See when other members are going. Join their plan or start your own. Groups of 3+ save 1 credit each." },
            ].map((s, i, a) => (
              <div key={s.n} style={{
                display: "grid", gridTemplateColumns: "48px 1fr", gap: 20,
                padding: "28px 0",
                borderBottom: i < a.length - 1 ? `1px solid ${V.border}` : "none",
              }}>
                <span style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontSize: 14, fontWeight: 700, color: V.terra,
                  width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center",
                  background: V.terraMuted, borderRadius: V.r,
                }}>
                  {s.n}
                </span>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: V.text, marginBottom: 6 }}>{s.t}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: V.textSoft }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social plans */}
      <section style={{ background: V.surface, padding: "80px 0", borderTop: `1px solid ${V.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: V.terra, marginBottom: 12 }}>This Week</p>
              <h2 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>
                Plans with momentum
              </h2>
            </div>
            <span style={{ fontSize: 13, color: V.terra, fontWeight: 600 }}>All plans &rarr;</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { t: "Post-Work Reset", v: "Bathhouse, Williamsburg", d: "Thu 7pm", g: 4, cr: 4, save: 1 },
              { t: "Sunday Recovery", v: "Brooklyn Banya", d: "Sun 11am", g: 6, cr: 2, save: 1 },
              { t: "Morning Contrast", v: "Othership, Flatiron", d: "Fri 7am", g: 3, cr: 4, save: 1 },
            ].map((p) => (
              <div key={p.t} style={{
                background: V.white, borderRadius: V.r, padding: 24,
                border: `1px solid ${V.border}`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: V.terra, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{p.d}</span>
                  <span style={{ fontSize: 11, color: V.textMuted }}>open</span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 18, fontWeight: 600, marginBottom: 4, letterSpacing: "-0.01em" }}>{p.t}</h3>
                <p style={{ fontSize: 13, color: V.textSoft, marginBottom: 20 }}>{p.v}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: `1px solid ${V.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ display: "flex" }}>
                      {Array.from({ length: Math.min(p.g, 4) }).map((_, i) => (
                        <div key={i} style={{
                          width: 24, height: 24, borderRadius: "50%",
                          background: `hsl(${20 + i * 15}, ${50 - i * 5}%, ${72 - i * 4}%)`,
                          border: `2px solid ${V.white}`, marginLeft: i > 0 ? -6 : 0,
                        }} />
                      ))}
                    </div>
                    <span style={{ fontSize: 12, color: V.textSoft }}>{p.g}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{
                      fontFamily: "'Space Grotesk', system-ui, sans-serif",
                      fontSize: 16, fontWeight: 700, color: V.text,
                    }}>
                      {p.cr}
                    </span>
                    <span style={{ fontSize: 11, color: V.textMuted }}>cr</span>
                    <span style={{
                      fontSize: 10, fontWeight: 600, color: "#4A7C4A",
                      padding: "2px 6px", background: "#E8F0E8", borderRadius: V.r,
                    }}>
                      -{p.save}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credits */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: V.terra, marginBottom: 16 }}>Credits</p>
            <h2 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
              Always transparent.
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: V.textSoft, maxWidth: 340, marginBottom: 28 }}>
              Every visit has a clear credit cost based on venue tier, time, and group size.
            </p>
            <span style={{
              display: "inline-block", padding: "12px 24px",
              background: V.black, color: V.white,
              fontSize: 12, fontWeight: 600, borderRadius: V.r,
            }}>
              See All Plans
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { w: "Brooklyn Banya", t: "Tue 2pm · Solo", cr: 3, tag: "Off-peak", tc: "#4A7C4A" },
              { w: "Bathhouse", t: "Fri 7pm · Solo", cr: 6, tag: "Peak", tc: V.terra },
              { w: "Othership", t: "Thu 6pm · Group of 4", cr: 4, tag: "Group", tc: "#4A7C4A" },
              { w: "AIRE Ancient Baths", t: "Sat 11am · Solo", cr: 8, tag: "Luxury", tc: V.terra },
            ].map((e) => (
              <div key={e.w} style={{
                background: V.white, border: `1px solid ${V.border}`, borderRadius: V.r,
                padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{
                    fontSize: 10, fontWeight: 600, color: e.tc,
                    padding: "3px 8px", background: e.tc === "#4A7C4A" ? "#E8F0E8" : V.terraMuted,
                    borderRadius: V.r, letterSpacing: "0.06em", textTransform: "uppercase" as const,
                  }}>
                    {e.tag}
                  </span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 500, color: V.text }}>{e.w}</p>
                    <p style={{ fontSize: 12, color: V.textMuted }}>{e.t}</p>
                  </div>
                </div>
                <span style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontSize: 20, fontWeight: 700, color: V.text,
                }}>
                  {e.cr}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section style={{ background: V.white, padding: "80px 0", borderTop: `1px solid ${V.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: V.terra, marginBottom: 12 }}>Partner Venues</p>
              <h2 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>Fifteen venues. One membership.</h2>
            </div>
            <span style={{ fontSize: 13, color: V.terra, fontWeight: 600 }}>All venues &rarr;</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { name: "Bathhouse", hood: "Williamsburg", tier: "Premium", cr: 5, img: "https://images.squarespace-cdn.com/content/v1/5f627ccbb290eb31d9234aee/3945cde9-78a8-4ad9-809f-97e823a756e6/Neutral+Pool+1.jpg" },
              { name: "AIRE Ancient Baths", hood: "Tribeca", tier: "Luxury", cr: 8, img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80" },
              { name: "Russian & Turkish", hood: "East Village", tier: "Standard", cr: 3, img: "https://images.unsplash.com/photo-1515362655824-9a74989f318e?w=600&q=80" },
            ].map((v) => (
              <div key={v.name} style={{ borderRadius: V.r, overflow: "hidden", border: `1px solid ${V.border}` }}>
                <div style={{ position: "relative" }}>
                  <img src={v.img} alt={v.name} style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover" }} />
                  <div style={{
                    position: "absolute", top: 12, left: 12,
                    background: V.black, color: V.white,
                    fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const,
                    padding: "4px 10px", borderRadius: V.r,
                  }}>
                    {v.tier}
                  </div>
                  <div style={{
                    position: "absolute", bottom: 12, right: 12,
                    background: `${V.white}ee`, backdropFilter: "blur(4px)",
                    padding: "4px 12px", borderRadius: V.r,
                    fontFamily: "'Space Grotesk', system-ui, sans-serif",
                    fontSize: 14, fontWeight: 700, color: V.text,
                  }}>
                    {v.cr} cr
                  </div>
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <h3 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em" }}>{v.name}</h3>
                  <p style={{ fontSize: 13, color: V.textSoft, marginTop: 2 }}>{v.hood}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "100px 0", borderTop: `1px solid ${V.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase" as const, color: V.terra, marginBottom: 12 }}>Membership</p>
            <h2 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" }}>Clear plans. Real value.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
              { n: "Light", cr: 5, p: "$49", pop: false },
              { n: "Core", cr: 12, p: "$99", pop: true },
              { n: "Ritual", cr: 20, p: "$159", pop: false },
              { n: "Social", cr: 30, p: "$219", pop: false },
            ].map((pl) => (
              <div key={pl.n} style={{
                borderRadius: V.r, padding: 28, position: "relative",
                background: pl.pop ? V.black : V.white,
                color: pl.pop ? V.white : V.text,
                border: pl.pop ? "none" : `1px solid ${V.border}`,
              }}>
                {pl.pop && (
                  <span style={{
                    position: "absolute", top: -10, left: 28,
                    background: V.terra, color: V.white, borderRadius: V.r,
                    fontSize: 10, fontWeight: 600, padding: "4px 10px",
                    letterSpacing: "0.08em", textTransform: "uppercase" as const,
                  }}>
                    Popular
                  </span>
                )}
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: pl.pop ? V.terraLight : V.textMuted, marginBottom: 8 }}>{pl.n}</p>
                <p style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 4 }}>
                  {pl.p}<span style={{ fontSize: 14, fontWeight: 400, opacity: 0.4 }}>/mo</span>
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, padding: "14px 0", margin: "14px 0 20px", borderTop: `1px solid ${pl.pop ? "rgba(255,255,255,0.1)" : V.border}` }}>
                  <span style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 28, fontWeight: 700, color: V.terra }}>{pl.cr}</span>
                  <span style={{ fontSize: 12, opacity: 0.5 }}>credits/mo</span>
                </div>
                <div style={{
                  textAlign: "center" as const, padding: "12px 0",
                  background: pl.pop ? V.terra : V.black,
                  color: V.white, borderRadius: V.r,
                  fontSize: 12, fontWeight: 600, letterSpacing: "0.04em",
                }}>
                  Get Started
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: V.black, color: V.white, padding: "100px 0", textAlign: "center" as const }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ width: 40, height: 2, background: V.terra, margin: "0 auto 32px" }} />
          <h2 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
            Stop buying drop-ins.
            <br />Start building a ritual.
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>
            Founding memberships are open. 20% off, locked for 12 months.
          </p>
          <span style={{
            display: "inline-block", padding: "14px 32px",
            background: V.terra, color: V.white, borderRadius: V.r,
            fontSize: 13, fontWeight: 600,
          }}>
            Become a Founding Member
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: V.black, borderTop: "1px solid rgba(255,255,255,0.08)", padding: "24px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>&copy; 2026 Bathpass</span>
          <Link href="/directions" style={{ fontSize: 12, color: V.terra, textDecoration: "none" }}>
            &larr; Back to all directions
          </Link>
        </div>
      </footer>
    </div>
  );
}
