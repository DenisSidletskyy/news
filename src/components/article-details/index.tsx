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
    <div className="w-full flex flex-col gap-4 max-w-6xl self-center">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="aspect-video md:w-96 relative">
          <Image src={imageSrc} fill objectFit="cover" alt={title} />
        </div>
        <div className="flex-grow flex flex-col gap-4 md:gap-0">
          <h3 className="flex-grow font-bold text-2xl">{article.title}</h3>
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
