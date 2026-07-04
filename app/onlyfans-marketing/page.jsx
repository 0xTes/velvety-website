import Link from "next/link";
import { buildMetadata } from "../../lib/seo";
import { WHATSAPP_URL } from "../../lib/constants";

export const metadata = buildMetadata({
  title: "OnlyFans Marketing & Growth Agency",
  description:
    "Grow your OnlyFans with Velvety's proven SEO, email marketing, and brand strategy built exclusively for independent content creators.",
  path: "/onlyfans-growth",
});

const FEATURES = [
  { icon: "🔍", title: "OnlyFans SEO", description: "Rank in search results so the right fans find you before they find anyone else." },
  { icon: "📧", title: "Email Funnel Setup", description: "Build an email list you own — so a platform ban can never kill your income." },
  { icon: "🎨", title: "Creator Branding", description: "A visual identity that sets you apart and commands premium pricing." },
  { icon: "📈", title: "Subscriber Growth", description: "Proven strategies to convert profile visitors into paying, loyal fans." },
  { icon: "🌐", title: "Resource Page", description: "One link in bio that does the heavy lifting — collects emails and links everywhere." },
  { icon: "📊", title: "Monthly Analytics", description: "Know exactly what's working. Clear reports, no jargon, actionable next steps." },
];

export default function OnlyFansGrowthPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="landing-hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="tag">OnlyFans Growth</div>
          <h1 className="serif">
            Grow your OnlyFans with<br />
            <em style={{ color: "var(--gold)" }}>SEO & email marketing</em>
          </h1>
          <p>
            Stop relying on the algorithm. Velvety helps you build a professional online presence,
            rank on Google, and own an email audience that keeps paying — even if OnlyFans changes overnight.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              📬 Book a Free Strategy Call
            </a>
            <Link href="/#services" className="btn btn-outline">See All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="landing-section">
        <div className="container">
          <div className="section-header">
            <div className="tag">What You Get</div>
            <div className="divider" />
            <h2 className="serif">Everything OnlyFans creators need to grow</h2>
            <p>A complete digital growth system — not just a one-off page build.</p>
          </div>
          <div className="feature-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="landing-section" style={{ background: "var(--bg-section-alt)", textAlign: "center" }}>
        <div className="container">
          <h2 className="serif" style={{ marginBottom: 16 }}>Ready to grow your OnlyFans?</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            Book a free 30-minute strategy call. No commitment. Just a clear plan for your growth.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            📬 Claim Your Free Strategy Call
          </a>
        </div>
      </section>
    </>
  );
}
