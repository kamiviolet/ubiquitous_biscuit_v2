import UpvoteBtn from "@/components/UpvoteBtn";
import CommentBtn from "@/components/CommentBtn";
import { convertDate } from "@/utils/convert";
import CommentSection from "./CommentSection";
import { fetchArticleById } from "../../callback";


const styles = {
    article_id: "absolute top-0 right-0 m-4 text-left before:content-['#']",
    article_img: "w-2/3 md:w-[500px] h-auto md:h-[350px] object-cover mx-auto my-4",
    title: "font-black",
    body: "font-[1.15em] my-4 leading-6",
    topic: "text-right capitalize radius-[5px] p-2 justify-self-start",
    author: "before:content-['By'] before:mr-2 italic",
    stat: " py-2 w-[150px] gap-4 flex justify-between justify-self-end",
    date: "",
    delete: "px-4 py-1 bg-rose-300 text-red-600 font-black border-red-400"
}

export default async function ArticleDetails({
    params
}: {
    params: {article_id: string}
}) {
    const articleId = Number(params.article_id);
    const article = await fetchArticleById(articleId);
    
    return (
        <>
            <h2 className="my-4 text-2xl font-extrabold">
                {article?.title}
            </h2>
            <img
                className={styles.article_img}
                src={article?.article_img_url??""}
                alt={article?.title} />
            <p className={`${styles.topic} ${article?.topic}`}>
                {article?.topic}
            </p>
            <p className={styles.article_id}>
                {article?.article_id}
            </p>
            <p className={styles.body}>
                {article?.body}
            </p>
            <p className={styles.date}>
                <span>{article?.author}</span> | 
                <span> {convertDate(article?.created_at)}</span>
            </p>
            <div className={styles.stat}>
                <CommentBtn link="#comments" comments={article?.comments[0].count} />
                <UpvoteBtn type="article" id={article?.article_id} votes={article?.votes} />
            </div>
            <CommentSection articleId={articleId} />
        </>
    )
}
