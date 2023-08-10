import ArticleList from "@/components/ArticleList";
import { fetchArticleFromDb } from "./fetchArticles";
import { Article } from "@/types/types";

export const dynamic = 'force-dynamic'

export default async function Index() {
  const listOfArticles:Article[]|null = await fetchArticleFromDb();
  
  if (listOfArticles) {
    return (
      <>
      <ArticleList listOfArticles={listOfArticles}/>
      </>
    )
  }
}
