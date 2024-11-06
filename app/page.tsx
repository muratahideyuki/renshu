import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";

import Link from "next/link";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  const text = "PORTFOLIO";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 ">
      {/* メインコンテンツ */}
      <div className="">
        <h1 className=" text-[min(13vw,90px)] text-gray-800 mb-4">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="inline-block opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <p className="text-gray-600 mb-20">
          このサイトはNEXT.jsと、CSSフレームワークのTailwindで制作し、
          <br />
          コンテンツ更新はヘッドレスCMSのmicroCMSを採用、CLOUDFLAREでデプロイし公開しております。
        </p>

        <NewsList news={data.contents} />
      </div>

      {/* フッター */}
      <footer className="w-full max-w-4xl mt-16 text-center text-gray-500 text-sm">
        © 2024 All rights reserved.
      </footer>
    </main>
  );
}
