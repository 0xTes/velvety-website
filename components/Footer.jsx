"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_COMPANY_LINKS,
  STRATEGY_CALL_URL,
  SERVICES,
  PLATFORMS,
} from "../lib/constants";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useTheme } from "../hooks/useTheme";

function FooterLinks({ footerRef, theme }) {
  return (
    <footer ref={footerRef}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="brand-logo footer-brand-logo" aria-label="Velvety home">
              <Image
                src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
                alt="Velvety Digital Marketing & Brand Studio"
                className="brand-logo-image"
                width={1024}
                height={1024}
              />
            </Link>

            <p>
              Digital marketing, brand strategy, SEO, and email growth for independent
              creators. Built with discretion and delivered with care.
            </p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>

            <ul>
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link href="/#services">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div className="footer-col">
            <h4>Platforms</h4>

            <ul>
              {PLATFORMS.map((platform) => (
                <li key={platform.label}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {platform.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>

            <ul>
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Velvety Brand Studio. All rights
            reserved. Services for content marketing only. We comply with
            FOSTA/SESTA and EU DSA.
          </p>

        </div>
      </div>
    </footer>
  );
}

function FloatingCta({ scrollY, footerVisible }) {
  if (footerVisible) return null;

  return (
    <div className={`floating-cta${scrollY > 400 ? " visible" : ""}`}>
      <a
        href={STRATEGY_CALL_URL}
        className="btn btn-gold"
        style={{
          boxShadow: "0 8px 32px rgba(212,175,55,0.35)",
        }}
      >
        📬 Request a Free Strategy Call
      </a>
    </div>
  );
}

export default function Footer() {
  const scrollY = useScrollPosition();
  const { theme } = useTheme();

  const footerRef = useRef(null);

  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <FooterLinks footerRef={footerRef} theme={theme} />
      <FloatingCta
        scrollY={scrollY}
        footerVisible={footerVisible}
      />
    </>
  );
}
