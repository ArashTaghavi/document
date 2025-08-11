/** @format */

import { Item, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Google Hacking'>
      <UL>
        <LI title='Google dork' simple={false}>
          گوگل دورک (Google Dork یا Google Dorking) یعنی استفادهٔ پیشرفته از قابلیت‌های جستجوی گوگل برای پیدا کردن
          اطلاعاتی که معمولاً به صورت عمومی در دسترس نیست، ولی به دلیل تنظیمات اشتباه یا بی‌احتیاطی مدیران سایت‌ها، توسط
          گوگل ایندکس شده‌اند.
        </LI>
        <LI simple={false} title='Dork های پر کاربرد'>
          <div className='flex justify-between mt-2' dir='ltr'>
            <Item>site:</Item>
            <Item>intitle:""</Item>
            <Item>inurl:</Item>
            <Item>intext:</Item>
            <Item>filetype:</Item>
          </div>
          <p className='mt-3'>برای بقیه دورک ها و کاربردشون سرچ...</p>
        </LI>
      </UL>
    </PageTitle>
  )
}
