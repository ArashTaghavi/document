/** @format */

import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'

const Club1 = () => {
  const links: LinkItem[] = [
    {
      title: 'مقدمه',
      href: '/security/club-1/introduction'
    },
    {
      title: 'SQL Injection',
      href: '/security/club-1/sql-injection'
    },
    {
      title: 'کلوپ پیشرفته',
      href: '/security/club-advance'
    }
  ]

  return (
    <PageLayout
      title='کلوپ ۱'
      toc={links}
      breadcrumb={[
        { title: 'فهرست مستندات', href: '/' },
        { title: 'هک و امنیت', href: '/security' }
      ]}
    />
  )
}
export default Club1
