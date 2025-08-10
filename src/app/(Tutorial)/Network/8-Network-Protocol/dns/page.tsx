/** @format */

import Image from 'next/image'
import { UL, LI } from '../../Components/List'
import { PageTitle } from '../../Components/common'
import dnsImage from '../../assets/images/dns.png'
import tldImage from '../../assets/images/tld.png'
import dns1Image from '../../assets/images/dns-1.png'
import dns2Image from '../../assets/images/dns-2.png'
import dns3Image from '../../assets/images/dns-3.png'
import dnsResolutionImage from '../../assets/images/dns-resolution.png'
import dnsStep1Image from '../../assets/images/dns-step-1.png'

export default function Page() {
  return (
    <>
      <PageTitle title='پروتوکل های شبکه' />

      <UL title='DNS ( Domain Name System )'>
        <LI title='Zone'>بخشی که ما اطلاعات DNS را در آن وارد می کنیم.</LI>
        <LI title='Record'>
          هر اطلاعاتی که وارد Zone می کنیم. مثلا یک مخاطب در تلفن همراه دارای رکورد اسم و شماره و ایمیل و ... است.
        </LI>
      </UL>
      <UL title='URI'>
        <LI title='-'>Protocol</LI>
        <LI title='-'>Host Name</LI>
        <LI title='-'>SLD (Second Level Doman)</LI>
        <LI title='-'>
          TLD (Top Level Domain)
          <div className='flex justify-center'>
            <Image src={tldImage} width={1000} height={500} alt='tld' className='mt-2' />
          </div>
        </LI>
        <LI title='-'>Host Name</LI>
        <div className='flex justify-center'>
          <Image src={dnsImage} width={1000} height={500} alt='dns' className='mt-2' />
        </div>
      </UL>
      <div className='flex justify-center'>
        <Image src={dnsStep1Image} width={1000} height={500} alt='dns-step-1' className='mt-2' />
      </div>
      <div className='flex justify-center'>
        <Image src={dns1Image} width={1000} height={500} alt='dns-1' className='mt-2' />
      </div>
      <div className='flex justify-center'>
        <Image src={dns2Image} width={1000} height={500} alt='dns-2' className='mt-2' />
      </div>
      <div className='flex justify-center'>
        <Image src={dns3Image} width={1000} height={500} alt='dns-3' className='mt-2' />
      </div>
      <div className='flex justify-center'>
        <table className='table-auto border-collapse border text-md text-center mt-4'>
          <thead>
            <tr>
              <th className='border px-4 py-2'>مرحله</th>
              <th className='border px-4 py-2'>توضیح</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border px-4 py-2'>1. بررسی کش‌ها</td>
              <td className='border px-4 py-2'>
                مرورگر، سیستم‌عامل و DNS محلی بررسی می‌کنند که IP از قبل ذخیره شده یا نه.
              </td>
            </tr>
            <tr>
              <td className='border px-4 py-2'>2. تماس با Recursive Resolver</td>
              <td className='border px-4 py-2'>
                درخواست به DNS Resolver (مثل 8.8.8.8) برای شروع فرآیند جستجو ارسال می‌شود.
              </td>
            </tr>
            <tr>
              <td className='border px-4 py-2'>3. درخواست به Root Server</td>
              <td className='border px-4 py-2'>
                DNS Resolver با ارسال درخواست به Root DNS Server، می‌خواهد بداند برای پسوند .click باید به کدام TLD
                Server مراجعه کند؛ Root Server نیز آدرس آن TLD Server را به Resolver برمی‌گرداند.
              </td>
            </tr>
            <tr>
              <td className='border px-4 py-2'>4. تماس با TLD Server</td>
              <td className='border px-4 py-2'>
                Resolver از TLD Server می‌پرسد دامنه arash.click روی چه Name Serverهایی تنظیم شده است.
              </td>
            </tr>
            <tr>
              <td className='border px-4 py-2'>5. مراجعه به Authoritative Name Server</td>
              <td className='border px-4 py-2'>
                Resolver به Name Server اصلی دامنه می‌گوید IP مربوط به www.arash.click را بدهد.
              </td>
            </tr>
            <tr>
              <td className='border px-4 py-2'>6. دریافت IP و بازگردانی</td>
              <td className='border px-4 py-2'>Resolver پاسخ را دریافت کرده و IP را به سیستم کاربر بازمی‌گرداند.</td>
            </tr>
            <tr>
              <td className='border px-4 py-2'>7. اتصال و نمایش سایت</td>
              <td className='border px-4 py-2'>
                مرورگر با IP دریافتی تماس گرفته و سایت www.arash.click را بارگذاری می‌کند.
              </td>
            </tr>
          </tbody>
        </table>
        <Image src={dnsResolutionImage} width={1000} height={500} alt='dns-resolution' className='mt-2' />
      </div>
    </>
  )
}
