import LetsWorkTogether from "../../components/LetsWorkTogether";
import Newsletter from "../../components/Newsletter";
import { FAQS } from "../../lib/constants";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Velvety Brand Studio's strategy, creator branding, email growth, and digital marketing services.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <section className="faq-page" aria-labelledby="faq-title">
        <div className="container">
          <header className="faq-page-header">
            <p className="tag">FAQ</p>
            <h1 id="faq-title" className="serif">Questions we get asked a lot.</h1>
            <p>
              Straightforward answers about how we work, what we build, and what
              independent creators can expect from a Velvety engagement.
            </p>
          </header>

          <div className="faq-grid">
            {FAQS.map((faq) => (
              <article key={faq.question} className="faq-item">
                <h2>{faq.question}</h2>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Newsletter id="newsletter" />
      <LetsWorkTogether />
    </>
  );
}
