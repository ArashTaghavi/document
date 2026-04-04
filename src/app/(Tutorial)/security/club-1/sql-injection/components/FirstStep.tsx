/** @format */

import { Code, Step } from '@/app/Components/common'
import { Card } from '@/app/Components/common'

export default function FirstStep({ url }: { url: string }) {
  return (
    <Card title='کشف آسیب پذیری SQL Injection'>
      <Step type='GOAL'>تزریق کاراکتر مخرب (کوتیشن) به کوئری و سعی در ایجاد خطا در نتیجه کوئری.</Step>
      <Step type='METHOD'>
        <p>با قرار دادن کاراکتر تک کوتیشتن در انتهای url کار را شروع می کنیم.</p>
        <Code>{`${url}'`}</Code>
      </Step>

      <Step type='DESCRIPTION'>
        تزریق کوتیشن در کوئری باعث ایجاد خطای سینتکسی در بک اند می شود. با انجام این کار و دریافت خطا اطمینان حاصل می
        کنیم که دیتای ارسالی از طریق کاربر (در اینجا id) بدون فیلتر شدن وارد دستورات کوئری می شود.
      </Step>

      <Step type='RESULT'>
        در صورتی که تعداد آیتم های نمایش داده شده در سایت تغییر کند، یا خطایی روی صفحه مشاهده شود و یا بصورت کلی در
        صورتی که با اضافه کردن کوتیشن به انتهای url تغییری در نوع نمایش صفحه نسبت به حالت بدون کوتیشن مشاهده شود احتمال
        وجود آسیب پذیری SQL Injection وجود دارد .
      </Step>

      <Step type='QUERY'>
        <Code>{"1) Before Quate: $query = 'SELECT id, name, category_id from posts WHERE id = 10'"} </Code>
        <Code>{"2) After Quate: $query = 'SELECT id, name, category_id from posts WHERE id = 10''"}</Code>

        <p>
          در حالت دوم قرار گرفتن دو کوتیشن پشت سر یکدیگر باعث بروز خطای سینتکسی و تغییر نتیجه کوئری می شود‌(در صورت وجود
          آسیب پذیری SQL Injection)
        </p>
      </Step>
    </Card>
  )
}
