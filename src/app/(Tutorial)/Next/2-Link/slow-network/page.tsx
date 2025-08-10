/** @format */

'use client'

import Link from 'next/link'
import LoadingIndicator from './slow-network-loading-indicator'

export default function Nav() {
  return (
    <div className='flex gap-5 m-5'>
      <Link className='px-4 py-2 rounded-lg bg-sky-400' href='/page1'>
        Page 1
        <LoadingIndicator />
      </Link>
      <Link className='px-4 py-2 rounded-lg bg-sky-400' href='/page2'>
        Page 2
        <LoadingIndicator />
      </Link>
      <Link className='px-4 py-2 rounded-lg bg-sky-400' href='/page3'>
        Page 3
        <LoadingIndicator />

      </Link>
    </div>
  )
}
