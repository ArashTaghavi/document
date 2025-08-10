/** @format */

import Image from 'next/image'
import { UL, LI } from '../../Components/List'
import { PageTitle } from '../../Components/common'
import arpImage from '../../assets/images/arp.png'

export default function Page() {
  return (
    <>
      <PageTitle title='پروتوکل های شبکه' />

      <UL title='ARP ( Address Resolution Protocol )'>
        <LI title='هدف ARP'>ترجمه آدرس IP به آدرس MAC در یک شبکه محلی</LI>
        <LI title='نحوه کار'>ارسال درخواست broadcast و دریافت پاسخ unicast</LI>
        <LI title='کاربرد'>امکان برقراری ارتباط در شبکه‌های LAN که انتقال داده بر اساس MAC است</LI>
        <LI title='سناریو'>
          کامپیوتر A می خواهد به کامپیوتر B یک داده ای را ارسال کند.
          <br />
          کامپیوتر A فقط آدرس IP کامپیوتر B را می‌داند، اما برای ارسال بسته در شبکه محلی نیاز دارد که آدرس MAC کامپیوتر
          B را هم بدست بیاورد.چون در شبکه محلی (مثل اترنت)، داده‌ها با آدرس MAC (یک شناسه سخت‌افزاری منحصر به فرد) ارسال
          می‌شوند، نه با آدرس IP.
          <br />
          ARP پروتکلی است که کمک می‌کند کامپیوتر A آدرس MAC مربوط به یک آدرس IP مشخص را پیدا کند.
        </LI>
        <LI title='روند کار ARP بصورت سناریو'>
          <UL simple title=''>
            <LI title='کامپیوتر A یک بسته ARP Request (درخواست ARP) ارسال می‌کند'>
              این بسته در شبکه به صورت broadcast (همه‌گیر) ارسال می‌شود، یعنی به تمام دستگاه‌های شبکه محلی ارسال می‌شود.
            </LI>
            <LI title='کامپیوتر B وقتی این درخواست را دریافت می‌کند'>
              تشخیص می‌دهد که آدرس IP پرسیده شده (192.168.1.20 مثلا) مال خودش است.
            </LI>
            <LI title='کامپیوتر B پاسخ ARP Reply (پاسخ ARP) ارسال می‌کند'>
              در این پاسخ، آدرس MAC خودش را به کامپیوتر A می‌دهد.
            </LI>
            <LI title='کامپیوتر A آدرس MAC را دریافت و ذخیره می‌کند'>
              سپس می‌تواند با استفاده از آن، داده‌هایش را به کامپیوتر B ارسال کند.
            </LI>
          </UL>
        </LI>
      </UL>
      <div className='flex justify-center'>
        <Image src={arpImage} width={500} height={500} alt='arp' className='mt-2' />
      </div>
    </>
  )
}
