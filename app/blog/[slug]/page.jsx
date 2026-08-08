import { notFound } from "next/navigation";
import ArticleTemplate from "../../../components/ArticleTemplate";
import { ARTICLES, findArticle } from "../../../lib/articles";
import { buildMetadata } from "../../../lib/seo";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = findArticle(params.slug);

  if (!article) {
    return buildMetadata({
      title: "Article not found",
      description: "The requested Velvety article could not be found.",
      path: "/blog/" + params.slug,
    });
  }

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: "/blog/" + article.slug,
    type: "article",
    publishedTime: article.publishedAt,
  });
}

export default function BlogArticlePage({ params }) {
  const article = findArticle(params.slug);

  if (!article) notFound();

  return <ArticleTemplate article={article} />;
}
