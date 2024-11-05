import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "../_components/NewsList";

import { NEWS_LIST_LIMIT } from "@/app/_constants";

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <h3 className="text-8xl md:text-9xl blur-md mb-6 ">WORKS</h3>

      <div className="mb-5"></div>
      <NewsList news={news} />
    </>
  );
}
