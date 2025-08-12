/** @format */

import { Item, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='DNS Records'>
      <table className='table-auto border-collapse border w-full text-sm text-center mt-5'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>نام رکورد</th>
            <th className='border px-4 py-2'>اسم کامل</th>
            <th className='border px-4 py-2'>مخفف</th>
            <th className='border px-4 py-2'>توضیح کاربرد</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-4 py-2'>رکورد آدرس آی‌پی</td>
            <td className='border px-4 py-2'>Address Record</td>
            <td className='border px-4 py-2'>A</td>
            <td className='border px-4 py-2'>
              نگاشت یک نام دامنه به آدرس IPv4. مثلاً وقتی شما در مرورگر می‌زنید <code>example.com</code>، این رکورد IP
              واقعی سرور را برمی‌گرداند، مثلاً <code>93.184.216.34</code>.
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>رکورد آدرس آی‌پی نسخه ۶</td>
            <td className='border px-4 py-2'>IPv6 Address Record</td>
            <td className='border px-4 py-2'>AAAA</td>
            <td className='border px-4 py-2'>
              نگاشت نام دامنه به آدرس IPv6 که نسخه جدیدتر پروتکل اینترنت است. برای مثال <code>example.com</code>{' '}
              می‌تواند به آدرسی مانند <code>2606:2800:220:1:248:1893:25c8:1946</code> اشاره کند.
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>رکورد نام مستعار</td>
            <td className='border px-4 py-2'>Canonical Name Record</td>
            <td className='border px-4 py-2'>CNAME</td>
            <td className='border px-4 py-2'>
              این رکورد یک نام دامنه را به نام دامنه دیگر ارجاع می‌دهد. مثلاً <code>www.example.com</code> می‌تواند یک
              CNAME به <code>example.com</code> داشته باشد تا در واقع به همان IP اشاره کند.
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>رکورد سرور ایمیل</td>
            <td className='border px-4 py-2'>Mail Exchange Record</td>
            <td className='border px-4 py-2'>MX</td>
            <td className='border px-4 py-2'>
              مشخص می‌کند ایمیل‌های ارسالی به دامنه توسط کدام سرورها دریافت شوند. مثلا <code>10 mail.example.com</code>{' '}
              یعنی اولویت ۱۰ به سرور mail.example.com داده شده است.
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>رکورد سرویس</td>
            <td className='border px-4 py-2'>Service Record</td>
            <td className='border px-4 py-2'>SRV</td>
            <td className='border px-4 py-2'>
              تعریف سرویس‌های خاص برای دامنه به همراه پورت آن‌ها، مثلا مشخص کردن سرور و پورت برای سرویس‌های پیام‌رسان یا
              ویپ. مثال: <code>_sip._tcp.example.com</code> اشاره به سرویس SIP در پروتکل TCP دارد.
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>رکورد نام معکوس</td>
            <td className='border px-4 py-2'>Pointer Record</td>
            <td className='border px-4 py-2'>PTR</td>
            <td className='border px-4 py-2'>
              نگاشت برعکس، یعنی آدرس IP را به نام دامنه برمی‌گرداند. این برای تایید هویت سرورها و کاربردهای امنیتی مهم
              است. مثلاً <code>34.216.184.93.in-addr.arpa</code> به <code>example.com</code> اشاره می‌کند.
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>رکورد متنی</td>
            <td className='border px-4 py-2'>Text Record</td>
            <td className='border px-4 py-2'>TXT</td>
            <td className='border px-4 py-2'>
              ذخیره اطلاعات متنی دلخواه برای دامنه، مثل تایید دامنه، سیاست‌های SPF، DKIM برای ایمیل و غیره. مثال:{' '}
              <code>"v=spf1 include:_spf.google.com ~all"</code> برای مشخص کردن سرورهای مجاز ارسال ایمیل.
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>رکورد سرور نام</td>
            <td className='border px-4 py-2'>Name Server Record</td>
            <td className='border px-4 py-2'>NS</td>
            <td className='border px-4 py-2'>
              مشخص کردن سرورهای DNS مسئول برای دامنه. این رکورد تعیین می‌کند کدام سرورها پاسخگوی درخواست‌های DNS برای
              دامنه هستند. مثال: <code>ns1.exampledns.com</code>.
            </td>
          </tr>
        </tbody>
      </table>
    </PageTitle>
  )
}
