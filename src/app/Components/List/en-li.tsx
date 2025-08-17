/** @format */

import { useMemo } from 'react'

type PropTypes = { children: React.ReactNode; title?: string; simple?: boolean }

export default function EnLi({ children, title, simple = false }: PropTypes) {
  const styles = useMemo(
    () =>
      !simple
        ? 'bg-gray-700 px-5 m-1 rounded-md shadow-sm shadow-white/30 mb-2'
        : 'py-2 px-5 m-1 underline underline-offset-8 mb-2 decoration',
    [simple]
  )

  return (
    <li className={styles + 'text-left'} dir='ltr'>
      {title && <strong className='text-xl'>{title}</strong>}
      {title && <span className='text-xl'>: </span>}
      <span>{children}</span>
    </li>
  )
}
