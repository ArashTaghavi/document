/** @format */

import { PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Active and Passive'>
      <UL>
        <LI title='Active' simple={false}>
          این متد جمع آوری اطلاعات به این صورت هست که واسطه ای بین ما و قربانی وجود نداره.یعنی ما مستقیما از روی سرو
          قربانی دیتا به دست میاریم.
        </LI>
        <LI title='Passive' simple={false}>
          این متد جمع آوری اطلاعات به این صورته که ما غیر مستقیم از قربانی دیتا جمع آوری می کنیم. مثلا میریم توی گوگل
          سرچ میکنیم و میفهمیم فرضا آدرس قربانی توی تهرانه و...{' '}
        </LI>
      </UL>
    </PageTitle>
  )
}
