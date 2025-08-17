/** @format */

import { useMemo } from 'react'

type PropTypes = { children: React.ReactNode }

export default function TextRTL({ children }: PropTypes) {
  return (
    <p className='text-right' dir='rtl'>
      {children}
    </p>
  )
}
