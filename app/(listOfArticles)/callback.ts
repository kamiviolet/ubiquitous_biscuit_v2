import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function fetchArticleFromDb(
    topic:string|null=null,
    sortBy:string="created_at",
    order:string="desc",
    limit:number=10,
    page:number=1
) {
    const supabase = createServerComponentClient<Database>({ cookies });
    
    if (topic) {
        const { data: listOfArticles, count: count } =await supabase
            .from("articles")
            .select("*, comments(count)", { count: "exact"})
            .match({topic: topic})
            .order(sortBy, {ascending: (order == "desc"? false : true)})
            .limit(limit)
            .range(limit*(page-1), (limit*page)-1);
        return {listOfArticles, count};
    }

    const { data: listOfArticles, count: count } =await supabase
        .from("articles")
        .select("*, comments(count)", { count: "exact"})
        .order(sortBy, {ascending: (order == "desc"? false : true)})
        .limit(limit)
        .range(limit*(page-1), (limit*page)-1)
    return {listOfArticles, count};
}
