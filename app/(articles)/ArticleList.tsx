import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Article } from "@/types/types";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import ArticleSummary from "./ArticleSummary";

export const dynamic = "force-dynamic";

const styles = {
    list_of_articles: "w-full list-none bg-[--midlayer] color-[--text]",
    article_card: "animate-in grid grid-rows-[auto_auto] grid-cols-[40px_auto_max(250px)] gap-2 py-2 px-4 border-b-[1px] border-[--border] last:border-b-0",
}

export default async function ArticleList() {
    const supabase = createServerComponentClient({ cookies });
    const { data: listOfArticles }: PostgrestSingleResponse<Article[]> =
        await supabase.from("articles").select();
        
    return (
        <ul className={styles.list_of_articles}>
            {(!listOfArticles) ? <></>
                : listOfArticles.map(article => {
                return (
                    <li
                        key={"article_"+article.article_id}
                        className={styles.article_card}
                    >
                        <ArticleSummary
                            article={article}
                        />
                    </li>
                )
            })}
        </ul>
    )
}