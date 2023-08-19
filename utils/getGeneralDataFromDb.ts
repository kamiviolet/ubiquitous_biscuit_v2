import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Topic } from "@/types/types";

export const getAllTopicsFromDb = async():Promise<Topic[]> => {
  const supabase = createServerComponentClient({ cookies });
  
  const { data: allTopics }: PostgrestSingleResponse<Topic[]> = await supabase.from("topics").select();

  return allTopics?? [{slug: "not found", description: ""}];
}
