import { Database } from "@/types/supabase";
import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function fetchArticleFromDb(
    sortBy:string="created_at",
    order:string="desc",
    limit:number=10,
    page:number=1,
    topic?:string,
) {
    const supabase = createServerComponentClient<Database>({ cookies });
    
    if (topic == "coding" || topic == "cooking" || topic == "football" ) {
        const { data: listOfArticles, count: count } =await supabase
            .from("articles")
            .select("*, comments(count)", { count: "exact"})
            .match({topic: topic})
            .order(sortBy, {ascending: (order == "desc"? false : true)})
            .limit(limit)
            .range(limit*(page-1), (limit*page)-1);
        return {listOfArticles, count};
    } else {
        const { data: listOfArticles, count: count } =await supabase
            .from("articles")
            .select("*, comments(count)", { count: "exact"})
            .order(sortBy, {ascending: (order == "desc"? false : true)})
            .limit(limit)
            .range(limit*(page-1), (limit*page)-1);
        return {listOfArticles, count};
    }
}

export const deleteArticle = async (formData:FormData) => {
    "use server"
    const supabase = createServerActionClient({cookies});
    const articleId = Number(formData.get("article_id"));
  
    const {error} = await supabase
        .from("articles")
        .delete()
        .eq("article_id", articleId)
  
    if (error) console.log(error.message)
    
    revalidatePath("/");
  }