import Link from "next/link";
import { buildMetadata } from "../../lib/seo";
import { WHATSAPP_URL } from "../../lib/constants";

export const metadata = buildMetadata({
  title: "Creator Growth for All Platforms — Patreon, AllAccessFans & More",
  description:
    "Velvety helps content creators on Patreon, AllAccessFans, Throne, and any subscription platform grow with SEO, email marketing, and brand strategy.",
  path: "/other-platforms-growth",
});

const PLATFORMS_SUPPORTED = [
  { name: "Patreon",        emoji: "🟣" },
  { name: "AllAccessFans",  emoji: "🟠" },
  { name: "Throne",         emoji: "👑" },
  { name: "Ko-fi",          emoji: "☕" },
  { name: "Gumroad",        emoji: "🟡" },
  { name: "Substack",       emoji: "📰" },
  { name: "JustFans",       emoji: "📰" },
];

const FEATURES = [
  { icon: "🔍", title: "Cross-Platform SEO", description: "We optimise for search regardless of which platform you're building on." },
  { icon: "📧", title: "Email Audience Ownership", description: "Platform-independent email list growth so you're never at the mercy of one service." },
  { icon: "🎨", title: "Platform-Agnostic Branding", description: "A consistent visual identity that works everywhere — not tied to one platform's template." },
  { icon: "🌐", title: "Centralised Resource Page", description: "One professional landing page linking to every platform you use, with email capture built in." },
];

export default function OtherPlatformsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="landing-hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="tag">All Platforms</div>
          <h1 className="serif">
            Grow on<br />
            <em style={{ color: "var(--gold)" }}>any creator platform</em>
          </h1>
          <p>
            Not just OnlyFans or Fansly. Whether you're on Patreon, Throne, AllAccessFans, or all of them,
            Velvety builds the brand and digital infrastructure to help you grow everywhere.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              ⭐ Book a Free Strategy Call
            </a>
            <Link href="/#services" className="btn btn-outline">See All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── SUPPORTED PLATFORMS ── */}
      <section className="landing-section" style={{ background: "var(--bg-section-alt)" }}>
        <div className="container">
          <div className="section-header">
            <div className="tag">We Support</div>
            <div className="divider" />
            <h2 className="serif">Platforms we work with</h2>
          </div>
          <div className="feature-grid">
            {PLATFORMS_SUPPORTED.map((p) => (
              <div key={p.name} className="feature-card" style={{ textAlign: "center" }}>
                <div className="icon">{p.emoji}</div>
                <h3>{p.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="landing-section">
        <div className="container">
          <div className="section-header">
            <div className="tag">What We Do</div>
            <div className="divider" />
            <h2 className="serif">Platform-agnostic growth strategies</h2>
            <p>We build the infrastructure that works regardless of which platforms rise or fall.</p>
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
          <h2 className="serif" style={{ marginBottom: 16 }}>Whatever platform you're on — we can help</h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto 32px" }}>
            Book a free call and tell us where you create. We'll build the strategy from there.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            ⭐ Claim Your Free Strategy Call
          </a>
        </div>
      </section>
    </>
  );
}
