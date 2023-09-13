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
    <div className="col-span-12 sm:col-span-6 h-full md:col-span-4 lg:col-span-3 sm:aspect-[4/5] w-full shadow-md flex flex-col gap-3 justify-between">
      <div className="aspect-video w-full relative">
        <Image src={imageSrc} fill objectFit="cover" alt={title} />
      </div>
      <div className="flex-grow flex flex-col justify-between p-3 gap-3 break-words">
        <Link href={articleHref}>
          <h3 className="hover:underline text-lg ">{title}</h3>
        </Link>
        <p>{author}</p>
        <p>{formatedDate}</p>
      </div>
    </div>
  );
}
