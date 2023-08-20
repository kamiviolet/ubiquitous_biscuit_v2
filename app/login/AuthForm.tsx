import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react"

export default function AuthForm() {
  const supabase = createClientComponentClient();
  
  return (
    <Auth
    supabaseClient={supabase}
    providers={["github", "facebook"]}
    redirectTo="https://cookiess-forum.vercel.app/auth/callback"
    view="magic_link"
    queryParams={{
      access_type: "offline",
      prompt: "consent",
    }}
    showLinks={false}
    appearance={{
      theme: ThemeSupa,
      variables: {
        default: {
          colors: {
            defaultButtonText: "darkred",
            defaultButtonBorder: "darkred",
            defaultButtonBackgroundHover: "papayawhip",
          },
        },
      },
    }}
    onlyThirdPartyProviders
  />
  )
}