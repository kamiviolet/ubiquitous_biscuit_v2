import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const fetchArticleById = async (articleId:number) => {
    const supabase = createServerActionClient<Database>({cookies});
    const { data: article } =await supabase
        .from("articles")
        .select("*, comments(count)", { count: "exact"})
        .eq("article_id", articleId)
    return {article};
}

export const fetchCommentFromDb = async (articleId:number) => {
    const supabase = createServerActionClient<Database>({cookies});
    const {data: listOfComments} = await supabase
        .from("comments")
        .select("*")
        .order("updated_at", {ascending: false})
        .match({article_id: articleId})
    return {listOfComments};
}

export const deleteComment = async (formData:FormData) => {
    "use server"
    const supabase = createServerActionClient({cookies});
    const commentId = Number(formData.get("comment_id"));
  
    const {error} = await supabase
        .from("comments")
        .delete()
        .eq("comment_id", commentId)
  
    if (error) console.log(error.message)
    
    revalidatePath("/");
  }
  
  export const addComment = async (formData:FormData) => {
    "use server"
    const supabase = createServerActionClient({cookies});
    const commentBody = String(formData.get("body"));
    const author = String(formData.get("user"));
    const articlePostedTo = Number(formData.get("article_id"));

    const {error} = await supabase
        .from("comments")
        .insert({body: commentBody, article_id: articlePostedTo, author: author})

    if (error) console.log(error.message)

    revalidatePath("/");
}