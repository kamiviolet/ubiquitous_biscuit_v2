import { getAllTopicsFromDb } from "@/utils/getGeneralDataFromDb";
import Link from "next/link";

const styles = {
    nav: "sticky top-0 w-full max-w-screen-xl right-0 z-5 bg-[--navBg] shadow-lg z-10",
    menuWrapper: "list-none w-full flex flex-wrap justify-stretch",
    navItem: "justify-center flex items-center bg-white hover:bg-red-400",
    navLink: "w-[100px] py-4 capitalize"
}

export default async function Nav() {
    const allTopics = await getAllTopicsFromDb();
    
    if (allTopics)
    return (
        <nav className={styles.nav}>
            <ul className={styles.menuWrapper}>
                {allTopics.map(topic => {
                    return (
                        <li
                            className={`${styles.navItem} ${topic.slug}`}
                            key={topic.slug}
                            title={topic.description}>
                                <Link
                                    className={styles.navLink}
                                    href={"/topics/" + topic.slug} >
                                    {topic.slug}
                                </Link>
                        </li>
                    )})
                }
            </ul>
        </nav>
    )
}