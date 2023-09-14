import Link from "next/link";
import Image from "next/image";
import {Article} from "@/lib/types";
import {plugSrc} from "@/lib/constants";
import {getFormatedDate, getIsImageValid} from "@/lib/functions";
import {getArticleHref} from "./helpers";

type Props = Article;

export default function Item({title, urlToImage, publishedAt, author}: Props) {
  const formatedDate = getFormatedDate(publishedAt);
  const articleHref = getArticleHref(title);
  const isImageValid = getIsImageValid(urlToImage);
  const imageSrc = isImageValid ? urlToImage! : plugSrc;

  return (
    <div className="col-span-12 flex h-full w-full flex-col justify-between gap-3 shadow-md sm:col-span-6 sm:aspect-[4/5] md:col-span-4 lg:col-span-3">
      <div className="relative aspect-video w-full">
        <Image src={imageSrc} fill objectFit="cover" alt={title} />
      </div>
      <div className="flex flex-grow flex-col justify-between gap-3 break-words p-3">
        <Link href={articleHref}>
          <h3 className="text-lg hover:underline ">{title}</h3>
        </Link>
        <p>{author}</p>
        <p>{formatedDate}</p>
      </div>
    </div>
  );
}
