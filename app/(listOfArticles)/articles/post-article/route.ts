import { getRequestPath } from "@/utils/convert";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server"

export const POST = async (req:Request) => {
  const requestUrl = new URL (req.url);
  const formData = await req.formData();
  const author = String(formData.get("author"));
  const authorId = Number(formData.get("author_id"));
  const articleBody = String(formData.get("article_body"));
  const topic = String(formData.get("topic"));
  const title = String(formData.get("title"));
  const articleImage = String(formData.get("article_img_url"));

  const supabase = createRouteHandlerClient({cookies})

  const {data, error} = await supabase
    .from("articles")
    .insert({
      title,
      topic,
      author,
      author_id: authorId,
      body: articleBody,
      votes: 0,
      article_img_url: articleImage
    })
    .select()

  if (error) {
    console.log(error.message);
  }

  if (data) {
    console.log(data)
  }

  return NextResponse.redirect(getRequestPath(requestUrl.href, "article"), {
    status: 301
  })
}