import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const updateVotesByArticleId = async(
  id:number,
  vote:number,
) => {
  const supabase = createClientComponentClient();

  const {data, error} = await supabase
      .from("articles")
      .update({votes: vote})
      .eq("article_id", id)
      .select()

      if (error) console.log(error)
      if (data) console.log(data)
}

export const updateVotesByCommentId = async(
  id:number,
  vote:number,
) => {
  const supabase = createClientComponentClient();

  const {data, error} = await supabase
      .from("comments")
      .update({votes: vote})
      .eq("comment_id", id)
      .select()

      if (error) console.log(error)
      if (data) console.log(data)
}