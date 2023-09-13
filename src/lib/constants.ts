import {Filter, Language, NewsData, SelectOption} from "@/lib/types";

export const endpoints = {
  everything: "everything",
  topHeadlines: "top-headlines",
  sources: "top-headlines/sources",
};

export const urls = {
  home: "/",
  article: "/article",
  articleNotFound: "/article/404",
};

export const minParamsLength = 4;

export const defaultFilter: Filter = {
  qInTitle: "",
  sources: "",
  language: "en",
  page: 1,
  pageSize: 8,
};

export const defaultNewsData: NewsData = {
  totalResults: 0,
  articles: [],
};

export const plugSrc = "/image-plug.jpg";

export const languageOptions: Array<SelectOption<Language>> = [
  {value: "en", title: "English"},
  {value: "de", title: "Deutch"},
  {value: "fr", title: "French"},
];
