import CommentBtn from "@/components/CommentBtn";
import { Article } from "@/types/types";
import { convertDate } from "@/utils/convert";

const styles = {
    article_innerWrapper: "text-left relative grid",
    article_title: "my-4 text-2xl font-extrabold",
    article_id: "absolute top-0 right-0 m-4 text-left before:content-['#']",
    article_img: "w-2/3 min-w-[250px] min-h-[200px] sm:w-[500px] sm:h-[350px] object-cover mx-auto my-4 bg-slate-400",
    title: "font-black",
    body: "font-[1.15em] my-4 leading-6",
    topic: "text-right capitalize radius-[5px] p-2 justify-self-start",
    author: "before:content-['By'] before:mr-2 italic",
    stat: " py-2 w-max gap-4 flex justify-between justify-self-end",
    date: "",
    delete: "px-4 py-1 bg-rose-300 text-red-600 font-black border-red-400"
}

export default function ArticleDetails({article}:{article:Article}) {
  return (
    <article className={styles.article_innerWrapper}>
        <h2 className={styles.article_title}>
            {article.title}
        </h2>
        <img
            className={styles.article_img}
            src={article.article_img_url??""}
            alt={article.title} />
        <p className={`${styles.topic} ${article.topic}`}>
            {article.topic}
        </p>
        <p className={styles.article_id}>
            {article.article_id}
        </p>
        <p className={styles.body}>
            {article.body}
        </p>
        <p className={styles.date}>
            <span>{article.author}</span> | 
            <span> {convertDate(article.created_at)}</span>
        </p>
        <div className={styles.stat}>
            <CommentBtn link="#comments" comments={article.comments[0].count} />
        </div>
    </article>
  )
}