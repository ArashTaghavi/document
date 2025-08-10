/** @format */

import { SearchParams } from '../page'
type Params = Promise<{ slug: string }>

export default async function Param({ searchParams, params }: { searchParams: SearchParams; params: Params }) {
  const filters = await searchParams
  const { slug } = await params
  
  console.log(`Slug: ${slug}`, 'SearchParams:', filters)
}
