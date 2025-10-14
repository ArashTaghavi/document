/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Hardware'>
      <UL>
        <LI simple={false} title='lspci'>
          لیست سخت افزار های نصب شده روی سیستم رو میده.
        </LI>
        <LI simple={false} title='lspci -s bussAddress'>
          مقدار bussAddress از خروجی lspci انتخاب میکنیم. این دستور یه توضیحی راجع به اون سخت افزار میده.
        </LI>
        <LI simple={false} title='lspci -s bussAddress'>
          مقدار bussAddress از خروجی lspci انتخاب میکنیم. این دستور یه توضیحی راجع به اون سخت افزار میده.
        </LI>
        <LI simple={false} title='lspci -s bussAddress -k'>
          اطلاعات درایور کرنل مرتبط رو هم اضافه می‌کنه
        </LI>
        <LI simple={false} title='lsusb'>
          لیست usb هارو نشون میده
        </LI>
      </UL>
    </PageTitle>
  )
}
