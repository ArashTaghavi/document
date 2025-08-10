/** @format */

import { PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='آشنایی با انواع حملات و مثلث های امنیت '>
      <UL title='انواع حمله'>
        <LI title='دسترسی و برداشت' simple={false}>
          هکر قصد داره یه سری اطلاعات رو برداره. مثلا یه هکر به بانک نفوذ میکنه و میخواد پول برداره.
        </LI>
        <LI title='تغییر دادن اطلاعات سرویس' simple={false}>
          توو این حالت هکر میخواد مثلا به سیستم دانشگاه نفوذ کنه و نمراتشو دستکاری کنه.
        </LI>
        <LI title='مختل کردن سرویس' simple={false}>
          توو این حالت هکر میخواد یه سرویس رو از دسترسی خارج کنه. مثلا هکر میاد انقدر پکت میفرسته به سایت اپل که سایت
          دیگه نتونه به بقیه مشتری ها سرویس بده. یعنی الکی سر سرور رو شلوغ میکنه. DOS و DDOS
        </LI>
      </UL>
      <UL title='مثلث CIA'>
        <LI title='C ( Confidentialy )'>محرمانگی: جلوگیری از دسترسی غیرمجاز به اطلاعات.</LI>
        <LI title='I ( Integrity )'>یکپارچگی: اطمینان از اینکه داده‌ها بدون تغییر یا خراب شدن حفظ میشن.</LI>
        <LI title='A ( Availability )'>دسترس‌پذیری: اطمینان از اینکه اطلاعات و سیستم‌ها در زمان نیاز در دسترس باشن.</LI>
      </UL>
      <UL title='مثلث ...'>
        <LI>سرچ</LI>
      </UL>
    </PageTitle>
  )
}
