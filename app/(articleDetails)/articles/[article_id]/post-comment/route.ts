import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";


export const POST = async (req:Request) => {
  const requestUrl = new URL(req.url)
  const formData = await req.formData()
  const user = String(formData.get("user"))
  const article_id = String(formData.get("article_id"))
  const body = String(formData.get("body"))

  // console.log(formData)

  revalidatePath("/");
}