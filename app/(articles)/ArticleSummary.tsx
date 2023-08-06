"use client"

import Link from "next/link"
import { Article } from "@/types/types"
import UpvoteBtn from "@/components/UpvoteBtn"
import CommentBtn from "@/components/CommentBtn"

export default function ArticleSummary({
    article,
}: {
    article: Article
}) {
    
    return (
        <>
            <p role="article_id" aria-hidden>{article.article_id}</p>
            <Link href="#" className='article_card_wrapper'>
                <p role="title" aria-roledescription="title">{article.title}</p>
                <p role="author" aria-roledescription="author">{article.author}</p>
                <p role="date" aria-roledescription="created_at">{article.created_at}</p>
                <p className={article.topic + " topics"}  role="topic" aria-roledescription="under_topic">{article.topic}</p>
            </Link>
            <Link href="#" role="article_img_container">
                <img className='article_img' src={article.article_img_url} alt={article.title} />
            </Link>
            <div className="stat">
                <CommentBtn link={"/articles/"+article.article_id+"#comments"} comments={article.comment_count} />
                <UpvoteBtn type="article" id={article.article_id} votes={article.votes} />
                {
                    // user.username === article.author? 
                    <div role="delete"><button value={article.article_id} onClick={(e)=>{}}> X </button></div>
                    // : <></>
                }
            </div>

        </>
    )
}