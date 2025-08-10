/** @format */

'use client'
import { useState } from 'react'
import { PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'
import { Search } from '@/app/Components/Search/search'
import Link from 'next/link'
import { LinkItem } from '@/app/types'
const BaseUrl = '/CEH/1-Introduction/'
export default function Page() {
  const initialLinks: LinkItem[] = [
    { title: 'هک چیست و هکر کیست؟', href: `${BaseUrl}who-is-hacker` },
    { title: 'آشنایی با انواع هکر ها ', href: `${BaseUrl}introduction-to-types-of-hackers` },
    { title: 'آشنایی با انواع پروژه های تست نفوذ ', href: `${BaseUrl}introduction-to-types-of-pentest` },
    { title: 'پنج مرحله تست نفوذ', href: `${BaseUrl}five-stages-of-penetration` },
    {
      title: 'آشنایی با اصطلاحات پایه حوزه هک و امنیت',
      href: `${BaseUrl}introduction-to-basic-termsin-hacking-and-cybersecurity`
    },
    {
      title: 'آشنایی با انواع حملات و مثلث های امنیت',
      href: `${BaseUrl}introduction-to-types-of-attacks-and-security-triads`
    },
    {
      title: 'آشنایی با انواع بد افزارها و نحوه عملکرد آن ها',
      href: `${BaseUrl}introduction-to-types-of-malware-and-how-they-work`
    }
  ]

  const [links, setLinks] = useState<LinkItem[]>(initialLinks)

  return (
    <PageTitle title='فصل یکم - آشنایی با حوزه امنیت اطلاعات' subTitle='Introduction of Ethical Hacking'>
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
