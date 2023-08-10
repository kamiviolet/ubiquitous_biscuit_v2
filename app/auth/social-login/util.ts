import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from 'next/navigation'

export async function signInWithFacebook() {
  const supabase = createClientComponentClient();
  
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider: "facebook",
  });
  
  if (data) {
    redirect('/login');
  }
}

