import Link from "next/link";
import { ARTICLES } from "../../lib/articles";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Strategic notes on creator branding, email growth, SEO, and building a clearer digital presence with Velvety Brand Studio.",
  path: "/blog",
});

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date + "T00:00:00"));
}

export default function BlogPage() {
  return (
    <section className="blog-page" aria-labelledby="blog-title">
      <div className="container">
        <header className="blog-header">
          <p className="tag">Velvety Journal</p>
          <h1 id="blog-title" className="serif">Clearer thinking for a stronger creator brand.</h1>
          <p>
            Practical notes on brand strategy, owned audiences, and the digital
            foundations that help independent creators make a confident impression.
          </p>
        </header>

        {ARTICLES.length > 0 ? (
          <div className="article-grid">
            {ARTICLES.map((article) => (
              <article key={article.slug} className="article-card">
                <p className="article-category">{article.category}</p>
                <h2 className="serif">
                  <Link href={"/blog/" + article.slug}>{article.title}</Link>
                </h2>
                <p>{article.description}</p>
                <div className="article-card-footer">
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                  <span aria-hidden="true"> · </span>
                  <span>{article.readingTime}</span>
                </div>
                <Link className="article-card-link" href={"/blog/" + article.slug}>
                  Read article <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="blog-empty">New editorial notes are on their way. Please check back soon.</p>
        )}
      </div>
    </section>
  );
}
