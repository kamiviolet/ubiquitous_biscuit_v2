import { fetchArticleFromDb } from "./callback";
import ArticleList from "@/app/(listOfArticles)/ArticleList";
import Pagination from "./Pagination";
import FilterSorter from "./FilterSorter";
import { Metadata } from "next";
import { searchParams } from "@/types/types";

export const dynamic = "force-dynamic";

export const generateMetadata = async({searchParams}: {
  searchParams: searchParams
}):Promise<Metadata> => {
  const {p} = searchParams;
  return (
    p? {
      title: `All Articles / Page ${p} - Cookiess! Forum`
    }: {
      title: "All Articles - Cookiess! Forum"
    }
  )
}

export default async function Index({
  searchParams: searchParams
}:{
  searchParams: searchParams}) {
  const {sort_by,order,limit,p} = searchParams;
  const {listOfArticles, count}= await fetchArticleFromDb(sort_by,order,limit,p);
  
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