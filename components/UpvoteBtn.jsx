import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { useState } from "react";

const styles = {
    voteStat: "flex justify-between items-center px-4 py-1 bg-white border border-slate-400",
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
            {currVotes}
        </button>
    )
}