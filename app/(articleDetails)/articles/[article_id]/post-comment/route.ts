import { getRequestPath } from "@/utils/convert";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req:Request) => {
  const requestUrl = new URL(req.url)
  const formData = await req.formData()
  const author = String(formData.get("user"))
  const articlePostedTo = String(formData.get("article_id"))
  const commentBody = String(formData.get("body"))
  
  const supabase = createRouteHandlerClient({cookies})
  
  const { error } = await supabase
      .from("comments")
      .insert({body: commentBody, article_id: articlePostedTo, author: author})

  if (error) console.log(error.message)

  return NextResponse.redirect(getRequestPath(requestUrl.href, "comment", "post"), {
    status: 301
  })
}