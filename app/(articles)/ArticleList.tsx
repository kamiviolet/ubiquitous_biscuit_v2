import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Article } from "@/types/types";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import ArticleSummary from "./ArticleSummary";
import Pagination from "./Pagination";
import FilterSorter from "./FilterSorter";

export const dynamic = "force-dynamic";

export default async function ArticleList() {
    const supabase = createServerComponentClient({ cookies });
    const { data: listOfArticles }: PostgrestSingleResponse<Article[]> =
        await supabase.from("articles").select();
        
    return (
        <main>
            <FilterSorter />
            <ul className="list_of_articles">
                {
                    (!listOfArticles) ? <></>
                    : listOfArticles.map(article => {
                        return (
                            <li key={"article_"+article.article_id} className="article_card">
                                <ArticleSummary
                                    article={article}
                                />
                            </li>
                        )
                    })
                }
            </ul>
            <Pagination />
        </main>
    )
}