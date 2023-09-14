"use client";

import {useEffect} from "react";
import {NewsData} from "@/lib/types";
import {useEffectNoFirstMount, useStoreActions, useStoreState} from "@/lib/hooks";
import {getIsPaginationEnabled} from "./helpers";
import Pagination from "@/components/pagination";
import Item from "./item";

type Props = {
  newsData: NewsData;
};

export default function NewsList({newsData}: Props) {
  const {getNewsData, resetNewsData, getMoreNewsData, setNewsData} = useStoreActions((store) => store);

  const {
    filter: {qInTitle, sources, language},
    news: {articles, totalResults},
  } = useStoreState((store) => store);

  useEffect(() => {
    if (!totalResults) setNewsData(newsData);
  }, []);

  useEffectNoFirstMount(() => {
    resetNewsData();
    getNewsData();
  }, [qInTitle, sources, language]);

  const isPaginationEnabled = getIsPaginationEnabled(articles.length, totalResults);

  return (
    <div className="relative m-auto grid max-w-screen-2xl grid-cols-12 gap-4">
      {articles.map((article) => (
        <Item key={article.publishedAt} {...article} />
      ))}

      {isPaginationEnabled ? <Pagination callback={getMoreNewsData} /> : null}
    </div>
  );
}
