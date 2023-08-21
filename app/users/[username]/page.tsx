import { convertUID } from "@/utils/convert";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { HiUser } from "react-icons/hi2";
import { cookies } from "next/headers";

const styles = {
  profile: "bg-[--foreground] p-4 my-10 grid md:grid-cols-[200px_1fr] gap-4 odd:col-start-1 even:col-start-2 text-[--text]",
  profileWrapper: "py-4 w-[fit-content] grid grid-cols-2",
  avatarWrapper: "place-self-center",
  avatar: "w-[200px] h-[200px] grid",
  default_avatar: "bg-white border border-slate-500 text-9xl place-content-center",
  label:"col-start-1 font-semibold text-left",
  value: "col-start-2 text-right"
}

export const metadata = {
  title: "Account details - Cookiess! Forum",
}

export default async function Page({ params }: {params: {userId: string}}) {
  const supabase = createServerComponentClient({cookies})
  const {data: user} = await supabase
    .from("users")
    .select("*")
    .eq("user_id", params.userId)
    .single();

  if (user)
  return (
      <div className={styles.profile}>
        <div className={styles.avatarWrapper}>
          {
            user.avatar_url
            ? <img
                className={styles.avatar}
                src={user.avatar_url} />
            : <div
                className={`${styles.avatar} ${styles.default_avatar}`}>
                  <HiUser />
              </div>
          }
        </div>
        <div className={styles.profileWrapper}>
            <p className={styles.label}>Username</p>
            <p className={styles.value}>{user.username}</p>
            <p className={styles.label}>User ID (last digits)</p>
            <p className={styles.value}>{convertUID(user.user_id)}</p>
            <p className={styles.label}>Email</p>
            <p className={styles.value}>{user.email}</p>
        </div>
      </div>
  )
}