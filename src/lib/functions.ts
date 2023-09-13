import api from "@/services/api";
import {NewsParams} from "@/lib/types";
import {minParamsLength} from "@/lib/constants";

export function getExistingFields<T extends Record<string, unknown> = {}>(source: T) {
  return Object.keys(source).reduce((result, key) => {
    const value = source[key];
    if (value) return {...result, [key]: value};
    return result;
  }, {} as Partial<T>);
}

export function getIsImageValid(image: string | null) {
  return !!image && image.startsWith("https://");
}

export function getFormatedDate(dateString: string) {
  const date = new Date(dateString);
  return date.toDateString();
}

export async function fetchNewsData(params: NewsParams) {
  const paramsLength = Object.values(params).filter((param) => param).length;
  const isParamsEnough = paramsLength >= minParamsLength;

  if (isParamsEnough) {
    const response = await api.getEverything(params);
    return response.data;
  }

  const response = await api.getTopHeadlines(params);
  return response.data;
}

export async function fetchSourcesData() {
  const response = await api.getSources();
  return response.data;
}
