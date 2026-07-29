"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LEGAL_NAV_ITEMS,
  SITE_NAME,
} from "../lib/constants";

export default function LegalPage() {
  const [activeId, setActiveId] = useState("terms");

  useEffect(() => {
    const syncHash = () => {
      const target = window.location.hash.replace("#", "");
      if (LEGAL_NAV_ITEMS.some((item) => item.id === target)) setActiveId(target);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);
        if (activeEntry) setActiveId(activeEntry.target.id);
      },
      { rootMargin: "-18% 0px -64% 0px", threshold: 0 }
    );

    LEGAL_NAV_ITEMS.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("hashchange", syncHash);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="legal-page" aria-labelledby="legal-page-title">
      <div className="container legal-layout">
        <aside className="legal-sidebar" aria-label="Legal page navigation">
          <p className="tag">Legal</p>
          <nav className="legal-nav" aria-label="Legal sections">
            {LEGAL_NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="legal-content">
          <header className="legal-header">
            <p className="tag">Legal</p>
            <h1 id="legal-page-title" className="serif">Terms, privacy, and site information</h1>
            <p>
              These terms explain how {SITE_NAME} handles website use, privacy, cookies, and contact
              requests. They do not replace the written agreement for a client engagement.
            </p>
            <p className="legal-updated">Last updated: July 28, 2026</p>
          </header>

          <section id="terms" className="legal-section" aria-labelledby="terms-title">
            <h2 id="terms-title">Terms &amp; Conditions</h2>
            <p>
              These terms govern access to this website and any services agreed in a written proposal,
              statement of work, or service agreement with {SITE_NAME}. By using the website or engaging
              our services, you agree to these terms to the extent permitted by applicable law.
            </p>
            <h3>Services and project scope</h3>
            <p>
              The specific deliverables, timetable, fees, approval process, and responsibilities for a
              project will be documented in the applicable agreement. Any scope that is not expressly
              included is excluded until both parties agree to a written change.
            </p>
            <h3>Client responsibilities</h3>
            <p>
              Clients are responsible for providing accurate, lawful source materials, timely feedback,
              and any permissions required to use supplied content. Clients remain responsible for their
              own platforms, accounts, and legal obligations.
            </p>
            <h3>Intellectual property and confidentiality</h3>
            <p>
              Ownership, licences, and confidentiality obligations must be confirmed in the project
              agreement. Unless otherwise agreed in writing, pre-existing tools, methods, and templates
              remain the property of their original owner.
            </p>
          </section>

          <section id="privacy" className="legal-section" aria-labelledby="privacy-title">
            <h2 id="privacy-title">Privacy Policy</h2>
            <p>
              {SITE_NAME} collects only the information needed to respond to enquiries, deliver
              services, maintain client relationships, and improve the website.
            </p>
            <h3>Information we may receive</h3>
            <p>
              Information may include contact details, messages submitted through the website, and
              information clients voluntarily provide while discussing or receiving services. Do not send
              sensitive personal information through website forms unless it is necessary and requested.
            </p>
            <h3>How information is used</h3>
            <p>
              Information may be used to respond to requests, provide agreed services, communicate about
              relevant updates, protect the website, and comply with legal obligations. We do not sell
              personal information.
            </p>
            <h3>Retention and rights</h3>
            <p>
              We retain information only for as long as needed for the purpose for which it was collected
              or to meet legal obligations. Users may contact us to request access, correction, or
              deletion where applicable law provides that right.
            </p>
          </section>

          <section id="cookies" className="legal-section" aria-labelledby="cookies-title">
            <h2 id="cookies-title">Cookies</h2>
            <p>
              Cookies and similar technologies should be used only where they are necessary for the
              website to operate or where a visitor has provided any required consent. This website uses
              local storage only to remember a visitor's colour-theme preference.
            </p>
            <h3>Managing cookies</h3>
            <p>
              Visitors can generally control cookies through their browser settings. If analytics,
              advertising, embedded media, or other optional technologies are added, we will identify
              them here, explain their purpose, and provide any required consent choices.
            </p>
          </section>

          <section id="contact" className="legal-section" aria-labelledby="contact-title">
            <h2 id="contact-title">Contact</h2>
            <p>
              For questions about these terms or privacy requests, contact {SITE_NAME} using
              the details below. We will respond through the appropriate channel.
            </p>
            <address className="legal-contact-details">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <a href="tel:+19852887616">{CONTACT_PHONE}</a>
            </address>
            <p>
              Need to return to the main site? <Link href="/">Visit the Velvety homepage</Link>.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
