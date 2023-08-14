import ListOfComments from './ListOfComments'
import NewCommentForm from './NewCommentForm'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';

const styles = {
    commentContainer: "text-left relative grid",
}

export default async function CommentSection({articleId}: {articleId: number}) {
    const supabase = createServerComponentClient({cookies});
    const {data: {session}} = await supabase.auth.getSession();
    
    // const [listOfComments, setListOfComments] = useState([]);
    // const [newComment, setNewComment] = useState({
    //     username: currentUser.username,
    //     body: ""
    // });
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     fetchCommentsByArticleId(article_id)
    //         .then(({comments}) => setListOfComments(comments))
    //         .then(()=>setIsLoading(false))
    // }, [])

    // if (isLoading) {
    //     return  <div className='loading_page'>Fetching comments...</div>
    // }

    return (
        <section id="comments" className={styles.commentContainer}>
            {/* <NewCommentForm
                user={currentUser.username}
                article_id={article_id}
                newComment={newComment}
                listOfComments={listOfComments}
                setNewComment={setNewComment}
                setListOfComments={setListOfComments}
            /> */}
            <ListOfComments
                articleId={articleId}
                currentUser={session?.user.user_metadata.username}
            />
        </section>
    )
}