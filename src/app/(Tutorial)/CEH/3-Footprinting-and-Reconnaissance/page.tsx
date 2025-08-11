/** @format */

'use client'
import { useState } from 'react'
import { PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'
import { Search } from '@/app/Components/Search/search'
import Link from 'next/link'
import { LinkItem } from '@/app/types'
const BaseUrl = '/CEH/3-Footprinting-and-Reconnaissance/'
export default function Page() {
  const initialLinks: LinkItem[] = [
    { title: 'Active And Passive', href: `${BaseUrl}active-passive` },
    {
      title: 'جمع آوری اطلاعات از یک شخص ',
      href: `${BaseUrl}collect-information-from-person`
    },
    { title: 'جمع آوری اطلاعات از یک سازمان یا شرکت ', href: `${BaseUrl}collect-information-from-company` },
    { title: 'Google Hacking', href: `${BaseUrl}google-hacking` },
    { title: 'موتور جستجوی Shodan', href: `${BaseUrl}shodan` }
  ]

  const [links, setLinks] = useState<LinkItem[]>(initialLinks)

  return (
    <PageTitle title='فصل سوم - جمع آوری اطلاعات از قربانی' subTitle='Footprinting and Reconnaissance'>
      <div className='container mx-auto'>
        <Search initialLinks={initialLinks} setLinks={setLinks} />
        <UL>
          {links.map(link => (
            <LI key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </LI>
          ))}
        </UL>
      </div>
    </PageTitle>
  )
}
