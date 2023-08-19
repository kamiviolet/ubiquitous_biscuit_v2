import { User } from "@/types/types";
import NewArticleForm from "../../NewArticleForm";
import { getCurrentUser } from "@/app/auth/current-user/callback";

export const metadata = {
  title: "Post new article - Cookiess! Forum"
}

export default async function PostArticle() {
  const user:User|undefined = await getCurrentUser();

  return <NewArticleForm user={user} />
}