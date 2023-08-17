import { User } from "@/types/types";
import NewArticleForm from "./NewArticleForm";
import { getCurrentUser } from "../auth/current-user/callback";

export default async function ListOfArticleLayout({children}: {
  children: React.ReactNode
}) {
  const user:User|undefined = await getCurrentUser();

  return (
    <>
      {children}
      <NewArticleForm user={user} />
    </>    
  )
}