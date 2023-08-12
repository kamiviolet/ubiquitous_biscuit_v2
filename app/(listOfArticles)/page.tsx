import ArticleList from "@/components/ArticleList";
import { fetchArticleFromDb } from "./fetchArticles";
import { Article } from "@/types/types";

export const dynamic = 'force-dynamic'

export default async function Index({
  searchParams
}:{
  searchParams: {
    topic:string|undefined
    sort_by:string
    order:string
    limit:number
    p:number
}}) {
  const {sort_by,order,limit,p} = searchParams;
  const listOfArticles:Article[]|null = await fetchArticleFromDb(null,sort_by,order,limit,p);
  if (listOfArticles) {
    return (
      <>
      <ArticleList listOfArticles={listOfArticles}/>
      </>
    )
  }
}
