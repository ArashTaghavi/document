/** @format */

import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'

const Security = () => {
  const links: LinkItem[] = [
    {
      title: 'کلوپ ۱',
      href: '/security/club-1'
    },
    {
      title: 'کلوپ ۲',
      href: '/security/club-2'
    },
    {
      title: 'کلوپ پیشرفته',
      href: '/security/club-advance'
    }
  ]

  return <PageLayout title='هک و امنیت' toc={links} breadcrumb={[{ title: 'فهرست مستندات', href: '/' }]} />
}
export default Security
