import FilterSorter from "@/components/FilterSorter";
import Pagination from "@/components/Pagination";
import { fetchArticleFromDb } from "./fetchArticles";
import { Article } from "@/types/types";

export const dynamic = "force-dynamic";

export default async function ArticleListLayout({children
}: {
  children: React.ReactNode
})  {
  const listOfArticles:Article[]|null = await fetchArticleFromDb();
  
  if (listOfArticles) {
    return (
      <>
          <FilterSorter />
          { children }
          <Pagination />
      </>
    )
  }
}
