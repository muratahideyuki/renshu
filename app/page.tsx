import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";

import Link from "next/link";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* ナビゲーションバー */}
      <nav className="w-full max-w-4xl flex justify-between items-center bg-white p-4 shadow-md mb-8 rounded-lg">
        <a href="#" className="text-lg font-semibold text-blue-600">
          MyWebsite
        </a>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>

      {/* メインコンテンツ */}
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to My Simple Website
        </h1>
        <p className="text-gray-600 mb-6">
          This is a minimal example built with Next.js and Tailwind CSS.
          Customize it to make it your own!
        </p>

        <NewsList news={data.contents} />

        <div className="mt-8">
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* フッター */}
      <footer className="w-full max-w-4xl mt-16 text-center text-gray-500 text-sm">
        © 2024 MyWebsite. All rights reserved.
      </footer>
    </main>
  );
}
