import { fetchArticleById } from "@/app/(articleDetails)/articles/callback";

const styles = {
  articleFormWrapper: "w-inherit grid place-items-center py-4 px-10 mt-14 bg-[--foreground]",
  articleForm: "my-4 grid gap-4 md:grid-cols-[max(100px)_min(500px)] md:grid-rows-[auto_auto_auto_auto] md:place-items-start text-left",
  articleBodyArea: "border border-slate-400 bg-[--midlayer] y-[500px] w-full break-word resize-none h-[300px]",
  imgUrl: "col-start-1 md:col-span-2 w-full",
  inputBox: "bg-[--midlayer] text-[--text] py-1 border border-slate-400 justify-self-stretch",
  inputKey: "font-semibold text-[--text]",
  button: "md:col-span-2 justify-self-center mt-4 bg-green-700 text-white h-fit w-[150px] px-2 py-2 hover:bg-[--highlight] hover:text-black transition"
}

export default async function page({
  params
}: {
  params: {article_id: string}
}) {
    const articleId = +params.article_id;
    const {article} = await fetchArticleById(articleId);

    if (article) {

    return (
    <div id="post_article_page">
        <div className={styles.articleFormWrapper}>
          <h2 className="text-2xl font-semibold uppercase text-left">Edit</h2>
          <form
            className={styles.articleForm}
            action={`/articles/${articleId}/edit-article`}
            method="post">
              <input className="hidden" defaultValue={articleId} name="article_id" />
              <label
                  htmlFor="author_deco"
                  className={styles.inputKey}>
                  Author
              </label>
              <input
                  className={`${styles.inputBox} text-gray-500`}
                  defaultValue={article.author}
                  name="author_deco"
                  disabled
              />
              <label
                  htmlFor="topic"
                  className={`${styles.inputKey} required`}>
                  Topic
              </label>
              <input
                  className={`${styles.inputBox} text-gray-500`}
                  defaultValue={article.topic}
                  name="topic"
                  disabled
              />
              <label
                  htmlFor="title"
                  className={`${styles.inputKey} required`}>
                  Title
              </label>
              <input
                  name="title"
                  defaultValue={article.title}
                  className={styles.inputBox}
                  required
              />
              <label
                  htmlFor="article_body"
                  className={`${styles.inputKey} required`}>
                  Body
              </label>
              <textarea
                  className={styles.articleBodyArea}
                  name="article_body"
                  defaultValue={article.body}
                  required
              />
              <button className={styles.button}>Post</button>
            </form>
        </div>
    </div>
    )}
}
