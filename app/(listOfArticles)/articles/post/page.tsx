import { User } from "@/types/types";
import NewArticleForm from "../../NewArticleForm";
import { getCurrentUser } from "@/app/auth/current-user/callback";

export default async function page() {
  const user:User|undefined = await getCurrentUser();

  return <NewArticleForm user={user} />
}