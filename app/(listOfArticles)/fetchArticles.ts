import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Article } from "@/types/types";

export const dynamic = "force-dynamic"

export async function fetchArticleFromDb(
    topic:string|null=null,
    sortBy:string="created_at",
    order:string="desc",
    limit:number=10,
    page:number=1
) {
    const supabase = createServerComponentClient({ cookies });
    if (topic) {
        const { data: listOfArticles }: PostgrestSingleResponse<Article[]> =await supabase
            .from("articles")
            .select("*")
            .eq("topic", `${topic}`)
            .order(sortBy, {ascending: (order == "desc"? false : true)})
            .limit(limit)
            .range(limit*(page-1), (limit*page)-1);
        return listOfArticles;
    }

    const { data: listOfArticles }: PostgrestSingleResponse<Article[]> =await supabase
        .from("articles")
        .select("*")
        .order(sortBy, {ascending: (order == "desc"? false : true)})
        .limit(limit)
        .range(limit*(page-1), (limit*page)-1)
    return listOfArticles;
}