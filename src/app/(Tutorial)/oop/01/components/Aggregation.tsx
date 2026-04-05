/** @format */

import { Bold, Card } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Aggregation() {
  return (
    <Card title='Aggregation (vs Composition)'>
      <UL title='Composition'>
        <LI>وابستگی قوی‌تر</LI>
        <LI>جزءها معمولاً بدون کل معنی ندارند</LI>
        <LI>عمر جزءها معمولاً به عمر کل وابسته است</LI>
      </UL>
      <p>
        <Bold>مثال: </Bold>
        یک خانه و اتاق‌هایش، اگر خانه نابود شود، اتاق‌ها هم دیگر به‌عنوان «جزء آن خانه» معنا ندارند.
      </p>
      <UL title='Aggregation'>
        <LI>وابستگی ضعیف تر</LI>
        <LI>جزءها می‌توانند مستقل از کل هم وجود داشته باشند</LI>
        <LI>عمر جزءها معمولاً به عمر کل وابسته است</LI>
        <LI>کل فقط به آن‌ها اشاره یا استفاده می‌کند</LI>
      </UL>
      <p>
        <Bold>مثال: </Bold>
        تیم فوتبال و بازیکن، بازیکن می‌تواند بدون آن تیم هم وجود داشته باشد، تیم فقط از بازیکن استفاده می‌کند، مالک
        مطلقش نیست.
      </p>
      <div className='mt-3'>
        <p>
          مثال واضح تر از <code>Aggregation </code>
          به این صورت است که می توانیم از سرویس ارسال پیامک در سرویس ثبت سفارش استفاده کنیم. سرویس ارسال پیامک بصورت
          مستقل نیز می تواند هرجایی استفاده شود.
        </p>
        <p>
          مثال واضح تر از <code>Composition </code>
          به این صورت است که از کلاس <code>Profile</code> که عملیات تغییرات <code>User</code> را مدیریت می کند در کلاس
          <code>User</code> استفاده کنیم. کلاس <code>Profile</code> فقط در صورت وجود کلاس <code>User</code> معنی دارد.
        </p>
      </div>
    </Card>
  )
}
