import Link from "next/link";
import { buildMetadata } from "../../lib/seo";
import { WHATSAPP_URL } from "../../lib/constants";

export const metadata = buildMetadata({
  title: "Creator Branding — Visual Identity for Content Creators",
  description:
    "Velvety builds logos, brand kits, and visual identities for independent content creators that command premium pricing and fan loyalty.",
  path: "/creator-branding",
});

const FEATURES = [
  { icon: "✍️", title: "Logo Design", description: "A custom logo that works across platforms — profile photos, thumbnails, merchandise." },
  { icon: "🎨", title: "Colour Palette", description: "A signature colour system that makes every piece of content instantly recognisable." },
  { icon: "🖋️", title: "Brand Voice Guide", description: "Tone, language, and messaging guidelines so every caption sounds like you." },
  { icon: "📱", title: "Social Media Templates", description: "Pre-built Canva or Figma templates for posts, stories, and cover art." },
  { icon: "🌐", title: "Resource Page Design", description: "A branded link-in-bio page designed to match your identity perfectly." },
  { icon: "💎", title: "Premium Positioning", description: "Pricing, presentation, and packaging guidance to attract higher-paying subscribers." },
];

export default function CreatorBrandingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="landing-hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="tag">Creator Branding</div>
          <h1 className="serif">
            Stop blending in.<br />
            <em style={{ color: "var(--gold)" }}>Become the brand.</em>
          </h1>
          <p>
            The creators commanding the highest subscription prices aren't just talented — they have a
            recognisable brand. Velvety builds your complete visual identity so fans remember you,
            trust you, and pay premium.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              💎 Book a Free Brand Strategy Call
            </a>
            <Link href="/#services" className="btn btn-outline">See All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="landing-section">
        <div className="container">
          <div className="section-header">
            <div className="tag">What's Included</div>
            <div className="divider" />
            <h2 className="serif">Your complete creator brand kit</h2>
            <p>Everything you need to look professional, charge more, and build lasting fan loyalty.</p>
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

      {/* ── WHY BRANDING ── */}
      <section className="landing-section" style={{ background: "var(--bg-section-alt)" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="tag">Why It Matters</div>
          <div className="divider" />
          <h2 className="serif" style={{ marginBottom: 20 }}>Branding is not vanity — it's income</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: 16, lineHeight: 1.8 }}>
            Creators with a strong brand identity charge 2–3× more per subscription and have significantly
            lower churn. Fans don't just buy your content — they buy into your brand.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Without a clear brand, you're competing on price. With one, you compete on identity —
            and identity wins every time.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="landing-section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 className="serif" style={{ marginBottom: 16 }}>Ready to build your creator brand?</h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto 32px" }}>
            One free strategy call — we'll map out your brand direction and show you exactly what we'd build.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            💎 Claim Your Free Brand Call
          </a>
        </div>
      </section>
    </>
  );
}
