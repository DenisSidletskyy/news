import ArticleDetails from "@/components/article-details";

type Props = {
  searchParams: {
    title: string;
  };
};

export function generateMetadata({searchParams}: Props) {
  return {
    title: searchParams.title.split(" ").slice(0, 5).join(" "),
  };
}

export default function ArticlePage({searchParams}: Props) {
  return <ArticleDetails title={searchParams.title} />;
}
