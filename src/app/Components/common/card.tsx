/** @format */
'use client'

import { ArrowDown, ArrowUp } from 'lucide-react';
import { useState } from 'react'

type PropTypes = { children: React.ReactNode; title?: string; simple?: boolean }

export default function Card({ children, title }: PropTypes) {
  const [open, setOpen] = useState<boolean>(false)

  const handleToggle = () => {
    setOpen(p => !p)
  }

  return (
    <div className='bg-gray-800 py-2 px-5 my-5 rounded-md shadow-md shadow-white/30'>
      <div className='flex justify-between'>
        <strong className='my-2'>{title}</strong>
        <button className='cursor-pointer' onClick={handleToggle}>
          {open ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
        </button>
      </div>
      <div className={open ? 'h-auto' : 'hidden'}>{children}</div>
    </div>
  )
}
