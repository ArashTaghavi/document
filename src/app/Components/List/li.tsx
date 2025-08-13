/** @format */

import { useMemo } from 'react'

type PropTypes = { children: React.ReactNode; title?: string; simple?: boolean }

export default function LI({ children, title, simple = true }: PropTypes) {
  const styles = useMemo(
    () =>
      !simple
        ? 'bg-gray-700 py-2 px-5 m-1 rounded-md shadow-sm shadow-white/30 mb-2'
        : 'py-2 px-5 m-1 underline underline-offset-8 mb-2 decoration',
    [simple]
  )

  return (
    <li className={styles}>
      {title && <strong className='text-xl underline underline-offset-8'>{title}</strong>}
      {title && <span className='text-xl'> :</span>}
      <span>{children}</span>
    </li>
  )
}
