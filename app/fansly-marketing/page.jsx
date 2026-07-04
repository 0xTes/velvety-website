import Link from "next/link";
import { buildMetadata } from "../../lib/seo";
import { WHATSAPP_URL } from "../../lib/constants";

export const metadata = buildMetadata({
  title: "Fansly Marketing & Growth Agency",
  description:
    "Grow your Fansly with SEO, email marketing, and creator branding strategies built for independent content creators by Velvety Brand Studio.",
  path: "/fansly-growth",
});

const FEATURES = [
  { icon: "🚀", title: "Fansly SEO", description: "Get your Fansly profile found on Google before competitors do." },
  { icon: "📧", title: "Email Capture", description: "Funnel Fansly visitors into an email list you own — forever." },
  { icon: "🎨", title: "Brand Identity", description: "Stand out with a visual identity built for your niche and audience." },
  { icon: "🌐", title: "Resource Page", description: "A branded landing page that links to Fansly, your email opt-in, and every platform you're on." },
  { icon: "📊", title: "Growth Analytics", description: "Monthly reports showing what's converting and what needs tweaking." },
  { icon: "⚙️", title: "Done-For-You", description: "We handle all the technical setup so you stay focused on content." },
];

export default function FanslyGrowthPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="landing-hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="tag">Fansly Growth</div>
          <h1 className="serif">
            Grow your Fansly with<br />
            <em style={{ color: "var(--gold)" }}>professional digital marketing</em>
          </h1>
          <p>
            Fansly is growing fast — but so is the competition. Velvety helps you rank in search,
            build an owned audience, and turn casual visitors into consistent paying subscribers.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              🚀 Book a Free Strategy Call
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
            <h2 className="serif">A full growth system for Fansly creators</h2>
            <p>From first click to loyal subscriber — we handle the full funnel.</p>
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
          <h2 className="serif" style={{ marginBottom: 16 }}>Ready to scale on Fansly?</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            One free call. A complete growth plan. No pressure.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            🚀 Claim Your Free Strategy Call
          </a>
        </div>
      </section>
    </>
  );
}
