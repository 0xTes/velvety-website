import { ADDRESS, HOURS, CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS, WHATSAPP_URL } from "../lib/constants";

export default function VisitUs() {
  return (
    <section className="visit-us">
      <div className="visit-left">
        

        {/* Address */}
        <div className="visit-block">
          <h3>Our address</h3>
          <p>{ADDRESS.street}</p>
          <p>{ADDRESS.city}, {ADDRESS.country}</p>
          <a href={ADDRESS.directionsUrl} target="_blank" rel="noopener noreferrer">
            Get directions
          </a>
        </div>

        {/* Hours */}
        <div className="visit-block">
          <h3>Open hours</h3>
          {HOURS.map((h) => (
            <p key={h.days}>{h.days} · {h.hours}</p>
          ))}
        </div>

        {/* Contact */}
        <div className="visit-block">
          <h3>Contact info</h3>
          <p>{CONTACT_PHONE} — WhatsApp</p>
        </div>

        {/* Social */}
        <div className="social-links">
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp" />
          </a>
          <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i className="fa-brands fa-tiktok" />
          </a>
        </div>

        <a href={`mailto:${CONTACT_EMAIL}`} className="email-btn">
          Email Us
        </a>
      </div>

      {/* Map */}
      <div className="visit-right">
        <iframe
          src={ADDRESS.mapsUrl}
          title="Velvety office location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
