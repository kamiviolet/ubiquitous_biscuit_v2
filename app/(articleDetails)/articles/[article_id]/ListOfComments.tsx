import { fetchCommentFromDb } from "../callback";
import { convertDate } from "@/utils/convert";
import { HiUser } from "react-icons/hi2";
import UpvoteBtn from "@/components/UpvoteBtn";

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
                        <li key={"comment_" + comment.comment_id} className='comment_card'>
                            <div className="avatar" role="avatar">
                                <HiUser />
                            </div>
                            <p role="comment_id" aria-hidden>
                                {comment.comment_id}
                            </p>
                            <p role="comment_body" aria-roledescription="comment_body">
                                {comment.body}
                            </p>
                            <span>
                                {comment.author}
                            </span>
                            <p role="date" aria-roledescription="created_at">
                                {convertDate(comment.updated_at)}
                            </p>
                            <UpvoteBtn type="comment" id={comment.comment_id} votes={comment.votes} />
                            {currentUser === comment.author
                            ? <div role="delete"><button value={comment.comment_id}> X </button></div> 
                            : <></>}
                        </li>
                    )
                })}
            </ul>
            </section>
        )
    }
}