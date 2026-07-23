import { CONTACT_CHANNELS } from "../lib/constants";

export default function LetsWorkTogether() {
  return (
    <section className="lets-work-together" aria-labelledby="contact-heading">
      <div className="container contact-grid">
        <div className="contact-intro">
          <div className="tag">Remote-First Collaboration</div>
          <h2 id="contact-heading" className="serif">
            Let&apos;s build what&apos;s next for your brand.
          </h2>
          <p>
            Velvety works remotely with independent creators through strategy
            calls, Zoom, email, and WhatsApp. Start with the channel that feels
            easiest, and we will shape a clear growth plan together.
          </p>
        </div>

        <address className="contact-channels">
          {CONTACT_CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              className="contact-channel"
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
            >
              <span className="contact-channel-label">{channel.label}</span>
              <span className="contact-channel-description">
                {channel.description}
              </span>
              <span className="contact-channel-action">
                {channel.action} &rarr;
              </span>
            </a>
          ))}
        </address>
      </div>
    </section>
  );
}
