/** @format */

'use client'
import { useState } from 'react'
import { PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'
import { Search } from '@/app/Components/Search/search'
import Link from 'next/link'
import { LinkItem } from '@/app/types'

export default function Page() {
  const initialLinks: LinkItem[] = [
    {
      title: 'Nextjs',
      href: 'Next'
    },
    {
      title: 'Tailwind',
      href: 'Tailwind'
    },
    {
      title: 'Network + ',
      href: 'Network'
    },
    {
      title: 'CEH',
      href: 'CEH'
    },
    {
      title: 'Docker',
      href: 'Docker'
    },
    {
      title: 'Kubernetes',
      href: 'Kubernetes'
    }
  ]

  const [links, setLinks] = useState<LinkItem[]>(initialLinks)

  return (
    <PageTitle title='آموزش Docker'>
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
