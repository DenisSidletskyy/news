import axios, {AxiosError} from "axios";
import {NewsParams, NewsData, SourcesData, ErrorData} from "@/lib/types";
import {endpoints} from "@/lib/constants";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
  },
});

instance.interceptors.request.use(
  (req) => req,
  (error) => {
    console.log("error");

    throw error;
  }
);

instance.interceptors.response.use(
  (req) => req,
  (error) => {
    console.log("error");

    const axiosError = error as AxiosError;
    const data = axiosError.response?.data as ErrorData | undefined;

    if (data) throw new Error(data.message);
    throw error;
  }
);

const api = {
  getEverything: (params: NewsParams) => instance.get<NewsData>(endpoints.everything, {params}),
  getTopHeadlines: (params: NewsParams) => instance.get<NewsData>(endpoints.topHeadlines, {params}),
  getSources: () => instance.get<SourcesData>(endpoints.sources),
};

export default api;
