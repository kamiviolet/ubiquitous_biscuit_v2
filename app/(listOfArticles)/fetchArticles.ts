import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Article } from "@/types/types";

const supabase = createServerComponentClient({ cookies });

export const dynamic = "force-dynamic"

export async function fetchArticleFromDb(topic:string|undefined=undefined) {
    if (topic) {
        const { data: listOfArticles }: PostgrestSingleResponse<Article[]> =await supabase
            .from("articles")
            .select("*")
            .eq("topic", `${topic}`);
        return listOfArticles;
    }

    const { data: listOfArticles }: PostgrestSingleResponse<Article[]> =await supabase
        .from("articles")
        .select("*")
    return listOfArticles;
}