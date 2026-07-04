import Link from "next/link";
import GrowthButtons from "./GrowthButtons";
import { WHATSAPP_URL } from "../lib/constants";

const AVATARS = [
  { initial: "J", bg: "var(--rose)" },
  { initial: "M", bg: "var(--rose-dark)" },
  { initial: "C", bg: "#A07060" },
  { initial: "R", bg: "var(--gold)", color: "var(--charcoal)" },
];

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="container">
        <GrowthButtons />

        <div className="hero-layout">
          {/* ── Left: Copy ── */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line" />
              <span>Digital Marketing &amp; Brand Studio</span>
            </div>

            <h1 className="serif">
              Your brand.<br />
              Your audience.<br />
              <em>Your income.</em>
            </h1>

            <p className="hero-sub">
              Velvety Brand Studio helps independent creators build a professional
              online presence, grow an owned email audience, and convert subscribers
              into loyal paying fans — all on your terms.
            </p>

            <div className="hero-actions">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Claim Your Free Strategy Call
              </a>
              <Link href="/#services" className="btn btn-outline">
                See What We Build →
              </Link>
            </div>

            {/* Trust bar */}
            <div className="hero-trust">
              <div className="hero-avatars" aria-hidden="true">
                {AVATARS.map((a) => (
                  <div
                    key={a.initial}
                    className="avatar show-initial"
                    data-initials={a.initial}
                    style={{ background: a.bg, color: a.color || "white" }}
                  />
                ))}
              </div>
              <div className="hero-trust-text">
                <strong>70+ creators</strong> have visited and requested
                <br />a Velvety resource page this year
              </div>
            </div>
          </div>

          {/* ── Right: GIF panel ── */}
          <div className="hero-gif-panel">
            <div className="gif-frame">
              {/*
                ══════════════════════════════════════
                SWAP YOUR GIF HERE
                Set src to any image/GIF URL.
                Fallback text shown when no src given.
                ══════════════════════════════════════
              */}
              <img
                src="/assets/banner.gif"
                alt="Velvety Brand Studio showcase"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="gif-fallback" style={{ display: "none" }}>
                <span className="serif" style={{ color: "var(--gold)", fontSize: "1.1rem", fontStyle: "italic" }}>
                  Place your GIF here
                </span>
                <span style={{ fontSize: "0.72rem", color: "rgba(249,248,246,0.4)", marginTop: 6 }}>
                  400 × 500px recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
