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
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
      {news.map((article) => (
        <li key={article.id} className="mb-8">
          <Link href={`/works/${article.id}`}>
            {article.thumbnail ? (
              <Image
                src={article.thumbnail.url}
                alt=""
                width={400}
                height={300} // 固定高さ
                className="mb-4 h-56 w-full object-cover transition-opacity duration-300 hover:opacity-80"
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
              <dt>title:{article.title}</dt>
              <dd>
                <Category category={article.category} />
                <br />
                <Date date={article.publishedAt ?? article.createdAt} />
                <p>
                  <button
                    role="link"
                    className="text-sm relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-neutral-800 after:transition-transform after:duration-150 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0"
                  >
                    詳しくはこちら
                  </button>
                </p>
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
