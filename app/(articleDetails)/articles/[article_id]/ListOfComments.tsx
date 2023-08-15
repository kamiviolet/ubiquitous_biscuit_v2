import { fetchCommentFromDb } from "@/app/(articleDetails)/articles/callback";
import CommentContainer from "./CommentContainer";

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
                {listOfComments.map(comment => <CommentContainer comment={comment} currentUser={currentUser} />)}
            </ul>
            </section>
        )
    }
}