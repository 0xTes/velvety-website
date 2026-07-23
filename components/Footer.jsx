"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_COMPANY_LINKS,
  WHATSAPP_URL,
  SERVICES,
  PLATFORMS,
  SOCIAL_LINKS,
} from "../lib/constants";
import { useScrollPosition } from "../hooks/useScrollPosition";

function FooterLinks({ footerRef }) {
  return (
    <footer ref={footerRef}>
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
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Velvety Brand Studio. All rights
            reserved. Services for content marketing only. We comply with
            FOSTA/SESTA and EU DSA.
          </p>

          <div className="footer-social">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target={social.id === "email" ? undefined : "_blank"}
                rel={
                  social.id === "email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="social-link"
                aria-label={social.ariaLabel}
              >
                <Image
                  src={social.icon}
                  alt=""
                  aria-hidden="true"
                  className="social-link-icon"
                  width={16}
                  height={16}
                />
              </a>
            ))}
          </div>
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
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-gold"
        style={{
          boxShadow: "0 8px 32px rgba(212,175,55,0.35)",
        }}
      >
        📬 Get Your Free Strategy Call
      </a>
    </div>
  );
}

export default function Footer() {
  const scrollY = useScrollPosition();

  const footerRef = useRef(null);

  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <FooterLinks footerRef={footerRef} />
      <FloatingCta
        scrollY={scrollY}
        footerVisible={footerVisible}
      />
    </>
  );
}
