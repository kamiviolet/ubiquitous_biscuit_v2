import { fetchArticleFromDb } from "../../callback";
import ArticleList from "@/app/(listOfArticles)/ArticleList";
import Pagination from "../../Pagination";
import FilterSorter from "../../FilterSorter";

export const dynamic = "force-dynamic";

import { Metadata, ResolvingMetadata } from "next";
import { searchParams } from "@/types/types";

export async function generateMetadata({
  params, searchParams
}: {
  params: {topic_name: string},
  searchParams: searchParams
}):Promise<Metadata> {
  const { topic_name } = params;
  const { p } = searchParams;
  const formattedTopic = topic_name[0].toUpperCase() + topic_name.slice(1);

  return (
    p? {
      title: `${formattedTopic} / Page ${p??1} - Ubiquitous Biscuit (v2)`,
    }: {
      title: `${formattedTopic} - Ubiquitous Biscuit (v2)`
    }
  )
}

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
