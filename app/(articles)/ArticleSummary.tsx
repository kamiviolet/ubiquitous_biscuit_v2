"use client"

import Link from "next/link"
import { Article } from "@/types/types"
import UpvoteBtn from "@/components/UpvoteBtn"
import CommentBtn from "@/components/CommentBtn"

const styles = {
    article_card_wrapper: "grid grid-rows-4 text-left" ,
    article_id: "before:content-['#']",
    article_img_container: "col-start-3 row-start-1 row-span-2 justify-self-center",
    article_img: "w-[225px] h-[175px]",
    title: "font-black",
    topic: "text-right capitalize radius-[5px] place-self-start p-2",
    author: "before:content-['By'] before:mr-2 italic",
    stat: "w-32 col-start-2 place-self-start px-4 m-2 "
}

export default function ArticleSummary({
    article,
}: {
    article: Article
}) {
    
    return (
        <>
            <p className={styles.article_id} aria-hidden>{article.article_id}</p>
            <Link href="#" className={styles.article_card_wrapper}>
                <p className={styles.title}>{article.title}</p>
                <p className={styles.author}>{article.author}</p>
                <p>{article.created_at}</p>
                <p className={`${styles.topic} ${article.topic}`}>{article.topic}</p>
            </Link>
            <Link href="#" className={styles.article_img_container}>
                <img
                    className={styles.article_img}
                    src={article.article_img_url}
                    alt={article.title} />
            </Link>
            <div className={styles.stat}>
                <CommentBtn
                    link={"/articles/"+article.article_id+"#comments"}
                    comments={article.comment_count} />
                <UpvoteBtn
                    type="article"
                    id={article.article_id}
                    votes={article.votes} />
                {
                    // user.username === article.author? 
                    <div role="delete">
                        <button value={article.article_id} onClick={(e)=>{}}> X </button>
                    </div>
                    // : <></>
                }
            </div>

        </>
    )
}