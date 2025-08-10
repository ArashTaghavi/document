/** @format */

import { UL, LI } from '../../Components/List'
import { PageTitle, TextNote } from '../../Components/common'

export default function Page() {
  return (
    <>
      <PageTitle title='پروتکل های شبکه' />

      <UL title='NAT Service'>
        <LI title='NAT ( Network Address Translation )'>
          NAT یا Network Address Translation یک فناوری در شبکه است که آدرس IP مبدأ یا مقصد بسته‌های داده را تغییر
          می‌دهد. این مکانیزم معمولاً در روترها یا فایروال‌ها به کار می‌رود تا ارتباط بین شبکه‌ی داخلی (private) و
          اینترنت (public) برقرار شود.
          <UL title='هدف های اصلی NAT' simple>
            <LI title='کاهش مصرف آدرس‌های عمومی IPv4'>-</LI>
            <LI title='افزایش امنیت شبکه‌های داخلی'>-</LI>
            <LI title='اتصال چندین دستگاه داخلی به اینترنت با یک IP عمومی'>-</LI>
          </UL>
        </LI>

        <LI title='PAT ( Port Address Translation )'>
          PAT یا Port Address Translation نوع خاصی از NAT است که به آن NAT Overload هم می‌گویند.
          <br />
          در PAT، همه دستگاه‌های داخل شبکه از یک IP عمومی مشترک استفاده می‌کنند، اما هر کدام با شماره پورت متفاوت شناخته
          می‌شوند.
          <br />
          فرض کنید 3 دستگاه در شبکه داخلی بخواهند هم‌زمان به اینترنت وصل شوند. روتر برای هر اتصال، آدرس IP عمومی یکسان
          را با پورت‌های متفاوت مثل زیر استفاده می‌کند:
          <br />
          192.168.1.2:1234 → 185.15.55.20:5001
          <br />
          192.168.1.3:1234 →185.15.55.20:5002
          <br />
          192.168.1.4:1234 → 185.15.55.20:5003
          <br />
          با این کار، همه از یک IP عمومی استفاده کرده‌اند ولی پورت‌ها مجزاست.
          <div className='flex justify-center'>
            <TextNote important size='text-md'>
              اختصاص پورت به هر دستگاه باعث می شود با وجود IP پابلیک یکسان بتوانیم پاسخ هایی که از درخواست ها دریافت می
              شود را تفکیک کنیم و دقیقا به همان دستگاه درخواست کننده ارسال کنیم.
            </TextNote>
          </div>
          <UL title='هدف های اصلی NAT' simple>
            <LI title='کاهش مصرف آدرس‌های عمومی IPv4'>-</LI>
            <LI title='افزایش امنیت شبکه‌های داخلی'>-</LI>
            <LI title='اتصال چندین دستگاه داخلی به اینترنت با یک IP عمومی'>-</LI>
          </UL>
        </LI>
        <LI title='SNAT ( Source Nat )'>
          Source NAT (SNAT) نوعی از NAT است که آدرس IP مبدأ بسته‌ها را تغییر می‌دهد. این روش معمولاً برای ارسال ترافیک
          از شبکه داخلی به خارج (مثلاً اینترنت) استفاده می‌شود.
        </LI>
        <LI title='DNAT ( Destination Nat )'>
          Destination NAT یعنی تغییر آدرس مقصد بسته‌های ورودی به شبکه.
          <br />
          مثال:
          <br />
          IP عمومی شما: 203.0.113.10
          <br />
          سرور وب داخل شبکه: 192.168.1.100
          <br />
          وقتی کسی از اینترنت به 203.0.113.10 درخواست می دهد DNAT این درخواست را می فرستد به 192.168.1.100.
          <br />
          این درخواست ها می توانند روی پورت های مختلفی ارسال شوند.
          <UL title='کاربرد اصلی' simple>
            <LI title='دسترسی کاربران اینترنت به سرورهای داخلی'>-</LI>
            <LI title='Port Forwarding (مثلاً هدایت پورت 80 به سرور وب)'>-</LI>
            <LI title='دسترسی به سرویس‌ هایی که داخل شبکه خصوصی هستن'>-</LI>
          </UL>
          <div className='flex justify-center'>
            <TextNote important size='text-md'>
              DNAT معمولاً برعکس SNAT هست، که SNAT آدرس مبدأ را تغییر می دهد، ولی DNAT آدرس مقصد را.
            </TextNote>
          </div>
        </LI>
        <LI title='مقایسه سریع'>
          <table className='table-auto border-collapse border text-md text-center mt-3'>
            <thead>
              <tr>
                <th className='border px-4 py-2'>ویژگی</th>
                <th className='border px-4 py-2'>NAT</th>
                <th className='border px-4 py-2'>PAT</th>
                <th className='border px-4 py-2'>Source NAT (SNAT)</th>
                <th className='border px-4 py-2'>Destination NAT (DNAT)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border px-4 py-2'>نوع ترجمه</td>
                <td className='border px-4 py-2'>IP</td>
                <td className='border px-4 py-2'>IP + پورت</td>
                <td className='border px-4 py-2'>IP مبدأ</td>
                <td className='border px-4 py-2'>IP مقصد</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>تعداد IP عمومی لازم</td>
                <td className='border px-4 py-2'>چندتا یا یکی</td>
                <td className='border px-4 py-2'>یک عدد کافی است</td>
                <td className='border px-4 py-2'>معمولاً یکی</td>
                <td className='border px-4 py-2'>معمولاً یکی</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>مورد استفاده</td>
                <td className='border px-4 py-2'>عمومی برای ترجمه IP‌ها</td>
                <td className='border px-4 py-2'>اتصال چند دستگاه با یک IP</td>
                <td className='border px-4 py-2'>ارسال ترافیک داخلی به بیرون</td>
                <td className='border px-4 py-2'>هدایت ترافیک ورودی به سرورهای داخلی</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>جهت ترافیک</td>
                <td className='border px-4 py-2'>دوطرفه یا یک‌طرفه</td>
                <td className='border px-4 py-2'>خروجی (از داخل به بیرون)</td>
                <td className='border px-4 py-2'>خروجی (از داخل به بیرون)</td>
                <td className='border px-4 py-2'>ورودی (از بیرون به داخل)</td>
              </tr>
            </tbody>
          </table>
        </LI>
      </UL>
    </>
  )
}
