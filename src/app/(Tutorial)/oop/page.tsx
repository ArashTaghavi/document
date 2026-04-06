/** @format */

import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'

const Oop = () => {
  const links: LinkItem[] = [
    {
      title: 'فصل اول',
      href: '/oop/01'
    },
    {
      title: 'فصل دوم',
      href: '/oop/02'
    }
  ]

  return <PageLayout title='هنر شی گرایی' toc={links} breadcrumb={[{ title: 'فهرست مستندات', href: '/' }]} />
}
export default Oop
