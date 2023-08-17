import UpvoteBtn from "@/components/UpvoteBtn";
import { Comment } from "@/types/types";
import { convertDate } from "@/utils/convert";
import { HiUser } from "react-icons/hi2";
import { deleteComment } from "../callback";

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


export default function CommentContainer({
  comment, currentUser
}: {
  comment: Comment, currentUser: string
}) {

  return (
    <li
      className={styles.commentCard}
    >
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
        ? <form action={deleteComment}>
            <input type="number" name="comment_id" defaultValue={comment.comment_id} className="hidden" /><button className={styles.deleteBtn}>X</button> </form>
        : <></>}
      <UpvoteBtn
        type="comments"
        id={comment.comment_id}
        votes={comment.votes}
      />
    </div>
  </li>
  )
}