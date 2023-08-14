import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";

export const dynamic = "force-dynamic";

export async function fetchCommentFromDb(articleId:number) {
    const supabase = createServerComponentClient<Database>({cookies});
    const {data: listOfComments} = await supabase
        .from("comments")
        .select("*")
        .match({article_id: articleId})
    return {listOfComments};
}

export async function fetchArticleById(articleId:number) {
    const supabase = createServerComponentClient<Database>({cookies});
    const {data: article} = await supabase
        .from("articles")
        .select("*, comments(count)")
        .eq("article_id", articleId);
        
    return article? article[0]:null;
} 