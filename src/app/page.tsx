import {defaultFilter} from "@/lib/constants";
import {fetchNewsData, fetchSourcesData} from "@/lib/functions";
import NewsList from "@/components/news-list";
import SearchBar from "@/components/search-bar";

const getData = async () => {
  const sourcesDataPromise = fetchSourcesData();
  const newsDataPromise = fetchNewsData(defaultFilter);

  return await Promise.all([sourcesDataPromise, newsDataPromise]);
};

export default async function RootPage() {
  const [sourcesData, newsResponse] = await getData();

  return (
    <>
      <SearchBar sourcesData={sourcesData} />
      <NewsList newsData={newsResponse} />
    </>
  );
}
