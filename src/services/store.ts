import {action, createStore, thunk} from "easy-peasy";
import {NewsParams, StoreModel} from "@/lib/types";
import {defaultFilter, defaultNewsData} from "@/lib/constants";
import {fetchNewsData, getExistingFields} from "@/lib/functions";

const store = createStore<StoreModel>({
  news: {
    totalResults: 0,
    articles: [],
  },
  setNewsData: action((state, payload) => {
    state.news.articles.push(...payload.articles);
    state.news.totalResults = payload.totalResults;
  }),
  resetNewsData: action((state) => {
    state.filter.page = defaultFilter.page;
    state.news = defaultNewsData;
  }),
  getNewsData: thunk(async (actions, _payload, helpers) => {
    const {filter} = helpers.getState();
    const params = getExistingFields(filter);
    const newsData = await fetchNewsData(params as NewsParams);
    actions.setNewsData(newsData);
  }),
  getMoreNewsData: thunk((actions) => {
    actions.addFilterPage();
    actions.getNewsData();
  }),

  filter: defaultFilter,
  setFilterQInTitle: action((state, payload) => {
    state.filter.qInTitle = payload;
  }),
  setFilterSources: action((state, payload) => {
    state.filter.sources = payload;
  }),
  setFilterLanguage: action((state, payload) => {
    state.filter.language = payload;
  }),
  addFilterPage: action((state) => {
    state.filter.page = state.filter.page + 1;
  }),
});

export default store;
