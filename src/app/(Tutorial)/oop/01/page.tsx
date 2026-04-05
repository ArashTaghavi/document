/** @format */

import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'
import { Compare, Encapsulation, MagicValues } from './components'

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: 'فهرست مستندات', href: '/' },
    { title: 'هنر شی گرایی', href: '/security' }
  ]

  return (
    <PageLayout title='مقدمه' breadcrumb={breadcrumb}>
      <Compare />
      <Encapsulation />
      <MagicValues />
    </PageLayout>
  )
}
