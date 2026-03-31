/** @format */

import { LinkItem } from '@/app/types'
import Link from 'next/link'
import { Toc } from '../Toc'
import { ReactNode } from 'react'

type PropTypes = {
  children?: ReactNode
  title: string
  subTitle?: string
  breadcrumb?: LinkItem[]
  toc?: LinkItem[]
}

export const PageLayout = ({ children, title, subTitle, breadcrumb, toc }: PropTypes) => {
  return (
    <>
      <div className='w-full bg-gradient-to-b from-indigo-700/70 via-indigo-700/30 to-transparent py-5'>
        <h1 className='text-3xl font-bold text-center'>{title}</h1>
        {subTitle && <h2 className='text-xl font-bold text-center mt-2'>{subTitle}</h2>}
      </div>
      {breadcrumb && (
        <div className='flex w-fit gap-x-2 px-5 py-3 '>
          {breadcrumb.map((b: LinkItem) => (
            <Link href={b.href} key={b.title}>
              {b.title} {'/'}
            </Link>
          ))}
          {title}
        </div>
      )}
      {toc && <Toc links={toc} />}
      <div className='px-5'>{children}</div>
    </>
  )
}
