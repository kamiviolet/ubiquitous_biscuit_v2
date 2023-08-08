import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export async function signInWithFacebook() {
  const supabase = createClientComponentClient()

  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
    })
  } catch (error) {
    console.log(error)
  }
  }

