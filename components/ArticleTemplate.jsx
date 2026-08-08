import Link from "next/link";
import { STRATEGY_CALL_URL } from "../lib/constants";

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date + "T00:00:00"));
}

function ArticleBlock({ block }) {
  if (block.type === "heading") return <h2>{block.text}</h2>;

  if (block.type === "list") {
    return (
      <ul>
        {block.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    );
  }

  if (block.type === "quote") return <blockquote>{block.text}</blockquote>;

  return <p>{block.text}</p>;
}

export default function ArticleTemplate({ article }) {
  return (
    <article className="article-page">
      <div className="container">
        <header className="article-header">
          <Link href="/blog" className="article-back">← All articles</Link>
          <p className="tag">{article.category}</p>
          <h1 className="serif">{article.title}</h1>
          <p className="article-description">{article.description}</p>
          <p className="article-meta">
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span aria-hidden="true"> · </span>
            {article.readingTime}
          </p>
        </header>

        <div className="article-copy">
          {article.content.map((block, index) => (
            <ArticleBlock key={block.type + "-" + index} block={block} />
          ))}
        </div>

        {article.checklist && (
          <section className="article-insight" aria-labelledby="article-insight-title">
            <p className="tag">Practical Insight</p>
            <h2 id="article-insight-title" className="serif">{article.checklist.title}</h2>
            <p>{article.checklist.introduction}</p>
            <ul>
              {article.checklist.items.map((item) => (
                <li key={item}><span aria-hidden="true">✓</span>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {article.cta && (
          <section className="article-cta" aria-labelledby="article-cta-title">
            <h2 id="article-cta-title" className="serif">{article.cta.title}</h2>
            <p>{article.cta.text}</p>
            <a href={STRATEGY_CALL_URL} className="btn btn-gold">{article.cta.label}</a>
          </section>
        )}
      </div>
    </article>
  );
}
