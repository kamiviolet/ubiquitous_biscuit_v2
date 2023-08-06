import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Topic } from "@/types/types";

const styles = {
    nav: "sticky top-0 w-full max-w-screen-xl right-0 z-5 bg-[--navBg] shadow-lg z-10",
    menuWrapper: "list-none w-full flex flex-wrap justify-stretch",
    navItem: "w-[100px] justify-center flex items-center bg-white hover:bg-red-400 even:w-inherit even:py-4 even:capitalize odd:w-inherit odd:py-4 odd:capitalize"
}

export default async function Nav() {
    const supabase = createServerComponentClient({ cookies });

    const { data: allTopics }: PostgrestSingleResponse<Topic[]> = await supabase.from("topics").select();

    return (
        <nav className={styles.nav}>
            <ul className={styles.menuWrapper}>
                {allTopics? (
                    allTopics.map(topic => {
                        return (
                            <li className={styles.navItem} key={topic.slug} title={topic.description}>
                                <Link href={"topics/" + topic.slug}>{topic.slug}</Link>
                            </li>
                        )})
                    ) : (
                        <></>
                    )}
            </ul>
        </nav>
    )
}