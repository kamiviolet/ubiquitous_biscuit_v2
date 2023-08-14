"use client"

import { BsFillChatSquareDotsFill } from "react-icons/bs";

const styles = {
    commentStat: "flex justify-start items-center px-4 py-1 bg-white border border-slate-400",
}

export default function CommentBtn({
    link, comments
}: {
    link: string, comments: number
}) {
    
    return (
        <button className={styles.commentStat} onClick={()=>{}}>
                <BsFillChatSquareDotsFill />
                <span className="px-2">{comments}</span>
        </button>
    )
}