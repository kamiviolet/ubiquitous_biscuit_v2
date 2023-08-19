import { HiUser } from "react-icons/hi2";

const styles = {
    newComment: "min-h-[100px] grid grid-cols-[1fr_3fr_1fr] grid-rows-[auto_1fr_auto_1fr_1fr_1fr] py-8 px-4 place-items-center gap-4 mb-4",
    avatar: "text-4xl row-start-1 row-span-6 col-start-1 text-slate-700 h-[100px] w-[100px] flex place-items-center place-content-center bg-gray-200 border border-slate-700",
    authorLabel: "row-start-1 col-start-2 col-span-2 justify-self-start",
    warning: "after:content-['*'] after:mx-2 after:text-red-700",
    inputField: "border border-slate-400 justify-self-stretch",
    author: "row-start-2 col-start-2 col-span-2 justify-self-start align-self-start h-[30px]  disabled:bg-gray-300",
    commentLabel: "row-start-3 col-start-2 col-span-2 justify-self-start",
    commentBody: "row-start-4 row-span-2 col-start-2 col-span-2 sm:row-start-4 sm:row-span-2 sm:col-start-2 place-self-stretch resize-none disabled:bg-gray-300",
    submitBtn: "row-start-6 col-start-2 justify-self-start mt-4 bg-green-700 text-white h-fit max-w-[150px] px-2 py-2 disabled:bg-gray-300 disabled:text-gray-800 disabled:cursor-not-allowed"
}

export default function NewCommentForm({
    articleId, currentUser
}: {
    articleId: number
    currentUser: string | null
}) {

    return (
        <form
            className={styles.newComment}
            data-test="new_comment_form"
            action={`/articles/${articleId}/post-comment`}
            method="post"
            >
            <div className={styles.avatar}>
                <HiUser />
            </div>
            <input defaultValue={currentUser??""} className="hidden" name="user" />
            <input defaultValue={articleId} className="hidden" name="article_id" />
            <label
                htmlFor="author"
                className={`${styles.authorLabel} required`}
            >
                Username: 
                {currentUser? <></> 
                : <span className={styles.warning}>(Please log in to use comment function)</span>}
            </label>
            <input
                className={`${styles.inputField} ${styles.author}`}
                name="author"
                id="author"
                type="text"
                value={currentUser??"/"}
                disabled
            />
            <label
                htmlFor="comment"
                className={`${styles.commentLabel} required`}
            >
                Comment:
            </label>
            <textarea
                className={`${styles.inputField} ${styles.commentBody}`}
                name="body"
                id="comment"
                disabled={currentUser? false: true}
                required
            />
            <button
                className={styles.submitBtn}
                disabled={currentUser? false: true}
            >
                Add comment
            </button>
        </form>
    )
}