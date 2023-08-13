import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";
import { HiUser } from "react-icons/hi2";

const styles = {
  profile: "my-10 grid md:grid-cols-2 gap-4 odd:col-start-1 even:col-start-2",
  profileWrapper: "py-4 grid grid-cols-2",
  avatarWrapper: "place-self-center",
  avatar: "",
  default_avatar: "",
  label:"col-start-1",
  value: "col-start-2"
}

export default async function Page({ params }: {params: {userId: string}}) {
  const supabase = createServerComponentClient({cookies});
  const {data: {session}} = await supabase.auth.getSession();

    return (
      <div className={styles.profile}>
        <div className={styles.avatarWrapper}>
          {
            session?.user.user_metadata.avatarUrl
            ? <img
                className={styles.avatar}
                src={session?.user.user_metadata.avatarUrl} />
            : <div
                className={`${styles.avatar} ${styles.default_avatar}`}>
                  <HiUser />
              </div>
          }
        </div>
        <div className={styles.profileWrapper}>
            <p className={styles.label}>Username</p>
            <p className={styles.value}>{session?.user.user_metadata.username}</p>
            <p className={styles.label}>Email</p>
            <p className={styles.value}>{session?.user.email}</p>
            <p className={styles.label}>Role</p>
            <p className={styles.value}>{session?.user.role}</p>
        </div>
      </div>
    )
  }
  