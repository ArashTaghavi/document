/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Usefull Switch'>
      <UL>
        <LI simple={false} title='restore'>
          <Code>git restore a.txt</Code>
          دستور restore تغییرات اعمال شده روی یک فایل رو برمیگردونه به آخرین کامیتش.
        </LI>
        <LI simple={false} title='amend'>
          <Code>git commit -a -m "Amend" a.txt</Code>
          کامیت جدید رو به کامیت قبلی تحت یک کامیت کلی میچسبونه. یعنی کامیت قبلی ویرایش میشه.
          <br />
          این موضوع فقط روی آخرین کامیت مجازه. چون اون کامیت هنوز child نداره.
        </LI>
        <LI simple={false} title='revert'>
          <Code>git revert commitID</Code>
          این دستور میاد در قالب یک کامیت آخرین کامیت رو خنثی میکنه.
          <br />
          مثلا شما اگر فایل a.txt رو کامیت کنی و revert بزنی بعدش فایل a.txt تحت یک کامیت جدید حذف میشه.
        </LI>
        <LI simple={false} title='reset'>
          <Code>git revert commitID</Code>
          این دستور میاد در قالب یک کامیت آخرین کامیت رو خنثی میکنه.
          <br />
          مثلا شما اگر فایل a.txt رو کامیت کنی و revert بزنی بعدش فایل a.txt تحت یک کامیت جدید حذف میشه.
        </LI>
      </UL>
    </PageTitle>
  )
}
