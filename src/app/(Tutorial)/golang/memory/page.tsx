/** @format */

import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'
import Stack from './components/Stack'
import { GarbageCollector, Heap, Pointer, Summary } from './components'

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: 'فهرست مستندات', href: '/' },
    { title: 'Golang', href: '/golang' }
  ]

  return (
    <PageLayout title='حافظه' breadcrumb={breadcrumb}>
      <Pointer />
      <Stack />
      <Heap />
      <GarbageCollector />
      <Summary />
    </PageLayout>
  )
}
