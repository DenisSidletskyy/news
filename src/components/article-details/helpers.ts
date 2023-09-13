import {Article} from "@/lib/types";

export function getCurrentArticle(title: string, articles: Array<Article>) {
  return articles.find((article) => article.title === decodeURI(title));
}
