import { getRequestPath } from "@/utils/convert";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server"

export const POST = async (req:Request) => {
  const requestUrl = new URL (req.url);
  const formData = await req.formData();
  const author = formData.get("author");
  const articleBody = formData.get("body");
  const topic = formData.get("topic");
  const title = formData.get("title");
  const articleImage = formData.get("article_img_url");

  const supabase = createRouteHandlerClient({cookies})

  const {error} = await supabase
    .from("article")
    .insert({
      title,
      topic,
      author,
      body: articleBody,
      votes: 0,
      article_img_url: articleImage
    })

  if (error) {
    alert("Error occurred! Please check console for more information!");
    console.log(error.message);
  }

  return NextResponse.redirect(getRequestPath(requestUrl.href, "article"), {
    status: 301
  })
}