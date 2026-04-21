/** @format */

import { Card, Item } from '@/app/Components/common'
import { LI, SimpleLI, SimpleUL, UL } from '@/app/Components/List'
import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'
import { AOT, ByteCode, JIT, Profiling, Summary } from './components'
import { Items } from './data'

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: 'فهرست مستندات', href: '/' },
    { title: 'Golang', href: '/golang' }
  ]

  return (
    <PageLayout title='اصطلاحات و مفاهیم' breadcrumb={breadcrumb}>
      <Card title='تعاریف'>
        {Items.map(item => (
          <UL title={item.title} key={item.title}>
            {item.body.map(body => (
              <LI title={body.title} key={body.title}>
                <SimpleUL>
                  <SimpleLI title='تعریف'>{body.definition}</SimpleLI>
                  <SimpleLI title='هدف'>{body.purpose}</SimpleLI>
                </SimpleUL>
              </LI>
            ))}
          </UL>
        ))}
      </Card>
      <AOT />
      <Profiling />
      <ByteCode />
      <JIT />
    </PageLayout>
  )
}
