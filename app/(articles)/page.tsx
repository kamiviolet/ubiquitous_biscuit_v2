import ArticleList from './ArticleList';
import FilterSorter from "./FilterSorter";
import Pagination from "./Pagination";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  return (
    <div className="h-full w-full grid place-items-center">
        <FilterSorter />
        <ArticleList />
        <Pagination />
    </div>
  )
}
