import {urls} from "@/lib/constants";

export function getIsPaginationEnabled(currentResults: number, totalResults: number) {
  return currentResults && currentResults < totalResults;
}

export function getArticleHref(title: string) {
  return `${urls.article}?title=${encodeURI(title)}`;
}
