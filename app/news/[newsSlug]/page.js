import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function PageDetails({ params }) {
  const slugName = params.newsSlug;
  const newsItems = DUMMY_NEWS.find((newsItem) => newsItem.slug === slugName);

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
