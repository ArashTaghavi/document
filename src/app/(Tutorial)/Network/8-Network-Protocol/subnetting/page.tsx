/** @format */

import { UL, LI } from '../../Components/List'
import { PageTitle } from '../../Components/common'

export default function Page() {
  return (
    <>
      <PageTitle title='پروتوکل های شبکه' />

      <UL title='Subnetting'>
        <LI title='هدف ARP'>ترجمه آدرس IP به آدرس MAC در یک شبکه محلی</LI>
      </UL>
      <table className='table-auto border-collapse border text-md text-center mt-3'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>Subnet</th>
            <th className='border px-4 py-2'>Network IP</th>
            <th className='border px-4 py-2'>Broadcast IP</th>
            <th className='border px-4 py-2'>Usable Hosts</th>
            <th className='border px-4 py-2'>Host IP Range</th>
            <th className='border px-4 py-2'>کاربرد</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-4 py-2'>192.168.1.0/24</td>
            <td className='border px-4 py-2'>192.168.1.0</td>
            <td className='border px-4 py-2'>192.168.1.255</td>
            <td className='border px-4 py-2'>254</td>
            <td className='border px-4 py-2'>192.168.1.1 - 192.168.1.254</td>
            <td className='border px-4 py-2'>مناسب برای شبکه‌های کوچک تا متوسط (ادارات، سازمان‌ها)</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>192.168.1.0/25</td>
            <td className='border px-4 py-2'>192.168.1.0</td>
            <td className='border px-4 py-2'>192.168.1.127</td>
            <td className='border px-4 py-2'>126</td>
            <td className='border px-4 py-2'>192.168.1.1 - 192.168.1.126</td>
            <td className='border px-4 py-2'>تقسیم شبکه اصلی به دو زیرشبکه برای تفکیک منطقی (مثلاً بخش مالی و فنی)</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>192.168.1.128/25</td>
            <td className='border px-4 py-2'>192.168.1.128</td>
            <td className='border px-4 py-2'>192.168.1.255</td>
            <td className='border px-4 py-2'>126</td>
            <td className='border px-4 py-2'>192.168.1.129 - 192.168.1.254</td>
            <td className='border px-4 py-2'>نیمه دوم subnet قبلی، برای تقسیم بهتر ترافیک شبکه</td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>192.168.1.0/30</td>
            <td className='border px-4 py-2'>192.168.1.0</td>
            <td className='border px-4 py-2'>192.168.1.3</td>
            <td className='border px-4 py-2'>2</td>
            <td className='border px-4 py-2'>192.168.1.1 - 192.168.1.2</td>
            <td className='border px-4 py-2'>برای ارتباط نقطه به نقطه (Point-to-Point) بین دو روتر</td>
          </tr>
        </tbody>
      </table>
      <table className='table-auto border-collapse border text-md text-center mt-3'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>نوع IP</th>
            <th className='border px-4 py-2'>مثال</th>
            <th className='border px-4 py-2'>کاربرد</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-4 py-2'>Network IP</td>
            <td className='border px-4 py-2'>192.168.1.0 (در subnet /24)</td>
            <td className='border px-4 py-2'>
              شناسایی آدرس شبکه (نه یک دستگاه). <br />
              توسط روترها، DHCP، یا برای مشخص‌کردن محدوده‌ی شبکه در تنظیمات استفاده میشه. <br />
              قابل assign به دستگاه‌ها نیست.
            </td>
          </tr>
          <tr>
            <td className='border px-4 py-2'>Broadcast IP</td>
            <td className='border px-4 py-2'>192.168.1.255 (در subnet /24)</td>
            <td className='border px-4 py-2'>
              ارسال پیام به همه‌ی دستگاه‌های داخل یک subnet. <br />
              مثلاً DHCP Discover یا Ping Broadcast به این IP ارسال میشه. <br />
              بسته‌ای که به این IP بره، توسط همه‌ی hostها در اون شبکه دریافت میشه.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
