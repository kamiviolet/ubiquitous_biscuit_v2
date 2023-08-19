"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation"

const styles = {
    prevNext: "my-8 flex justify-around max-w-[200px] font-semibold text-[--text]",
    paginationLink: "pointer px-2 py-2 hover:bg-[--highlight] text-[--text]",
    pagination: "my-8 font-semibold text-[--text]"
}

export default function Pagination({count}:{count:number|null}) {
    const searchParams = useSearchParams();
    const p = Number(searchParams.get("p") ?? 1);
    const limit = Number(searchParams.get("limit") ?? 10);
    const totalPage = Math.ceil((count??1) / limit);

    return (
        <>
            <div className={styles.prevNext}>
                {p === 1? <></> 
                : <Link className={styles.paginationLink} href={`?p=${p-1}`}>&lt; Prev</Link>}
                {p === totalPage? <></> 
                : <Link className={styles.paginationLink} href={`?p=${p+1}`}>Next &gt;</Link>}
            </div>
            <p className={styles.pagination}>
                Page 
                <Link className={styles.paginationLink} href={`?p=${p-1}`}>
                    {p}
                </Link> / {totalPage}
            </p>
        </> 
    )
}