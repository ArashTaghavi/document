/** @format */
'use client'

import { useParams, useSearchParams } from 'next/navigation'

export default function Param() {
  const params = useParams<{ slug: string }>()
  const { slug } = params

  /* ! useSearchParams is only use in sync component */
  const searchParams = useSearchParams()
  const filters = searchParams.get('q')

  console.log('Slug:', slug, 'SearchParams(q):', filters)
}
