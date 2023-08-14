import { fetchCommentFromDb } from "@/app/(articleDetails)/articles/callback"
import { convertDate } from "@/utils/convert";
import UpvoteBtn from "@/components/UpvoteBtn";
import { HiUser } from "react-icons/hi2";

const styles = {
    commentCard: "bg-[--midlayer] p-4 my-5 w-full grid grid-cols-[35px_125px_auto] gap-3",
    commentId: "col-start-1 row-start-1 before:content-['#']",
    commentBody: "col-start-3 break-all",
    avatar: "col-start-2 w-[125px] h-[125px] grid bg-gray-200",
    default_avatar: "bg-white border border-slate-500 text-6xl place-content-center",
    author: "col-start-2 row-start-2 text-center font-semibold",
    date: "col-start-3 row-start-2",
    btnWrapper: "col-start-3 row-start-2 justify-self-end w-[100px] flex justify-end",
    deleteBtn: "bg-red-300 text-red-800 border border-red-800 px-4 py-1 mx-6 font-black"
}

export default async function listOfComments({
    currentUser="", articleId
}:{
    currentUser: string, articleId:number
}) {
    const {listOfComments} = await fetchCommentFromDb(articleId)
    if (listOfComments){
        return (
            <section className='list_of_comments'>
            <h3>Comments</h3>
            <ul>
                {listOfComments.map(comment => {
                    return (
                        <li key={"comment_" + comment.comment_id} className={styles.commentCard}>
                            <div className={`${styles.avatar} ${styles.default_avatar}`}>
                                <HiUser />
                            </div>
                            <p className={styles.commentId} aria-hidden>
                                {comment.comment_id}
                            </p>
                            <p className={styles.commentBody}>
                                {comment.body}
                            </p>
                            <span className={styles.author} >
                                {comment.author}
                            </span>
                            <p className={styles.date} >
                                {convertDate(comment.updated_at)}
                            </p>
                            <div className={styles.btnWrapper}>
                                {currentUser === comment.author
                                ? <button className={styles.deleteBtn} value={comment.comment_id}> X </button>
                                : <></>}
                                <UpvoteBtn type="comment" id={comment.comment_id} votes={comment.votes} />
                            </div>
                        </li>
                    )
                })}
            </ul>
            </section>
        )
    }
}