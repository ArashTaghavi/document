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
      title: 'تعاریف Containerization ,Virtualization ,Bare Metal',
      href: '/Docker/1-Introduction'
    },
    {
      title: 'مقایسه معماری Monolithic و Microservice',
      href: '/Docker/1'
    },
    {
      title: 'بررسی اجزا Container (Engine ,Image ,Runtime)',
      href: '/Docker/2'
    },
    {
      title: 'مقایسه داکر و رقبا (ContainerD ,Rkt ,Cri-o ,Podman)',
      href: '/Docker/3'
    },
    {
      title: 'معماری داکر',
      href: '/Docker/4'
    },
    {
      title: 'خلاصه فصل',
      href: '/Docker/5'
    }
  ]

  const [links, setLinks] = useState<LinkItem[]>(initialLinks)

  return (
    <PageTitle title='معرفی و مقایسه'>
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
