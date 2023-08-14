import { fetchArticleFromDb } from "./callback";
import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import FilterSorter from "@/components/FilterSorter";

export const dynamic = "force-dynamic";

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
  const {listOfArticles, count}= await fetchArticleFromDb(null,sort_by,order,limit,p);

  if (listOfArticles) {
    return (
      <>
        <FilterSorter count={count}/>
        <ArticleList listOfArticles={listOfArticles}/>
        <Pagination count={count}/>
      </>
    )
  }
}
