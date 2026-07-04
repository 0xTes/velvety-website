"use client";

import Link from "next/link";
import { WHATSAPP_URL } from "../lib/constants";
import { useScrollPosition } from "../hooks/useScrollPosition";

function FooterLinks() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="nav-logo" style={{ fontSize: "1.5rem" }}>
              Velvety<span>.</span>
            </Link>
            <p>
              Digital marketing, branding, SEO, and email growth for independent
              content creators. Built with discretion. Delivered with excellence.
            </p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {["Resource Page Build","Email List Strategy","SEO & Discovery","Brand Identity","Growth Management"].map((s) => (
                <li key={s}><Link href="/#services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div className="footer-col">
            <h4>Platforms</h4>
            <ul>
              {[
                { label: "OnlyFans",      href: "https://onlyfans.com" },
                { label: "Fansly",        href: "https://fansly.com" },
                { label: "AllAccessFans", href: "https://allaccessfans.co" },
                { label: "Throne",        href: "https://throne.com" },
              ].map((p) => (
                <li key={p.label}><a href={p.href} target="_blank" rel="noopener noreferrer">{p.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/#about">About Velvety</Link></li>
              <li><Link href="/#how">How It Works</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/#newsletter">Get Started</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Velvety Brand Studio. All rights reserved.
            Services for content marketing only. We comply with FOSTA/SESTA and EU DSA.
          </p>
          <div className="footer-social">
            <a href="https://twitter.com/YOURHANDLE" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X / Twitter">𝕏</a>
            <a href="https://linkedin.com/company/YOURPAGE" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">in</a>
            <a href="mailto:hello@velvety.com" className="social-link" aria-label="Email">✉</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Floating CTA lives here so it shares the same client component boundary
function FloatingCta({ scrollY }) {
  return (
    <div className={`floating-cta${scrollY > 400 ? " visible" : ""}`}>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-gold"
        style={{ boxShadow: "0 8px 32px rgba(212,175,55,0.35)" }}
      >
        📬 Get Your Free Strategy Call
      </a>
    </div>
  );
}

export default function Footer() {
  const scrollY = useScrollPosition();
  return (
    <>
      <FooterLinks />
      <FloatingCta scrollY={scrollY} />
    </>
  );
}
