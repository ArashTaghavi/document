/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Unit Test' subTitle='Depend on abstractions, not on concreation'>
      <UL>
        <LI simple={false} title='https://travis-ci.org'>
          واسه اینکه تست هامون رو با ورژن های مختلف لاراول و php تست کنیم که توو نسخه های مختلف مشکلی نداشته باشه.
        </LI>
      </UL>
    </PageTitle>
  )
}
