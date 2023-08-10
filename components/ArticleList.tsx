import { Article } from "@/types/types";

import ArticleSummary from "./ArticleSummary";

export const dynamic = "force-dynamic";

const styles = {
    list_of_articles: "w-full list-none bg-[--midlayer] color-[--text]",
    article_card: "animate-in grid grid-rows-[auto_auto_auto] grid-cols-[40px_auto] md:grid-cols-[40px_auto_max(275px)] gap-2 py-2 px-4 border-b-[1px] border-[--border] last:border-b-0",
}

export default async function ArticleList({listOfArticles}:{listOfArticles: Article[]}) {

    return (
        <ul className={styles.list_of_articles}>
            {(!listOfArticles) ? <></>
                : listOfArticles.map(article => {
                return (
                    <li
                        key={"article_"+article.article_id}
                        className={styles.article_card}
                    >
                        <ArticleSummary
                            article={article}
                        />
                    </li>
                )
            })}
        </ul>
    )
}