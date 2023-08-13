import Link from "next/link";
import { User } from "@/types/types";
import LogoutButton from "./LogoutButton";
import ToggleTheme from "./ThemeToggle";
import { convertUID } from "@/utils/convert";

const styles = {
    header: `
    min-h-[200px] px-4 py-3 relative bg-[--background]
    after:content-[''] after:bg-[--highlight] after:h-[10px] after:w-full after:block after:absolute after:bottom-0 after:-translate-x-4`,
    header_wrapper: "float-right text-right w-full",
    header_anchor_wrapper: "flex justify-end pb-2",
    header_banner: "my-6 text-left block max-w-[500px] text-5xl font-black text-[--title-color] absolute bottom-0",
    header_anchor: "uppercase font-semibold text-lg hover:text-[--highlight] last-of-type:px-0 last-of-type:ps-6",
    header_text: "pb-3"
}

export default function Header({user}:{user: User|null}) {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    const date = new Date().toLocaleString("en-GB", options);
    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                {user? (
                    <>
                    <div className={styles.header_anchor_wrapper}>
                        <Link href="/" className={styles.header_anchor}>Home</Link>
                        <Link href={`/users/${convertUID(user.id)}`} className={styles.header_anchor}>My Profile</Link>
                        <LogoutButton />
                    </div>
                        <p className={styles.header_text}>Welcome back, {user.email}!</p>
                    </>
                 ) : ( 
                    <>
                        <Link href="/" className={styles.header_anchor}>Home</Link>
                        <span> | </span>
                        <Link href="/login" className={styles.header_anchor}>Log in</Link>
                    </>
                )}
                <ToggleTheme />
                <p>{date}</p>
            </div>
            <Link className={styles.header_banner} href="/"><h1>Ubiquitous Biscuit</h1></Link>
        </header>
    )
}