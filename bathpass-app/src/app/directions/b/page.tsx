import Link from "next/link";

export const metadata = { title: "Direction B: Soft Studio — Bathpass" };

/*
 * DIRECTION B — SOFT STUDIO
 * ──────────────────────────────
 * Glossier clarity + Vuori ease + Othership energy
 *
 * Palette: almost-black, sage green, soft greens, warm off-whites
 * Type: Inter (body) + Instrument Serif (display) — approachable modern
 * Layout: rounded corners, soft shadows, airy spacing, centered compositions
 * Cards: rounded, soft border, gentle hover lift
 * Tone: friendly, open, inviting, effortlessly premium, warm
 * Radius: 12px (soft, Glossier-like friendliness)
 */

const V = {
  bg: "#FAF9F7",
  card: "#FFFFFF",
  surface: "#F0EDE8",
  border: "#E8E5E0",
  sage: "#6B8E6B",
  sageDark: "#4A6B4A",
  sageLight: "#8BA68B",
  sageMuted: "#E8EDE8",
  text: "#1A1A1A",
  textSoft: "#6B6B6B",
  textMuted: "#9A9A9A",
  white: "#FFFFFF",
  r: "12px",
};

export default function DirectionB() {
  return (
    <div style={{ background: V.bg, color: V.text, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
        rel="stylesheet"
      />

      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: `${V.bg}ee`, backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${V.border}`,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <span style={{ fontSize: 20, fontWeight: 700, color: V.text, letterSpacing: "-0.02em" }}>
            bathpass
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {["Venues", "Membership", "How It Works"].map((l) => (
              <span key={l} style={{ fontSize: 14, color: V.textSoft }}>{l}</span>
            ))}
            <span style={{
              padding: "10px 24px", background: V.sage, color: V.white,
              fontSize: 13, fontWeight: 600, borderRadius: V.r,
            }}>
              Get Started
            </span>
          </div>
        </div>
      </nav>

      {/* Hero — centered, open, Glossier-like */}
      <section style={{ textAlign: "center" as const, padding: "80px 40px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "inline-block", padding: "6px 16px", background: V.sageMuted,
          borderRadius: 100, fontSize: 12, color: V.sage, fontWeight: 600, marginBottom: 24,
        }}>
          Now in New York City
        </div>
        <h1 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: 72, lineHeight: 1.05, letterSpacing: "-0.02em",
          color: V.text, marginBottom: 24, maxWidth: 700, margin: "0 auto 24px",
        }}>
          Make sauna part of
          <br />your <span style={{ color: V.sage, fontStyle: "italic" }}>week</span>.
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: V.textSoft, maxWidth: 480, margin: "0 auto 36px" }}>
          One membership. Fifteen partner bathhouses and saunas.
          Book with credits. Go with friends. Build a ritual.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <span style={{
            padding: "14px 32px", background: V.sage, color: V.white,
            fontSize: 14, fontWeight: 600, borderRadius: V.r,
          }}>
            View Plans — from $49/mo
          </span>
          <span style={{
            padding: "14px 32px", border: `1.5px solid ${V.border}`, color: V.text,
            fontSize: 14, fontWeight: 500, borderRadius: V.r,
          }}>
            How It Works
          </span>
        </div>
      </section>

      {/* Hero image strip */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 12 }}>
          <img src="https://images.squarespace-cdn.com/content/v1/5f627ccbb290eb31d9234aee/3945cde9-78a8-4ad9-809f-97e823a756e6/Neutral+Pool+1.jpg" alt="" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", borderRadius: V.r }} />
          <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80" alt="" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: V.r }} />
          <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80" alt="" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: V.r }} />
        </div>
      </section>

      {/* How it works — pill cards */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 100px" }}>
        <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: V.sage, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>How It Works</p>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 40, color: V.text }}>
            Three simple steps.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { icon: "01", t: "Pick a plan", d: "Choose a membership tier. Every plan includes monthly credits that work at any partner venue." },
            { icon: "02", t: "Book with credits", d: "See credit costs upfront. Off-peak times are cheaper. Groups save even more." },
            { icon: "03", t: "Go together", d: "Join plans other members are organizing. Or create your own and invite friends." },
          ].map((s) => (
            <div key={s.icon} style={{
              background: V.white, borderRadius: V.r, padding: 32,
              border: `1px solid ${V.border}`,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%", background: V.sageMuted,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 700, color: V.sage, marginBottom: 20,
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: V.text, marginBottom: 8 }}>{s.t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: V.textSoft }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social plans */}
      <section style={{ background: V.white, padding: "80px 0", borderTop: `1px solid ${V.border}`, borderBottom: `1px solid ${V.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: V.sage, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>This Week</p>
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 36, color: V.text }}>
                Sessions with momentum
              </h2>
            </div>
            <span style={{ fontSize: 14, color: V.sage, fontWeight: 600 }}>See all plans &rarr;</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { t: "Post-Work Reset", v: "Bathhouse, Williamsburg", d: "Thu 7pm", g: 4, cr: 4, save: 1 },
              { t: "Sunday Recovery", v: "Brooklyn Banya", d: "Sun 11am", g: 6, cr: 2, save: 1 },
              { t: "Morning Contrast", v: "Othership, Flatiron", d: "Fri 7am", g: 3, cr: 4, save: 1 },
            ].map((p) => (
              <div key={p.t} style={{
                border: `1px solid ${V.border}`, borderRadius: V.r, padding: 24,
                background: V.bg,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{
                    padding: "4px 12px", background: V.sageMuted, borderRadius: 100,
                    fontSize: 12, fontWeight: 600, color: V.sage,
                  }}>
                    {p.d}
                  </span>
                  <span style={{ fontSize: 12, color: V.textMuted }}>spots open</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: V.text, marginBottom: 4 }}>{p.t}</h3>
                <p style={{ fontSize: 13, color: V.textSoft, marginBottom: 16 }}>{p.v}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ display: "flex" }}>
                      {Array.from({ length: Math.min(p.g, 4) }).map((_, i) => (
                        <div key={i} style={{
                          width: 28, height: 28, borderRadius: "50%",
                          background: `hsl(${130 + i * 20}, ${25 + i * 3}%, ${68 - i * 4}%)`,
                          border: `2px solid ${V.bg}`, marginLeft: i > 0 ? -8 : 0,
                        }} />
                      ))}
                    </div>
                    <span style={{ fontSize: 13, color: V.textSoft }}>{p.g} going</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{
                      padding: "4px 12px", background: V.white, border: `1px solid ${V.border}`,
                      borderRadius: 100, fontSize: 14, fontWeight: 600, color: V.text,
                    }}>
                      {p.cr} cr
                    </span>
                    <span style={{ fontSize: 11, color: V.sage }}>-{p.save}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credits explanation */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px" }}>
        <div style={{ textAlign: "center" as const, marginBottom: 48, maxWidth: 520, margin: "0 auto 48px" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: V.sage, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>Credits</p>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 36, color: V.text, marginBottom: 12 }}>
            You always know what you&apos;re spending.
          </h2>
          <p style={{ fontSize: 14, color: V.textSoft, lineHeight: 1.7 }}>
            Credits cost different amounts depending on venue, time, and group size. Here are some examples.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, maxWidth: 700, margin: "0 auto" }}>
          {[
            { w: "Brooklyn Banya", t: "Tue 2pm · Solo", cr: 3, badge: "Off-peak", bc: V.sageMuted, btc: V.sage },
            { w: "Bathhouse", t: "Fri 7pm · Solo", cr: 6, badge: "Peak", bc: "#FFF3E8", btc: "#B08C5A" },
            { w: "Othership", t: "Thu 6pm · Group of 4", cr: 4, badge: "Group rate", bc: V.sageMuted, btc: V.sage },
            { w: "AIRE", t: "Sat 11am · Solo", cr: 8, badge: "Luxury", bc: "#F0EADE", btc: "#8A7350" },
          ].map((e) => (
            <div key={e.w} style={{
              background: V.white, border: `1px solid ${V.border}`, borderRadius: V.r,
              padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: V.text }}>{e.w}</p>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 4 }}>
                  <span style={{ fontSize: 12, color: V.textSoft }}>{e.t}</span>
                  <span style={{
                    fontSize: 10, fontWeight: 600, padding: "2px 8px",
                    borderRadius: 100, background: e.bc, color: e.btc,
                  }}>
                    {e.badge}
                  </span>
                </div>
              </div>
              <span style={{
                fontSize: 20, fontWeight: 700, color: V.text,
                padding: "4px 12px", background: V.bg, borderRadius: 8,
              }}>
                {e.cr}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Venues */}
      <section style={{ background: V.white, padding: "80px 0", borderTop: `1px solid ${V.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: V.sage, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>Partner Venues</p>
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 36, color: V.text }}>
                Fifteen venues, one membership
              </h2>
            </div>
            <span style={{ fontSize: 14, color: V.sage, fontWeight: 600 }}>View all &rarr;</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { name: "Bathhouse", hood: "Williamsburg", cr: 5, img: "https://images.squarespace-cdn.com/content/v1/5f627ccbb290eb31d9234aee/3945cde9-78a8-4ad9-809f-97e823a756e6/Neutral+Pool+1.jpg", tags: ["Sauna", "Pools"] },
              { name: "AIRE Ancient Baths", hood: "Tribeca", cr: 8, img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80", tags: ["Thermal", "Candlelit"] },
              { name: "Brooklyn Banya", hood: "Prospect Heights", cr: 3, img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80", tags: ["Banya", "Authentic"] },
            ].map((v) => (
              <div key={v.name} style={{ borderRadius: V.r, overflow: "hidden", border: `1px solid ${V.border}`, background: V.bg }}>
                <img src={v.img} alt={v.name} style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover" }} />
                <div style={{ padding: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 600, color: V.text }}>{v.name}</h3>
                      <p style={{ fontSize: 13, color: V.textSoft }}>{v.hood}</p>
                    </div>
                    <span style={{
                      padding: "4px 12px", background: V.white, border: `1px solid ${V.border}`,
                      borderRadius: 100, fontSize: 13, fontWeight: 600, color: V.text,
                    }}>
                      {v.cr} cr
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {v.tags.map((t) => (
                      <span key={t} style={{
                        fontSize: 11, color: V.textSoft, padding: "3px 8px",
                        background: V.white, borderRadius: 6,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ textAlign: "center" as const, marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: V.sage, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" as const }}>Membership</p>
            <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 40, color: V.text, marginBottom: 8 }}>Plans that fit your life</h2>
            <p style={{ fontSize: 14, color: V.textSoft }}>No contracts. Cancel anytime. Credits roll over.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { n: "Light", cr: 5, p: "$49", pop: false },
              { n: "Core", cr: 12, p: "$99", pop: true },
              { n: "Ritual", cr: 20, p: "$159", pop: false },
              { n: "Social", cr: 30, p: "$219", pop: false },
            ].map((pl) => (
              <div key={pl.n} style={{
                borderRadius: V.r, padding: 28, position: "relative",
                background: pl.pop ? V.sage : V.white,
                color: pl.pop ? V.white : V.text,
                border: pl.pop ? "none" : `1px solid ${V.border}`,
              }}>
                {pl.pop && (
                  <span style={{
                    position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)",
                    background: V.sageDark, color: V.white, borderRadius: 100,
                    fontSize: 11, fontWeight: 600, padding: "4px 14px", whiteSpace: "nowrap" as const,
                  }}>
                    Most Popular
                  </span>
                )}
                <p style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, opacity: 0.7 }}>{pl.n}</p>
                <p style={{ fontSize: 36, fontWeight: 700, marginBottom: 4, letterSpacing: "-0.02em" }}>
                  {pl.p}<span style={{ fontSize: 14, fontWeight: 400, opacity: 0.5 }}>/mo</span>
                </p>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "12px 0", margin: "12px 0 20px",
                  borderTop: `1px solid ${pl.pop ? "rgba(255,255,255,0.2)" : V.border}`,
                }}>
                  <span style={{ fontSize: 24, fontWeight: 700, color: pl.pop ? "#C8E6C8" : V.sage }}>{pl.cr}</span>
                  <span style={{ fontSize: 13, opacity: 0.6 }}>credits/mo</span>
                </div>
                <div style={{
                  textAlign: "center" as const, padding: "12px 0",
                  background: pl.pop ? "rgba(255,255,255,0.2)" : V.sage,
                  color: V.white, borderRadius: 8, fontSize: 13, fontWeight: 600,
                }}>
                  Get Started
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: V.sage, color: V.white, padding: "80px 0",
        textAlign: "center" as const,
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 40px" }}>
          <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 40, lineHeight: 1.15, marginBottom: 16 }}>
            Your weekly reset starts here.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.8, marginBottom: 32 }}>
            Founding memberships are open. 20% off, locked for 12 months.
          </p>
          <span style={{
            display: "inline-block", padding: "14px 36px",
            background: V.white, color: V.sage, borderRadius: V.r,
            fontSize: 14, fontWeight: 600,
          }}>
            Become a Founding Member
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${V.border}`, padding: "32px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 12, color: V.textMuted }}>&copy; 2026 Bathpass</span>
          <Link href="/directions" style={{ fontSize: 12, color: V.sage, textDecoration: "none" }}>
            &larr; Back to all directions
          </Link>
        </div>
      </footer>
    </div>
  );
}
