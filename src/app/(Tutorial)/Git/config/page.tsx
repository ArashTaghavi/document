/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='GIT'>
      <UL title='config'>
        <LI simple={false} title='global'>
          در سطح سیستم عامل برای یک یورر خاص.
        </LI>
        <LI simple={false} title='system'>
          در سطح سیستم عامل برای همه یوزر ها.
        </LI>
        <LI simple={false} title='local'>
          به ازای هر ریپازیتوری ست میشه.
        </LI>
        <LI simple={false} title='user.name'>
          <Code>git configl --global user.name "Arash Taghavi"</Code>
        </LI>
        <LI simple={false} title='user.email'>
          <Code>git configl --global user.name "Arash@gmail.com"</Code>
        </LI>
        <LI simple={false} title='list'>
          <Code>git configl --global --list"</Code>
          تمام کانفیگ هایی که ست کردیم رو نشون میده
        </LI>
        <LI simple={false}>
          <Code>git configl --global user.name"</Code>
          میتونیم مقدار ست شده رو برای مثلا user.name ببینیم.
        </LI>
      </UL>
    </PageTitle>
  )
}
