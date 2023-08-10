import ArticleList from "@/components/ArticleList";
import { fetchArticleFromDb } from "../../fetchArticles";
import { Article } from "@/types/types";

export const dynamic = "force-dynamic"

export default async function Index({params}: {params: {topic_name: string}}) {
  const listOfArticles:Article[]|null = await fetchArticleFromDb(params.topic_name);

  if (listOfArticles) {
    return (
      <ArticleList listOfArticles={listOfArticles}/>
    )
  }
}
