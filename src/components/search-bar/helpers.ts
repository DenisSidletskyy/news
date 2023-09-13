import {Source} from "@/lib/types";

export function getSourcesOptions(sources: Array<Source>) {
  return sources.map((source) => ({value: source.id, title: source.name}));
}
