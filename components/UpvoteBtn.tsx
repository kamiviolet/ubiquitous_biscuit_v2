"use client"

import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { usePathname, useRouter } from "next/navigation";

const styles = {
    voteStat: "flex justify-start items-center px-4 py-1 border border-blue-500",
}

export default function UpvoteBtn({
    type, id, votes
}: {
    type: string
    id: number
    votes: number
}) {
    const supabase = createClientComponentClient();
    const [loading, setLoading] = useState(true);
    const [haveVoted, setHaveVoted] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const updateVotes = async (type:string, id:number, vote:number, inc:boolean) => {
        const idColumn = type == "articles"? "article_id" : "comment_id";
        const returnVal = inc ? vote+1 : vote-1;

        try {
            setLoading(true);

            let {data, error} = await supabase
                .from(type)
                .update({votes: returnVal})
                .eq(idColumn, id)
            if (error) throw error;
            alert("voted successfully!")
        } catch (error) {
            alert("please check console for error message!")
            console.log(error)
        } finally {
            setLoading(false);
            router.push(pathname)
        }
    }
    
    return (
        <button
            className={
                (haveVoted)? `${styles.voteStat} voted` 
                : `${styles.voteStat} default`
            }
            onClick={()=>updateVotes(type, id, votes, haveVoted)}>
            <BsFillHandThumbsUpFill />
            <span className="px-2">{votes}</span>
        </button>
    )
}