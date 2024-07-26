import NewsList from "@/components/news/news-list";
import {
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.filter;
  const selectedYear = newsYear?.[0];
  const slecetedMonth = newsYear?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !slecetedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && slecetedMonth) {
    news = getNewsForYearAndMonth(selectedYear, slecetedMonth);
    links = [];
  }

  let newsContent = <p>No news found for selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (slecetedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+slecetedMonth))
  ) {
    throw new Error("Invalid Date");
  }
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );

  // const news = getNewsForYear(newsYear);
  // return <NewsList news={news} />;
}
