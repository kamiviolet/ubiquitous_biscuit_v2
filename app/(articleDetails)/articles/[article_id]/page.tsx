import UpvoteBtn from "@/components/UpvoteBtn";
import CommentBtn from "@/components/CommentBtn";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { convertDate } from "@/utils/convert";


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
    const supabase = createServerComponentClient({cookies});

    const article_id = +params.article_id;
    const { data } = await supabase.from("articles").select("*").eq("article_id", article_id);
    
    if (data) {
        return (
            <>
                <h2 className="my-4 text-2xl font-extrabold">
                    {data[0].title}
                </h2>
                <img
                    className={styles.article_img}
                    src={data[0].article_img_url}
                    alt={data[0].title} />
                <p className={`${styles.topic} ${data[0].topic}`}>
                    {data[0].topic}
                </p>
                <p className={styles.article_id}>
                    {data[0].article_id}
                </p>
                <p className={styles.body}>
                    {data[0].body}
                </p>
                <p className={styles.date}>
                    <Link href={"/users/"+data[0].author}>{data[0].author}</Link> | 
                    <span> {convertDate(data[0].created_at)}</span>
                </p>
                <div className={styles.stat}>
                    <CommentBtn link="#comments" comments={data[0].comment_count} />
                    <UpvoteBtn type="article" id={data[0].article_id} votes={data[0].votes} />
                </div>
            </>
        )
    }
}
