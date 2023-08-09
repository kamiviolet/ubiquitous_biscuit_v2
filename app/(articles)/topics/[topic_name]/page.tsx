import ArticleList from "@/components/ArticleList";
import FilterSorter from "@/components/FilterSorter";
import Pagination from "@/app/(articles)/Pagination";
import fetchArticleFromDb from "../../fetchArticles";
import { Article } from "@/types/types";

export const dynamic = "force-dynamic"

export default async function Index({params}: {params: {topic_name: string}}) {
  const listOfArticles:Article[]|null = await fetchArticleFromDb(params.topic_name);

  if (listOfArticles) {
    return (
      <div className="h-full w-full grid place-items-center">
          <FilterSorter />
          <ArticleList listOfArticles={listOfArticles}/>
          <Pagination />
      </div>
    )
  }
}
