import { BsFillChatSquareDotsFill } from "react-icons/bs";

export default function CommentBtn({link, comments}) {
    
    return (
        <button
            onClick={()=>{}}
            role="comment_no"
            aria-roledescription="number_of_comments">
                <BsFillChatSquareDotsFill /> {comments}
        </button>
    )
}