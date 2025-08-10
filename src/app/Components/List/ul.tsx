/** @format */

import React from 'react'

type PropTypes = { children: React.ReactNode; title?: string }

export default function UL({ children, title }: PropTypes) {
  return (
    <div className='p-5 m-5 mb-2 bg-gray-900 rounded-md shadow-md shadow-white/30'>
      {title && <h2 className='font-extrabold text-2xl mb-5'>{title}</h2>}
      <ul>{children}</ul>
    </div>
  )
}
