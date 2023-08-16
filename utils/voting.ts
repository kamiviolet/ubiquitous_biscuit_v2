import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const updateVotes = async(
  type:string,
  id:number,
  vote:number,
  inc:boolean
) => {
  const supabase = createServerActionClient({cookies});
  const idColumn = type == "articles"? "article_id" : "comment_id";
  const returnVal = inc ? vote+1 : vote-1;

  const {data, error} = await supabase
      .from(type)
      .update({votes: returnVal})
      .eq(idColumn, id)

      if (error) console.log(error)
      if (data) console.log(data)
}