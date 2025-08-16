/** @format */

import { PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Composer'>
      <UL>
        <LI simple={false} title='classmap'>
          توی فایل composer.json استفاده شده. مطالعه
        </LI>
        <LI simple={false} title='Semantic Versionion'>
          <strong>MAJOR</strong>: version when you make incompatible API changes
          <br />
          <strong>MINOR</strong>: version when you add functionality in a backward compatible manner
          <br />
          <strong>PATCH</strong>: version when you make backward compatible bug fixes
        </LI>
        <LI simple={false} title='^ and ~'>
          <strong>^</strong>: عدد اول ورژن فیکس و دو عدد بعدی میتونن تا ماکزیمم بالا برن ( ^ → اجازه ارتقا مینور (minor)
          و پچ (patch). )
          <br />
          <strong>~</strong>: عدد اول و دوم فیکس و عدد سوم تا ماکزیمم میتونه بالا بره ( فقط اجازه ارتقا پچ در همون
          مینور. )
        </LI>
        <LI simple={false} title='composer install and composer update'>
          <strong>composer update</strong>: از روی composer.json میره پکیج هارو اپدیت و نصب میکنه.
          <br />
          <strong>composer install</strong>: از روی composer.lock میره عینا پکیج های نصب شده قبلی رو پیدا میکنه و نصب
          میکنه
        </LI>
      </UL>
    </PageTitle>
  )
}
