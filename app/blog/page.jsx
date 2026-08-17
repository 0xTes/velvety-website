import Link from "next/link";
import { buildMetadata } from "../../lib/seo";
import { getBlogArticles } from "../../lib/substack";

// Keep the listing eligible for ISR even when the RSS feed is unavailable at build time.
export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Strategic notes on creator branding, email growth, SEO, and building a clearer digital presence with Velvety Brand Studio.",
  path: "/blog",
});

function formatDate(date) {
  const normalizedDate = /^\d{4}-\d{2}-\d{2}$/.test(date)
    ? date + "T00:00:00"
    : date;

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(normalizedDate));
}

function ArticleLink({ article, children, className }) {
  if (article.url) {
    return <a className={className} href={article.url}>{children}</a>;
  }

  return <Link className={className} href={"/blog/" + article.slug}>{children}</Link>;
}

export default async function BlogPage() {
  const articles = await getBlogArticles();

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

        {articles.length > 0 ? (
          <div className="article-grid">
            {articles.map((article) => (
              <article key={article.url || article.slug} className="article-card">
                <p className="article-category">{article.category}</p>
                <h2 className="serif">
                  <ArticleLink article={article}>{article.title}</ArticleLink>
                </h2>
                <p>{article.description}</p>
                <div className="article-card-footer">
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                  {article.readingTime && (
                    <>
                      <span aria-hidden="true"> · </span>
                      <span>{article.readingTime}</span>
                    </>
                  )}
                </div>
                <ArticleLink article={article} className="article-card-link">
                  Read article <span aria-hidden="true">→</span>
                </ArticleLink>
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
