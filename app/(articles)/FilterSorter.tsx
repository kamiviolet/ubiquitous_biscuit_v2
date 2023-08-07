"use client"

const styles = {
    form: "w-full bg-[--foreground] color-[--text] text-sm text-left py-3 px-4",
    select: "py-2 m-2 radius-0 bg-white border border-slate-300",
    button: "py-2 px-4 m-2 border border-slate-500 radius-0 hover:border-[--btn-background-hover]",
    reset: "bg-red-700 text-white",
    sort: "bg-slate-300"
}

export default function FilterSorter() {
    // const {p, limit} = params;
    // const [sort, setSort] = useState("created_at");
    // const [order, setOrder] = useState("desc");
    // const [customLimit, setCustomLimit] = useState(10);
    // const [page, setPage] = useState(1);
    // const totalPage = Math.ceil(total_count / limit);

    // const handleFilter = (e) => {
    //     e.preventDefault();
    //     setParams({sort_by: sort, order:order, limit:customLimit, p:page})
    // }

    // const handleReset = (e) => {
    //     e.preventDefault();
    // }

    return (
        <form className={styles.form} id="filter_sorter" action="" onSubmit={e=>{console.log(e)}} >
            <label htmlFor="sort">Sort By
                <select className={styles.select} value="" name="sort_by" onChange={e=>{console.log(e)}}>
                    <option value="created_at">Date created</option>
                    <option value="comment_count">comment count</option>
                    <option value="votes">votes</option>
                </select>
            </label>
            <label htmlFor="order">Order By
                <select className={styles.select} value="" name="order" onChange={e=>{console.log(e)}}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </label>
            <label>Articles shown per page
                <select className={styles.select} value="" onChange={e=>{console.log(e)}}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="">All</option>
                </select>
            </label>
            <label>Jump to Page
            <select className={styles.select} value="" onChange={e=>{console.log(e)}}>
                    {Array.apply(null, Array(10)).map((p, i)=>{
                        return <option key={"page_"+i} value={i+1}>{i+1}</option>
                    })}
                </select>
            </label>
            <button className={`${styles.button} ${styles.sort}`} type="submit">Sort</button>
            <button className={`${styles.button} ${styles.reset}`} type="reset">Reset</button>
        </form>
    )
}