import { getCurrentUser } from "@/app/auth/current-user/callback";
import { convertUID } from "@/utils/convert";
import { HiUser } from "react-icons/hi2";

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
  const user = await getCurrentUser();

  if (user)
  return (
      <div className={styles.profile}>
        <div className={styles.avatarWrapper}>
          {
            user?.user_metadata.avatarUrl
            ? <img
                className={styles.avatar}
                src={user.user_metadata.avatarUrl} />
            : <div
                className={`${styles.avatar} ${styles.default_avatar}`}>
                  <HiUser />
              </div>
          }
        </div>
        <div className={styles.profileWrapper}>
            <p className={styles.label}>Username</p>
            <p className={styles.value}>{user.user_metadata.username}</p>
            <p className={styles.label}>User ID</p>
            <p className={styles.value}>{convertUID(user?.id)}</p>
            <p className={styles.label}>Email</p>
            <p className={styles.value}>{user.email}</p>
            <p className={styles.label}>Role</p>
            <p className={styles.value}>{user.role}</p>
        </div>
      </div>
  )
}