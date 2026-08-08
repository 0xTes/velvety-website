"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "../hooks/useTheme";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { NAV_LINKS } from "../lib/constants";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

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
      <nav className={`velvety-nav${scrollY > 40 ? " scrolled" : ""}`} aria-label="Primary navigation">
        <div className="nav-inner">
          <div className="nav-brand">
            <Link href="/" className="brand-logo nav-brand-logo" aria-label="Velvety home">
              <Image
                src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
                alt="Velvety Digital Marketing & Brand Studio"
                className="brand-logo-image"
                width={1024}
                height={1024}
                priority
              />
            </Link>
          </div>

          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} aria-current={link.href === pathname ? "page" : undefined}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-pressed={theme === "light"}
            >
              <span className={`theme-icon theme-icon-dark${theme === "dark" ? " is-visible" : ""}`} aria-hidden="true">🌙</span>
              <span className={`theme-icon theme-icon-light${theme === "light" ? " is-visible" : ""}`} aria-hidden="true">☀️</span>
            </button>
            <Link href="/#newsletter" className="btn btn-gold nav-cta">
              Get Started
            </Link>
          </div>

          <button
            className="hamburger"
            onClick={openMobile}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-navigation" className="mobile-nav open" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button
            className="mobile-nav-close"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            ×
          </button>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobile}
              aria-current={link.href === pathname ? "page" : undefined}
            >
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
