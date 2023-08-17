import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import {cookies} from "next/headers";
import { getRequestPath } from "@/utils/convert";

export const POST = async(req:Request) => {
  const requestUrl = new URL(req.url);

  const formData = await req.formData();
  const title = String(formData.get("title"));
  const articleBody = String(formData.get("article_body"))
  const articleId = Number(formData.get("article_id"))

  const supabase = createRouteHandlerClient({cookies})

  const {data, error} = await supabase
    .from("articles")
    .update({
      title: title,
      body: articleBody,
    })
    .match({article_id: articleId})
    .select()

  if (error) console.log(error);

  return NextResponse.redirect(getRequestPath(requestUrl.href, "article", "edit"), {
    status: 301
  })
}