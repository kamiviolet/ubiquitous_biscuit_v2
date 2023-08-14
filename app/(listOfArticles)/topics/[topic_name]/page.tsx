import { fetchArticleFromDb } from "../../callback";
import ArticleList from "@/app/(listOfArticles)/ArticleList";
import Pagination from "../../Pagination";
import FilterSorter from "../../FilterSorter";
import { getCurrentUser } from "@/app/auth/current-user/callback";

export const dynamic = "force-dynamic";

export default async function Index({
  searchParams,
  params
}: {
  params: {topic_name: string}
  searchParams: {
    topic:string|undefined
    sort_by:string
    order:string
    limit:number
    p:number
}}) {
  const {sort_by,order,limit,p} = searchParams;
  const {listOfArticles, count} = await fetchArticleFromDb(params.topic_name,sort_by,order,limit,p);
  const user = await getCurrentUser();

  if (listOfArticles) {
    return (
      <>
        <FilterSorter count={count}/>
        <ArticleList listOfArticles={listOfArticles} user={user}/>
        <Pagination count={count}/>
      </>
    )
  }
}
