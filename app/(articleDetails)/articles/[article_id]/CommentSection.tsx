import ListOfComments from "./ListOfComments";
import NewCommentForm from "./NewCommentForm";
import { getCurrentUser } from "@/app/auth/current-user/callback";

const styles = {
    commentContainer: "text-left relative grid",
}

export default async function CommentSection({articleId}: {articleId: number}) {
    const user = await getCurrentUser();

    return (
        <section id="comments" className={styles.commentContainer}>
            <NewCommentForm
                articleId={articleId}
                currentUser={user?.user_metadata.username}
            />
            <ListOfComments
                articleId={articleId}
                currentUser={user?.user_metadata.username}
            />
        </section>
    )
}