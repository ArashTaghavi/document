/** @format */

import { ReactNode } from 'react'

export default function AiDescription({ children }: { children: ReactNode }) {
  return <div className='bg-gray-50 border-1 rounded-md p-3 my-2'>{children}</div>
}
