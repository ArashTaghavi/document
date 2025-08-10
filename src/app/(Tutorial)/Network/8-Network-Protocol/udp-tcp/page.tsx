/** @format */

import { PageTitle, TextNote } from '../../Components/common'
import { LI, UL } from '../../Components/List'
import threeWayHandShakeImage from '../../assets/images/three-way-handshake.png'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <PageTitle title='پروتکل های شبکه' />
      <UL title='TCP / UDP'>
        <LI title='TCP ( Transmission Control Protocol )'>
          برای ارسال داده ها بدون خطا. مثلا انتقال اطلاعات یک فرم یا دانلود یک فایل که بیت به بیت آن اهمیت دارد. سرعت
          انتقال کم است/
        </LI>
        <LI title='UDP ( User Datagram Protocol	 )'>
          برای انتقال داده هایی که لزوما اهمیتی ندارد که دقیق و بدون کم و کاست باشد. مثلا استریم یک ویدیو که در آن اگر
          تعداد پیکسل هم به مقصد نرسد اهمیتی ندارد. سرعت انتقال بالاست.
        </LI>
        <LI title='مقایسه'>
          <table className='table-auto border-collapse border text-md text-center mt-3'>
            <thead>
              <tr>
                <th className='border px-4 py-2'>ویژگی (Feature)</th>
                <th className='border px-4 py-2'>TCP</th>
                <th className='border px-4 py-2'>UDP</th>
                <th className='border px-4 py-2'>توضیح (Explanation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border px-4 py-2'>نوع اتصال (Connection Type)</td>
                <td className='border px-4 py-2'>
                  اتصال‌گرا
                  <br />
                  (Connection-oriented)
                </td>
                <td className='border px-4 py-2'>
                  بدون اتصال
                  <br />
                  (Connectionless)
                </td>
                <td className='border px-4 py-2'>
                  TCP قبل از ارسال داده یک اتصال برقرار می‌کند؛ UDP بدون اتصال مستقیم داده ارسال می‌کند.
                </td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>قابلیت اطمینان (Reliability)</td>
                <td className='border px-4 py-2'>
                  بالا
                  <br />
                  (High)
                </td>
                <td className='border px-4 py-2'>
                  پایین
                  <br />
                  (Low)
                </td>
                <td className='border px-4 py-2'>
                  TCP تضمین می‌کند داده‌ها کامل و بدون خطا برسند؛ UDP چنین تضمینی ندارد.
                </td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>کنترل خطا (Error Control)</td>
                <td className='border px-4 py-2'>
                  دارد (با تصحیح)
                  <br />
                  (Error Correction)
                </td>
                <td className='border px-4 py-2'>
                  دارد (فقط بررسی)
                  <br />
                  (Error Detection Only)
                </td>
                <td className='border px-4 py-2'>TCP خطاها را تشخیص و اصلاح می‌کند؛ UDP فقط خطاها را تشخیص می‌دهد.</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>ترتیب رسیدن داده (Data Ordering)</td>
                <td className='border px-4 py-2'>
                  تضمین‌شده
                  <br />
                  (Guaranteed)
                </td>
                <td className='border px-4 py-2'>
                  تضمین‌نشده
                  <br />
                  (Not Guaranteed)
                </td>
                <td className='border px-4 py-2'>TCP ترتیب داده‌ها را حفظ می‌کند؛ UDP ترتیب را تضمین نمی‌کند.</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>سرعت (Speed)</td>
                <td className='border px-4 py-2'>
                  پایین‌تر
                  <br />
                  (Slower)
                </td>
                <td className='border px-4 py-2'>
                  بالاتر
                  <br />
                  (Faster)
                </td>
                <td className='border px-4 py-2'>
                  TCP به دلیل مکانیزم‌های کنترلی کندتر است؛ UDP سریع‌تر و سبک‌تر است.
                </td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>نحوه انتقال داده (Data Transfer Mode)</td>
                <td className='border px-4 py-2'>جریان (Stream-based)</td>
                <td className='border px-4 py-2'>بسته‌ای (Datagram-based)</td>
                <td className='border px-4 py-2'>
                  TCP داده‌ها را به صورت پیوسته ارسال می‌کند؛ UDP داده‌ها را در قالب بسته‌های مستقل می‌فرستد.
                </td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>مصرف منابع (Resource Usage)</td>
                <td className='border px-4 py-2'>
                  بیشتر
                  <br />
                  (Higher)
                </td>
                <td className='border px-4 py-2'>
                  کمتر
                  <br />
                  (Lower)
                </td>
                <td className='border px-4 py-2'>
                  TCP به دلیل پیچیدگی‌های بیشتر منابع بیشتری مصرف می‌کند؛ UDP سبک‌تر است.
                </td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>مناسب برای (Suitable for)</td>
                <td className='border px-4 py-2'>
                  وب، ایمیل، FTP
                  <br />
                  (Web, Email, FTP)
                </td>
                <td className='border px-4 py-2'>
                  بازی، تماس تصویری
                  <br />
                  (Gaming, Video Calls)
                </td>
                <td className='border px-4 py-2'>
                  TCP برای داده‌های دقیق و قابل اطمینان؛ UDP برای کاربردهای سریع و همزمان مناسب است.
                </td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>بازفرست خودکار (Retransmission)</td>
                <td className='border px-4 py-2'>
                  دارد
                  <br />
                  (Yes)
                </td>
                <td className='border px-4 py-2'>
                  ندارد
                  <br />
                  (No)
                </td>
                <td className='border px-4 py-2'>
                  TCP بسته‌های گم‌شده را دوباره ارسال می‌کند؛ UDP چنین قابلیتی ندارد.
                </td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>سربار (Overhead)</td>
                <td className='border px-4 py-2'>
                  بیشتر
                  <br />
                  (Higher)
                </td>
                <td className='border px-4 py-2'>
                  کمتر
                  <br />
                  (Lower)
                </td>
                <td className='border px-4 py-2'>
                  TCP به دلیل مکانیزم‌های اضافی هدر و کنترل، سربار بیشتری دارد؛ UDP ساده‌تر است.
                </td>
              </tr>
            </tbody>
          </table>

          <div className='flex justify-center'>
            <TextNote important size='text-md'>
              Retransmission یعنی ارسال مجدد بسته‌ای از داده‌ها که به مقصد نرسیده یا با خطا دریافت شده است.
            </TextNote>
          </div>
          <Image src={threeWayHandShakeImage} width={1000} height={500} alt='three-way-hand-shake' className='mt-2' />
        </LI>
      </UL>
    </>
  )
}
