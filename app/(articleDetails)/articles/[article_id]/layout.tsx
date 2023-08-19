import PrevBtn from "@/components/PrevBtn";
import { Metadata } from "next";
import { fetchArticleById } from "../callback";

const styles = {
    article_container: "p-8 bg-[--foreground] w-full",
}

export async function generateMetadata({params}:{
    params: {article_id: string}
}):Promise<Metadata> {
    const {article_id} = params;
    const {article} = await fetchArticleById(+article_id);

    return {
        title: `${article?.title} By ${article?.author} -Cookiess Forum`
    }
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