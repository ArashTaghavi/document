/** @format */

import { PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='جمع آوری اطلاعات از یک شخص'>
      <UL>
        <LI title='Active' simple={false}>
          این متد جمع آوری اطلاعات به این صورت هست که واسطه ای بین ما و قربانی وجود نداره.یعنی ما مستقیما از روی سرو
          قربانی دیتا به دست میاریم.
        </LI>
      </UL>
    </PageTitle>
  )
}
