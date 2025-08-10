/** @format */

import { UL, LI } from '../../Components/List'
import { PageTitle } from '../../Components/common'

export default function Page() {
  return (
    <>
      <PageTitle title='پروتوکل های شبکه' />

      <UL title='DHCP Service'>
        <LI title='DHCP ( Dynamic Host Configuration Protocol )'>
          DHCP مخفف Dynamic Host Configuration Protocol است و یک پروتکل شبکه است که به صورت خودکار آدرس‌های IP و تنظیمات
          شبکه (مثل subnet mask، default gateway، DNS) را به دستگاه‌ها اختصاص می‌دهد.
          <UL title='کاربردهای اصلی' simple>
            <LI title='-'>اختصاص خودکار و سریع IP به دستگاه‌ها بدون نیاز به تنظیم دستی</LI>
            <LI title='-'>جلوگیری از تداخل IP (IP conflict)</LI>
            <LI title='-'>ساده‌کردن مدیریت شبکه به ویژه در شبکه‌های بزرگ</LI>
          </UL>
          <UL title='چگونه کار می کند؟ (DORA)' simple>
            <LI title='D'> وقتی دستگاهی به شبکه وصل می‌شود، یک درخواست DHCP (Discover) ارسال می‌کند.</LI>
            <LI title='O'>
              سرور DHCP به آن درخواست پاسخ می‌دهد و یک IP و تنظیمات مربوطه به دستگاه اختصاص می‌دهد (Offer).
            </LI>
            <LI title='R'>دستگاه این پیشنهاد را تأیید می‌کند (Request).</LI>
            <LI title='A'> سرور DHCP تایید نهایی می‌دهد (Acknowledge).</LI>
          </UL>
        </LI>
      </UL>
    </>
  )
}
