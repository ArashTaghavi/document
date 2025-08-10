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
      title: 'فصل یکم - آشنایی با حوزه امنیت اطلاعات ( Introduction of Ethical Hacking )',
      href: '/CEH/1-Introduction'
    },
    { title: 'فصل دوم - راه اندازی آزمایشگاه و ابزار های مورد نیاز ( Launch Laboratory )', href: '1' },
    { title: 'فصل سوم - جمع آوری اطلاعات از قربانی ( Footprinting and Reconnaissance )', href: '2' },
    { title: 'فصل چهارم - اسکن شبکه ها ( Network Scanning )', href: '3' },
    { title: 'فصل پنجم - سرشماری ( Enumeration )', href: '4' },
    { title: 'فصل ششم - آنالیز آسیب پذیری ها ( Vulnerability Analysis )', href: '5' },
    { title: 'فصل هفتم - هک کردن سیستم ها ( System Hacking )', href: '6' },
    { title: 'فصل هشتم - تهدیدات بد افزار ها ( Malware Threats )', href: '7' },
    { title: 'فصل نهم - شنود ( Sniffing )', href: '8' },
    { title: 'فصل دهم - مهندسی اجتماعی ( Social Engineering )', href: '9' }
  ]

  const [links, setLinks] = useState<LinkItem[]>(initialLinks)

  const onSearch = (value: string) => {
    setLinks(initialLinks.filter(link => link.title.includes(value)))
  }

  return (
    <PageTitle title='دوره آموزش CEH'>
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
