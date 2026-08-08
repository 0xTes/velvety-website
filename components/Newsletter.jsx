"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { CONTACT_EMAIL, PLATFORMS } from "../lib/constants";

const BENEFITS = [
  "Email strategy notes",
  "Brand-building guidance",
  "SEO & visibility ideas",
  "Strategy-call availability",
];

export default function Newsletter({ id = "newsletter", showPlatformLinks = false }) {
  const inputId = useId();
  const noteId = useId();
  const statusId = useId();
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(
      "Newsletter sign-ups are not available yet. Email " + CONTACT_EMAIL + " to stay in touch."
    );
  };

  return (
    <section id={id} className="newsletter-section" aria-labelledby={id + "-heading"}>
      <div className="container">
        <div className="newsletter-inner">
          <p className="tag">Stay Connected</p>
          <h2 id={id + "-heading"} className="serif">Build a more direct audience.</h2>
          <p>
            Get thoughtful notes on brand strategy, email growth, and making your
            digital presence easier to choose.
          </p>

          <div className="email-form">
            <form onSubmit={handleSubmit}>
              <label className="visually-hidden" htmlFor={inputId}>Email address</label>
              <div className="email-row">
                <input
                  id={inputId}
                  name="email"
                  type="email"
                  className="email-input"
                  placeholder="your@email.com"
                  autoComplete="email"
                  required
                  aria-describedby={status ? noteId + " " + statusId : noteId}
                />
                <button type="submit" className="btn btn-gold">Subscribe</button>
              </div>
            </form>
            <p id={noteId} className="email-form-note">
              No spam. No sharing. Unsubscribe anytime. View our{" "}
              <Link href="/legal#privacy">Privacy Policy</Link>.
            </p>
            {status && (
              <p id={statusId} className="newsletter-status" role="status">{status}</p>
            )}
          </div>

          <ul className="perks" aria-label="Newsletter topics">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="perk"><span className="perk-dot" />{benefit}</li>
            ))}
          </ul>

          {showPlatformLinks && (
            <div className="quick-links-box">
              <p className="quick-links-label">Quick Links to Our Platforms</p>
              <div className="quick-links-row">
                {PLATFORMS.map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ fontSize: "0.78rem", padding: "10px 20px" }}
                  >
                    <Image src={platform.icon} alt="" aria-hidden="true" width={14} height={14} />
                    {platform.label} ↗
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
