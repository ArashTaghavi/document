/** @format */

import { Item, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='nslookup'>
      <table className='table-auto border-collapse border w-full text-sm text-center mt-5'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>مثال</th>
            <th className='border px-4 py-2'>دستور</th>
            <th className='border px-4 py-2'>توضیح</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-4 py-2'>پیدا کردن آدرس IP یک دامنه</td>
            <td className='border px-4 py-2'>
              <code>nslookup example.com</code>
            </td>
            <td className='border px-4 py-2'>نمایش آدرس IPv4 یا IPv6 مربوط به دامنه example.com</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>جستجوی رکورد MX (سرور ایمیل)</td>
            <td className='border px-4 py-2'>
              <code>nslookup -query=mx gmail.com</code>
            </td>
            <td className='border px-4 py-2'>نمایش سرورهای ایمیل دریافت‌کننده ایمیل‌های دامنه gmail.com</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>استفاده از سرور DNS خاص</td>
            <td className='border px-4 py-2'>
              <code>nslookup example.com 8.8.8.8</code>
            </td>
            <td className='border px-4 py-2'>
              استفاده از سرور DNS گوگل (8.8.8.8) برای پرس‌وجوی DNS به جای سرور پیش‌فرض سیستم
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>جستجوی رکورد TXT</td>
            <td className='border px-4 py-2'>
              <code>nslookup -query=txt example.com</code>
            </td>
            <td className='border px-4 py-2'>نمایش رکوردهای متنی مثل SPF و DKIM دامنه example.com</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>جستجوی رکورد NS (سرور نام)</td>
            <td className='border px-4 py-2'>
              <code>nslookup -query=ns example.com</code>
            </td>
            <td className='border px-4 py-2'>نمایش سرورهای DNS مسئول دامنه example.com</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>بررسی معکوس (Reverse Lookup)</td>
            <td className='border px-4 py-2'>
              <code>nslookup 8.8.8.8</code>
            </td>
            <td className='border px-4 py-2'>تبدیل آدرس IP وارد شده به نام دامنه مربوط به آن (Reverse DNS)</td>
          </tr>
        </tbody>
      </table>
    </PageTitle>
  )
}
