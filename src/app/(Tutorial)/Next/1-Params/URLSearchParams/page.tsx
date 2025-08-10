/** @format */

'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function SearchComponent() {
  // const searchParams = useSearchParams()
  // const query = searchParams.get('q') || ''

  // useEffect(() => {
  //   console.log('Component rendered, query value:', query)
  // }, [query])

  // const handleClickWithRerender = () => {
  //   alert(query)
  // }

  // const handleClick = () => {
  //   const params = new URLSearchParams(window.location.search)
  //   const q = params.get('q') || ''
  //   alert(q)
  // }

  return (
    <div>
      {/* <button className='py-2 px-5 rounded-2xl bg-sky-400 m-2' onClick={handleClick}>
        Change query string without re-render
      </button>

      <button className='py-2 px-5 rounded-2xl bg-sky-400 m-2' onClick={handleClickWithRerender}>
        Change query string with useSearchParams
      </button>
      <p>Query: {query}</p> */}
    </div>
  )
}
