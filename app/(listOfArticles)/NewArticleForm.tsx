import { User } from "@/types/types";
import { getAllTopicsFromDb } from "@/utils/getGeneralDataFromDb";

const styles = {
    articleFormWrapper: "w-inherit grid place-items-center py-4 px-10 mt-14 bg-[--foreground]",
    articleForm: "my-4 grid gap-4 md:grid-cols-[max(100px)_min(500px)] md:grid-rows-[auto_auto_auto_auto] md:place-items-start text-left",
    articleBodyArea: "border border-slate-400 bg-[--midlayer] y-[500px] w-full break-all resize-none h-[300px]",
    imgUrl: "col-start-1 md:col-span-2 w-full",
    inputBox: "bg-[--midlayer] text-[--text] py-1 border border-slate-400",
    inputKey: "font-semibold text-[--text]",
    button: "md:col-span-2 justify-self-center mt-4 bg-green-700 text-white h-fit w-[150px] px-2 py-2 hover:bg-[--highlight] hover:text-black transition"
}

export default async function NewArticleForm({
    user
}: {
    user: User|undefined
}) {
    const allTopics = await getAllTopicsFromDb();

    if (allTopics)
    return (
    <div id="post_article_page">
        <div className={styles.articleFormWrapper}>
            <h2 className="text-2xl font-semibold uppercase text-left">Post a new article</h2>
            <form
              className={styles.articleForm}
              action="/articles/post-article"
              method="post">
                <input
                    className="hidden"
                    name="author_id"
                    defaultValue={user?.id} />
                <input
                    className="hidden" 
                    defaultValue={user?.user_metadata.username}
                    name="author"
                />
                <label
                    htmlFor="author"
                    className={styles.inputKey}>
                    Author
                </label>
                <input
                    className={`${styles.inputBox} text-gray-500`}
                    defaultValue={user?.user_metadata.username}
                    name="author_deco"
                    disabled
                />
                <label
                    htmlFor="topic label"
                    className={`${styles.inputKey} required`}>
                    Topic
                </label>
                <select
                    name="topic"
                    className={styles.inputBox}
                >
                    <option></option>
                    {allTopics.map(topic => {
                        return (
                            <option
                                key={"postNewArticleIn_"+topic.slug}
                                value={topic.slug}>
                                    {topic.slug[0].toUpperCase()+topic.slug.substring(1)}
                            </option>
                        )
                    })}
                </select>
                <label
                    htmlFor="title"
                    className={`${styles.inputKey} required`}>
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    className={styles.inputBox}
                    required
                />
                <label
                    htmlFor="article_body"
                    className={`${styles.inputKey} required`}>
                    Body
                </label>
                <textarea
                    className={styles.articleBodyArea}
                    name="article_body"
                    required
                />
                <label
                    htmlFor="article_img"
                    className={`${styles.imgUrl} ${styles.inputKey}`}>
                    Illustration<br />
                    (Providing images can help to boost the popularity of your article)
                </label>
                <input
                    className={` ${styles.imgUrl} ${styles.inputBox}`}
                    name="article_img"
                    placeholder='https://'
                    type="url"
                />
                <button className={styles.button}>Post</button>
            </form>
        </div>
    </div>
)
}