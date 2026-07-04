"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { NAV_LINKS, WHATSAPP_URL } from "../lib/constants";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  const openMobile = () => {
    setMobileOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <nav className={`velvety-nav${scrollY > 40 ? " scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Brand */}
          <div className="nav-brand">
            <Link href="/" className="nav-logo">
              Velvety<span>.</span>
            </Link>
            <div className="nav-tagline">Digital Marketing &amp; Brand Studio</div>
          </div>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
            >
              <span className="theme-icon theme-icon-dark">🌙</span>
              <span className="theme-icon theme-icon-light">☀️</span>
            </button>
            <Link href="/#newsletter" className="btn btn-gold nav-cta">
              Get Started
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={openMobile}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="mobile-nav open" role="dialog" aria-modal="true">
          <button
            className="mobile-nav-close"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            ✕
          </button>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} onClick={closeMobile}>
              {link.label}
            </Link>
          ))}
          <Link href="/#newsletter" className="btn btn-gold" onClick={closeMobile}>
            Get Started
          </Link>
        </div>
      )}
    </>
  );
}
