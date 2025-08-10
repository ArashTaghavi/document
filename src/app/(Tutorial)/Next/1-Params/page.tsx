/** @format */

export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Params({ searchParams }: { searchParams: SearchParams }) {
  const filters = await searchParams

  console.log(filters)
}
