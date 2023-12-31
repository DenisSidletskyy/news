"use client";

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {Article} from "@/lib/types";
import {plugSrc, urls} from "@/lib/constants";
import {getFormatedDate, getIsImageValid} from "@/lib/functions";
import {useStoreState} from "@/lib/hooks";
import {getCurrentArticle} from "./helpers";

type Props = {
  title: string;
};

export default function ArticleDetails({title}: Props) {
  const router = useRouter();

  const {
    news: {articles},
  } = useStoreState((store) => store);

  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    (async () => {
      const currentArticle = getCurrentArticle(title, articles);
      if (currentArticle) {
        setArticle(currentArticle);
      } else {
        router.replace(urls.articleNotFound);
      }
    })();
  }, []);

  if (!article) return null;

  const {urlToImage, description, content, author, publishedAt} = article;

  const formatedDate = getFormatedDate(publishedAt);
  const isImageValid = getIsImageValid(urlToImage);
  const imageSrc = isImageValid ? urlToImage! : plugSrc;

  return (
    <div className="flex w-full max-w-6xl flex-col gap-4 self-center">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative aspect-video md:w-96">
          <Image src={imageSrc} fill objectFit="cover" alt={title} />
        </div>
        <div className="flex flex-grow flex-col gap-4 md:gap-0">
          <h3 className="flex-grow text-2xl font-bold">{article.title}</h3>
          <p className="self-end">{formatedDate}</p>
          <p className="self-end">{author}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-lg">
        <p>{description}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}
