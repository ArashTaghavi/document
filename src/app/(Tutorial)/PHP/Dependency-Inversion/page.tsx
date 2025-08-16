/** @format */

import { PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Dependecy Inversion'>
      <UL>
        <LI simple={false} title='High Level Module'>
          ماژولی که سایر ماژول ها روی اون نصب میشن. مثلا ویندوز یه High Level Module و فوتوشاپی که روش نصب میشه یه Low
          Level Moudle محسوب میشه.
        </LI>
        <LI simple={false} title='Low Level Module'>
          ماژولی که روی یک سیستم نصب می شود. مثلا فوتوشاپ روی ویندوز
        </LI>
        <LI simple={false} title='Abstractions'>
          ویدیو ۱۱
        </LI>
        <LI simple={false} title='Runtime Dependency'>
          <p>توی فولدر 01</p>
          توی فایل Monitor.php وابستگی به $keyboard, $disk و $cpu وجود داره. این وابستگی توو Runtime خودشو نشون میده.
          <br/>
          این اوکیه. چون برعکسش بی معنیه. مورد پایینی رو باید هندل کنیم
        </LI>
        <LI simple={false} title='Compile Dependency (coding time)'>
          <p>توی فولدر 01</p>
          توی کلاس Monitor توی متد turnOn وابستگی به متد های save و add و... وجود داره. یعنی مادربورد به خودی خود کار
          خاصی نمیکنه و این متد های توش هستن که دارن یه کارایی میکنن.
        </LI>
        <LI simple={false} title='تشخیص عدم رعایت Dependency Inversion'>
          <p>توی فولدر 01</p>
          توی دو مورد بالا جهت وابستگی از سمت High Level Module به سمت Low Level Module هست که نشون میده Dependecy
          Inversion رعایت نشده.
          
        </LI>
        <LI simple={false} title='Folder 02'>
          توی فولدر 02 از KeyboardInterface استفاده شده این یعنی اینکه بدون اینکه لازم باشه ما پیاده سازی ای از Keyboard
          داشته باشیم کدمون رو فقط و فقط به یک اینترفیس وابسته کردیم که اوکیه. یعنی این کد موقع کامپایل خطا نمیده.
          <br />
          در واقع اومدیم کاری کردیم که ورودی $keyboard توی Motherboard بجای اینکه به یک کلاس Keyboard با پیاده سازی متد
          هاش وابسته باشه اومدیم وابسته ش کردیم به یک KeyboardInterface که متد هاشم طبیعتا پیاده سازی نشده و سبک تر هست
          واسه کامپایل.
          <br />
          از طرفی اومدیم کلاس Keyboard رو هم از KeyboardInterface ایمپلیمنت کردیم. در واقعا الان نه توی Keyboard و نه
          توی Monitor اسمی از هم برده نشده. بلکه توو هرکدومشون از یک اینفرفیس یا abstraction استفاده شده.
        </LI>
      </UL>
    </PageTitle>
  )
}
