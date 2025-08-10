/** @format */

import { PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='آشنایی با اصطلاحات پایه حوزه هک و امنیت'>
      <UL>
        <LI title='Target' simple={false}>
          قربانی
        </LI>
        <LI title='Bug' simple={false}>
          حفره
        </LI>
        <LI title='Vulnerability' simple={false}>
          آسیب پذیری
        </LI>
        <LI title='Exploit' simple={false}>
          بهره برداری. یعنی یه روشی پیدا کنیم که از اون آسیب پذیری رد شیم.
        </LI>
        <LI title='Payload' simple={false}>
          محموله
        </LI>
        <LI title='Zero Day' simple={false}>
          روز صفر
        </LI>
        <LI title='Chaining' simple={false}>
          حمله های توو در توو. مثلا میخوام به سایت نفوذ کنم ولی نمیتونم. میرم به سابدامین هاش نفوذ میکنم. از سابدامین
          میرم توی سایت. از سایت میرم توی سرور و...
        </LI>
        <LI title='Path' simple={false}>
          رفع آسیب پذیری
        </LI>
        <LI title='Backdoor' simple={false}>
          در پشتی
        </LI>
      </UL>
    </PageTitle>
  )
}
