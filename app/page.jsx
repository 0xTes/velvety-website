"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Hero from "../components/Hero";
import VisitUs from "../components/VisitUs";
import {
  PLATFORMS,
  SERVICES,
  STEPS,
  TESTIMONIALS,
  FAQS,
  WHATSAPP_URL,
} from "../lib/constants";

// ── Intersection Observer fade-in ──────────────────────────────────────────
function useAnimateIn() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".animate-in");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Newsletter subscribe ───────────────────────────────────────────────────
function handleSubscribe(e) {
  e.preventDefault();
  const input = document.getElementById("emailInput");
  const email = input.value.trim();
  if (!email || !email.includes("@")) {
    input.style.borderColor = "#C79A9A";
    input.placeholder = "Please enter a valid email";
    setTimeout(() => { input.style.borderColor = ""; input.placeholder = "your@email.com"; }, 2000);
    return;
  }
  input.value = "";
  input.placeholder = "✓ You're in! Check your inbox.";
  input.style.borderColor = "var(--gold)";
  setTimeout(() => { input.placeholder = "your@email.com"; input.style.borderColor = ""; }, 4000);
}

// ── Platform SVG icons ─────────────────────────────────────────────────────
const PLATFORM_ICONS = {
  OnlyFans:      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#00AFF0"/><text x="5" y="16" fontSize="10" fill="white" fontWeight="bold">OF</text></svg>,
  Fansly:        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="6" fill="#1D9BF0"/><text x="5" y="16" fontSize="9" fill="white" fontWeight="bold">Fy</text></svg>,
  AllAccessFans: <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="6" fill="#9B59B6"/><text x="4" y="16" fontSize="9" fill="white" fontWeight="bold">AA</text></svg>,
  Throne:        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="6" fill="#1E1E1E"/><text x="4" y="16" fontSize="9" fill="#D4AF37" fontWeight="bold">Th</text></svg>,
};

