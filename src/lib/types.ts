import {Action, Thunk} from "easy-peasy";

export type Language = "en" | "de" | "fr";

export type Status = "ok" | "error";

export type ErrorData = {
  status: Status;
  code: string;
  message: string;
};

export type NewsParams = {
  qInTitle?: string;
  sources?: string;
  language: Language;
  page: number;
  pageSize: number;
};

export type Filter = Required<NewsParams>;

export type Source = {
  id: string;
  name: string;
};

export type Article = {
  source: Source;
  author: string;
  publishedAt: string;
  title: string;
  description: string | null;
  content: string | null;
  urlToImage: string | null;
};

export type SourcesData = {
  sources: Array<Source>;
};

export type NewsData = {
  articles: Array<Article>;
  totalResults: number;
};

export type StoreModel = {
  news: NewsData;
  setNewsData: Action<StoreModel, NewsData>;
  resetNewsData: Action<StoreModel>;
  getNewsData: Thunk<StoreModel>;
  getMoreNewsData: Thunk<StoreModel>;

  filter: Filter;
  setFilterQInTitle: Action<StoreModel, Filter["qInTitle"]>;
  setFilterSources: Action<StoreModel, Filter["sources"]>;
  setFilterLanguage: Action<StoreModel, Filter["language"]>;
  addFilterPage: Action<StoreModel>;
};

export type SelectOption<Value extends string = string> = {
  value: Value;
  title: string;
};
