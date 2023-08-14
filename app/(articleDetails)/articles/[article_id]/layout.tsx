import PrevBtn from "@/components/PrevBtn";

const styles = {
    article_wrapper: "text-left relative grid",
}

export default function ArticlePageLayout({children
}: {
  children: React.ReactNode
}) {
    return (
        <>
            <div className="p-8 bg-[--foreground]">
                <article className={styles.article_wrapper}>
                <PrevBtn />
                    { children }
                </article>
            </div>
        </>
    )
}