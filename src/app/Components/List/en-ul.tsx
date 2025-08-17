/** @format */

import React from 'react'

type PropTypes = { children: React.ReactNode; title?: string; underlined?: boolean }

export default function EnUL({ children, title, underlined = true }: PropTypes) {
  return (
    <div
      className='p-5 m-5 mb-2 bg-gray-900 rounded-md shadow-md shadow-white/30 text-left border break-after-page'
      dir='ltr'>
      {title && (
        <h2 className={`font-extrabold text-2xl mb-5 ${underlined ? 'underline underline-offset-4' : ''}`}>{title}</h2>
      )}
      <ul>{children}</ul>
    </div>
  )
}
