import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Article } from "@/types/types";


export default async function fetchArticleFromDb(topic:string) {
    const supabase = createServerComponentClient({ cookies });
    if (topic) {
        const { data: listOfArticles }: PostgrestSingleResponse<Article[]> =await supabase
            .from("articles")
            .select("*")
            .eq("topic", `${topic}`);
        return listOfArticles;
    } else {
        const { data: listOfArticles }: PostgrestSingleResponse<Article[]> =await supabase
            .from("articles")
            .select("*")
    
        return listOfArticles;
    }
}