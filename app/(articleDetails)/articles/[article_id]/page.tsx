import CommentSection from "@/app/(articleDetails)/articles/[article_id]/CommentSection";
import ArticleDetails from "@/app/(articleDetails)/articles/[article_id]/ArticleDetails";
import { fetchArticleById } from "@/app/(articleDetails)/articles/callback";

export const dynamic = "force-dynamic";

export default async function Article({
    params
}: {
    params: {article_id: string}
}) {
    const articleId = +params.article_id;
    const {article} = await fetchArticleById(articleId);


    if (article) {
        return (
            <>
                <ArticleDetails article={article} />
                <CommentSection articleId={articleId} />
            </>
        )
    } else {
        return <p>The article is not existing at the moment.</p>
    }
}
