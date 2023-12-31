import { Article, User } from "@/types/types";
import ArticleSummary from "./ArticleSummary";
import { getCurrentUser } from "../auth/current-user/callback";

const styles = {
    list_of_articles: "w-full list-none bg-[--midlayer] color-[--text]",
    article_card: "animate-in grid grid-rows-[auto_auto_auto] grid-cols-[40px_auto] sm:grid-cols-[40px_auto_max(275px)] gap-2 py-2 px-4 border-b-[1px] border-[--border] last:border-b-0 hover:bg-[--btn-background-hover]",
}

export default async function ArticleList({
    listOfArticles,
}:{
    listOfArticles: Article[]
}) {
    const user:User|undefined = await getCurrentUser();

    return (
        <ul
            className={styles.list_of_articles}
            data-test="article_list">
            {(!listOfArticles) ? <></>
                : listOfArticles.map(article => {
                return (
                    <li
                        key={"article_"+article.article_id}
                        data-test={"article_"+article.article_id}
                        className={styles.article_card}
                    >
                        <ArticleSummary
                            article={article}
                            user={user}
                        />
                    </li>
                )
            })}
        </ul>
    )
}