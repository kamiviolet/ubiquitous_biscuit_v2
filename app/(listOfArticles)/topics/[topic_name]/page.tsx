import { fetchArticleFromDb } from "../../callback";
import ArticleList from "@/app/(listOfArticles)/ArticleList";
import Pagination from "../../Pagination";
import FilterSorter from "../../FilterSorter";
import { Metadata } from "next";
import { searchParams } from "@/types/types";

export const generateMetadata = async({
  params, searchParams
}: {
  params: {topic_name: string},
  searchParams: searchParams
}):Promise<Metadata> => {
  const { topic_name } = params;
  const { p } = searchParams;
  const formattedTopic = topic_name[0].toUpperCase() + topic_name.slice(1);

  return (
    p? {
      title: `${formattedTopic} / Page ${p??1} - Cookiess! Forum`,
    }: {
      title: `${formattedTopic} - Cookiess! Forum`
    }
  )
}

export default async function Page({
  searchParams,
  params
}: {
  params: {topic_name: string}
  searchParams: {
    sort_by:string
    order:string
    limit:number
    p:number
}}) {
  const {sort_by,order,limit,p} = searchParams;
  const {listOfArticles, count} = await fetchArticleFromDb(sort_by,order,limit,p,params.topic_name);

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