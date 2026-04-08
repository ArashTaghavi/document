/** @format */

import { useMemo } from 'react'

type PropTypes = { children: React.ReactNode; title?: string; simple?: boolean }

export default function LI({ children, title, simple = true }: PropTypes) {
  const styles = useMemo(
    () =>
      !simple
        ? 'bg-gray-700 rounded-md shadow-sm shadow-white/30'
        : '',
    [simple]
  )

  return (
    <li className={`${styles} py-2 px-5 mb-2 m-1`}>
      {title && <strong className='text-xl'>{title}</strong>}
      {title && <span className='text-xl'>: </span>}
      {children}
    </li>
  )
}
