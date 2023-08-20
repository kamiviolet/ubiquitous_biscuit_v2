import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get("email"))
  const password = String(formData.get("password"))
  const avatarUrl = String(formData.get("avatarUrl"))
  const username = String(formData.get("username"))
  const captcha = String(formData.get("captcha"))
  const supabase = createRouteHandlerClient({ cookies })

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      data: {avatar_url: avatarUrl, username: username, },
      captchaToken: captcha
    },
  })

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login?error=${error.message}`,
      {
        status: 301,
      }
    )
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/login?message=Check email to continue sign in process`,
    {
      status: 301,
    }
  )
}
