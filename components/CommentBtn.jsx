import { BsFillChatSquareDotsFill } from "react-icons/bs";

const styles = {
    commentStat: "flex justify-between items-center px-4 py-1 bg-white border border-slate-400",
}

export default function CommentBtn({link, comments}) {
    
    return (
        <button className={styles.commentStat} onClick={()=>{}}>
                <BsFillChatSquareDotsFill /> {comments}
        </button>
    )
}