/** @format */

import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'
import { DTO, Entity, Event, Exception, ValueObject, Consistency } from './components'

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: 'فهرست مستندات', href: '/' },
    { title: 'هنر شی گرایی', href: '/oop' }
  ]

  return (
    <PageLayout title='فصل سوم' breadcrumb={breadcrumb}>
      <DTO />
      <ValueObject />
      <Entity />
      <Event />
      <Exception />
      <Consistency />
    </PageLayout>
  )
}
