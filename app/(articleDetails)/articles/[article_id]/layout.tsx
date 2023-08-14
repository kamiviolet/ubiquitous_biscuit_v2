import PrevBtn from "@/components/PrevBtn";

const styles = {
    article_container: "p-8 bg-[--foreground] w-[1024px]",
}

export default function ArticlePageLayout({params, children
}: {
    params: {article_id: string}
    children: React.ReactNode
}) {
    return (
        <div className={styles.article_container}>
            <PrevBtn />
            { children }
        </div>
    )
}