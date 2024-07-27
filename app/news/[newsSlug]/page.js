import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PageDetails({ params }) {
  const slugName = params.newsSlug;
  const newsItems = await getNewsItem(slugName);

  if (!newsItems) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItems.slug}/image`}>
          <img src={`/images/news/${newsItems.image}`} alt={newsItems.title} />
        </Link>
        <h1>{newsItems.title}</h1>
        <time dateTime={newsItems.date}> {newsItems.date} </time>
      </header>
      <p>{newsItems.content}</p>
    </article>
  );
}
