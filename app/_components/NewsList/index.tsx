import Image from "next/image";
import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";
import Link from "next/link";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がない</p>;
  }
  return (
    <ul className="grid grid-cols-1 gap-12 md:grid-cols-2 mb-8">
      {news.map((article) => (
        <li key={article.id} className="mb-8">
          {article.thumbnail ? (
            <Image
              src={article.thumbnail.url}
              alt=""
              width={400}
              height={400} // 固定高さ
              className="mb-4 h-auto w-full object-cover transition-opacity duration-300 "
            />
          ) : (
            <Image
              src="/no-image.jpg"
              alt="no"
              width={400}
              height={300} // 固定高さ
              className="mb-4 h-56 w-full object-cover transition-opacity duration-300 hover:opacity-80"
            />
          )}
          <dl>
            <dt>{article.title}</dt>
            <dd
              className="text-gray-600 mt-2"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </dl>
        </li>
      ))}
    </ul>
  );
}