// ─────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const pageRef = useAnimateIn();

  return (
    <div ref={pageRef}>
      {/* ── HERO ── */}
      <Hero />

      {/* ── PLATFORMS ── */}
      <section id="platforms">
        <div className="container">
          <div className="platform-strip">
            <span className="platform-label">We support creators on</span>
            {PLATFORMS.map((p) => (
              <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className="platform-pill">
                {PLATFORM_ICONS[p.label]}
                {p.label}
              </a>
            ))}
            <span className="platform-label" style={{ color: "#C79A9A", marginLeft: 8 }}>
              + your email list you <em>own</em>
            </span>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            {/* Stat card */}
            <div className="about-visual">
              <div className="about-card animate-in">
                <div className="about-card-stat">4.7×</div>
                <div className="about-card-label">Average subscriber growth in 90 days</div>
                <ul className="about-card-list">
                  {[
                    "Branded resource page — yours to own",
                    "Email list that survives platform bans",
                    "SEO strategy tailored for discoverability",
                    "Clear links to OF, Fansly, Throne & more",
                    "Newsletter funnel that converts on autopilot",
                    "Fully managed — we handle the tech",
                  ].map((item) => (
                    <li key={item}><span className="check">✓</span> {item}</li>
                  ))}
                </ul>
                <div className="about-badge">FOSTA/SESTA and EU DSA Compliant</div>
              </div>
            </div>

            {/* Text */}
            <div className="about-text animate-in">
              <div className="tag">Who We Are</div>
              <h2 className="serif">
                The only agency built around <em style={{ fontStyle: "italic", color: "var(--rose)" }}>your</em> kind of business
              </h2>
              <h3>Grow Your OnlyFans Audience with SEO &amp; Email Marketing</h3>
              <div className="divider" />
              <p>Most digital marketing agencies don't understand your world — or they're too nervous to work in it. We're not them.</p>
              <p>Velvety Brand Studio was founded specifically to help independent creators build professional, search-visible online presences that convert strangers into paying fans.</p>
              <p>We speak the language of your industry: platform strategies, personal branding, discoverability, and audience ownership — all while staying fully within legal and platform guidelines.</p>

              <div className="about-pillars">
                {[
                  { icon: "🎯", title: "Brand Strategy", desc: "Identity, positioning & voice designed for you" },
                  { icon: "🔍", title: "SEO & Discovery", desc: "Be found by exactly the right people" },
                  { icon: "📧", title: "Email Ownership", desc: "Your list. Your data. Platform-proof income" },
                  { icon: "⚙️", title: "Done-For-You", desc: "We build & maintain so you focus on creating" },
                ].map((p) => (
                  <div key={p.title} className="pillar">
                    <div className="pillar-icon">{p.icon}</div>
                    <div className="pillar-title">{p.title}</div>
                    <div className="pillar-desc">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services">
        <div className="container">
          <div className="section-header">
            <div className="tag">What We Offer</div>
            <div className="divider" />
            <h2 className="serif">Everything you need to grow — in one place</h2>
            <p>From your first branded page to a fully-automated email funnel, we handle the digital heavy lifting so you can stay focused on creating.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className={`service-card animate-in${s.featured ? " featured" : ""}`}>
                <div className="service-icon">{s.icon}</div>
                <h3 className="serif">{s.title}</h3>
                <p>{s.description}</p>
                <ul className="service-detail-list">
                  {s.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how">
        <div className="container">
          <div className="section-header">
            <div className="tag">How It Works</div>
            <div className="divider" />
            <h2 className="serif">From first call to full growth — in 4 steps</h2>
          </div>
          <div className="steps-grid">
            {STEPS.map((s) => (
              <div key={s.number} className="step animate-in">
                <div className="step-number">{s.number}</div>
                <div className="step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials">
        <div className="container">
          <div className="section-header">
            <div className="tag">Results</div>
            <div className="divider" />
            <h2 className="serif">Creators who grew with Velvety</h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="testimonial-card animate-in">
                <div className="star-row">{"⭐".repeat(t.stars)}</div>
                <p>"{t.quote}"</p>
                <div className="author-row">
                  <div className="author-avatar" style={{ background: t.color }}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-handle">{t.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq">
        <div className="container">
          <div className="section-header">
            <div className="tag">FAQ</div>
            <div className="divider" />
            <h2 className="serif">Questions we get asked a lot</h2>
          </div>
          <div className="faq-grid">
            {FAQS.map((f) => (
              <div key={f.question} className="faq-item animate-in">
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section id="newsletter">
        <div className="container">
          <div className="newsletter-inner">
            <div className="tag">Join the Community</div>
            <h2 className="serif">Be the face of our social media platforms</h2>
            <p>Get more exposure and drive more visitors to your OnlyFans, Fansly, AllAccess and Throne accounts.</p>

            <div className="email-form">
              <form onSubmit={handleSubscribe} noValidate>
                <div className="email-row">
                  <input
                    type="email"
                    className="email-input"
                    placeholder="your@email.com"
                    id="emailInput"
                    aria-label="Email address"
                  />
                  <button type="submit" className="btn btn-gold">Subscribe</button>
                </div>
              </form>
              <p className="email-form-note">
                No spam. No sharing. Unsubscribe anytime. View our <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
            </div>

            <div className="perks">
              {["Weekly tips","Early access","Exclusive discounts","Free strategy call"].map((p) => (
                <div key={p} className="perk"><div className="perk-dot" />{p}</div>
              ))}
            </div>

            <div className="quick-links-box">
              <p className="quick-links-label">Quick Links to Our Platforms</p>
              <div className="quick-links-row">
                {PLATFORMS.map((p) => (
                  <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: "0.78rem", padding: "10px 20px" }}>
                    {PLATFORM_ICONS[p.label]} {p.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISIT US ── */}
      <VisitUs />
    </div>
  );
}