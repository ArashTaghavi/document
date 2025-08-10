/** @format */

import { UL, LI } from '../Components/List'
import { PageTitle } from '../Components/common'

export default function Page() {
  return (
    <>
      <PageTitle title='Scanning' />

      <UL title='چرا سابنتینگ؟'>
        <LI title='CIDR ( Classless Inter-Domain Routing )'>
          CIDR روشی برای تخصیص و مسیریابی آدرس‌های IP است که به جای تقسیم‌بندی سنتی بر اساس کلاس‌های A، B و C، از یک
          سیستم انعطاف‌پذیر با استفاده از طول پیشوند (Prefix Length) به شکل /n استفاده می‌کند. این روش امکان ایجاد
          شبکه‌های فرعی با اندازه‌های متغیر و استفاده بهینه‌تر از فضای آدرس‌های IP را فراهم می‌کند.
          <br />
          192.168.1.0/24 یعنی 24 بیت اول آدرس مربوط به بخش شبکه است و بقیه بیت‌ها برای هاست‌ها.
        </LI>
      </UL>
    </>
  )
}
