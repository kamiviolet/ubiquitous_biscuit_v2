"use client"

import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { useState } from "react";

const styles = {
    voteStat: "bg-blue-800 text-white flex justify-start items-center px-4 py-1 border border-blue-500",
}

export default function UpvoteBtn({type, id, votes}) {
    const [currVotes, setCurrVotes] = useState(votes);
    const [haveVoted, setHaveVoted] = useState(false);
    
    const handleVotes = () => {
        if (haveVoted) {
            setHaveVoted(false);
            setCurrVotes((currVotes) => currVotes - 1)

            // if (type === "article") {
            //     updateVotesByArticleId(id, -1).then(({article}) => setCurrVotes(article.votes))
            // }
            // if (type === "comment") {
            //     updateVotesByCommentId(id, -1).then(({comment}) => setCurrVotes(comment.votes))
            // }
        } else {
            setHaveVoted(true);
            setCurrVotes((currVotes) => currVotes + 1)

            // if (type === "article") {
            //     updateVotesByArticleId(id, 1).then(({article}) => setCurrVotes(article.votes))
            // }
            // if (type === "comment") {
            //     updateVotesByCommentId(id, 1).then(({comment}) => setCurrVotes(comment.votes))
            // }
        }
    }

    return (
        <button
            className={
                (haveVoted)? `${styles.voteStat} voted` 
                : `${styles.voteStat} default`
            }
            onClick={handleVotes}>
            <BsFillHandThumbsUpFill />
            <span className="px-2">{currVotes}</span>
        </button>
    )
}