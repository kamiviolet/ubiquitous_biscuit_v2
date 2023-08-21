"use client"

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const styles = {
    form: "w-full bg-[--foreground] text-[--text] text-sm text-left py-3 px-4",
    select: "text-black py-2 m-2 radius-0 bg-white border border-slate-300",
    button: "py-2 px-4 m-2 border border-slate-500 radius-0 bg-[--btn-background] hover:border-[--btn-background-hover]",
    reset: "bg-red-700 text-white",
}

export default function FilterSorter({count}:{count:number|null}) {
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("p") ?? 1);
    const limit = Number(searchParams.get("limit") ?? 10);
    const totalPage = Math.ceil((count?? 1) / limit);

    const router = useRouter();
    const [sort, setSort] = useState("created_at");
    const [order, setOrder] = useState("desc");
    const [customLimit, setCustomLimit] = useState(10);
    const [page, setPage] = useState(currentPage);

    const handleFilter = (e:React.FormEvent) => {
        e.preventDefault();
        router.push(`?sort_by=${sort}&order=${order}&limit=${customLimit}&p=${page}`)
    }

    const handleReset = (e:React.FormEvent) => {
        e.preventDefault();
        setSort("created_at");
        setOrder("desc");
        setCustomLimit(10);
        setPage(1);
    }

    return (
        <form className={styles.form} id="filter_sorter" onSubmit={handleFilter} onReset={handleReset} >
            <label htmlFor="sort">Sort By
                <select className={styles.select} value={sort} name="sort_by" onChange={e=>setSort(e.target.value)}>
                    <option value="created_at">Date created</option>
                    <option value="author">Author name</option>
                    <option value="article_id">Article ID</option>
                    <option value="comment_count">Comment count</option>
                </select>
            </label>
            <label htmlFor="order">Order By
                <select className={styles.select} value={order} name="order" onChange={e=>setOrder(e.target.value)}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </label>
            <label>Articles shown per page
                <select className={styles.select} value={customLimit} onChange={e=>setCustomLimit(+e.target.value)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            </label>
            <label>Jump to Page
            <select className={styles.select} value={page} onChange={e=>setPage(+e.target.value)}>
                    {Array.apply(null, Array(totalPage)).map((p, i)=>{
                        return <option key={"page_"+i} value={i+1}>{i+1}</option>
                    })}
                </select>
            </label>
            <button className={`${styles.button}`} type="submit">Search</button>
            <button className={`${styles.button} ${styles.reset}`} type="reset">Reset</button>
        </form>
    )
}