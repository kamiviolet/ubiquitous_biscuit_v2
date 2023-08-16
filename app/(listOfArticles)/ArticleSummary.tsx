import Link from "next/link";
import { Article, User } from "@/types/types";
import UpvoteBtn from "@/components/UpvoteBtn";
import CommentBtn from "@/components/CommentBtn";


const styles = {
    article_id: "text-left col-start-1 row-start-1 row-end-2 before:content-['#']",
    article_card_wrapper: "row-start-2 col-start-2 md:row-start-1 grid grid-rows-4 text-left place-items-start",
    article_img_container: "col-start-2 md:col-start-3 md:row-span-full row-start-1  md:col-span-1 md:col-span-1 justify-self-center",
    article_img: "object-cover w-full md:w-[275px] md:h-[225px]",
    title: "font-black",
    topic: "text-right capitalize radius-[5px]  p-2",
    author: "before:content-['By'] before:mr-2 italic",
    stat: " py-2 w-[200px] gap-4 col-start-2 flex justify-start",
    delete: "px-4 py-1 bg-rose-300 text-red-600 font-black border-red-400"
}

export default function ArticleSummary({
    article,
    user
}: {
    article: Article
    user: User | undefined
}) {
    
    return (
        <>
            <p className={styles.article_id} aria-hidden>{article.article_id}</p>
            <Link href={`/articles/${article.article_id}`} className={styles.article_card_wrapper}>
                <p className={styles.title}>{article.title}</p>
                <p className={styles.author}>{article.author}</p>
                <p>{article.created_at}</p>
                <p className={`${styles.topic} ${article.topic}`}>{article.topic}</p>
            </Link>
            <Link href={`/articles/${article.article_id}`} className={styles.article_img_container}>
                <img
                    className={styles.article_img}
                    src={article.article_img_url??""}
                    alt={article.title} />
            </Link>
            <div className={styles.stat}>
                <CommentBtn
                    link={"/articles/"+article.article_id+"#comments"}
                    comments={article.comments[0].count} />
                {/* <UpvoteBtn
                    type="articles"
                    id={article.article_id}
                    votes={article.votes} /> */}
                {
                    user?.user_metadata.username === article.author? 
                        <button
                            className={styles.delete}
                            value={article.article_id}
                            onClick={(e)=>{}}>
                                X
                        </button>
                    : <></>
                }
            </div>

        </>
    )
}