import CommentSection from "./CommentSection";
import { fetchArticleById } from "../callback";
import ArticleDetails from "./ArticleDetails";

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
                <ArticleDetails article={article[0]} />
                <CommentSection articleId={articleId} />
            </>
        )
    }
}
