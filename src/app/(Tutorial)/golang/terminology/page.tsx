/** @format */

import { Bold, Card, Code } from '@/app/Components/common'
import { SimpleLI, SimpleUL } from '@/app/Components/List'
import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'
import { AOT, ByteCode, JIT, Profiling } from './components'

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: 'فهرست مستندات', href: '/' },
    { title: 'Golang', href: '/golang' }
  ]

  return (
    <PageLayout title='اصطلاحات و مفاهیم' breadcrumb={breadcrumb}>
      <Card title='تعاریف پایه ای'>
        <SimpleUL>
          <SimpleLI title='Compile'>یعنی تبدیل کد سورس (مثلاً C#, Java, Kotlin) به یک فرم میانی یا ماشین.</SimpleLI>
          <SimpleLI title='Execute'>یعنی اجرای واقعی برنامه توسط CPU.</SimpleLI>
          <SimpleLI title='Hot Path'>
            بخشی از مسیر اجرای برنامه که در زمان اجرا، بیشترین تکرار یا بیشترین مصرف CPU را دارد. به بیان ساده تر، کدی
            که یا زیاد اجرا می شود یا زمان زیادی از برنامه می گیرد.
          </SimpleLI>
        </SimpleUL>
      </Card>
      <AOT />
      <Profiling />
      <ByteCode />
      <JIT />
    </PageLayout>
  )
}
