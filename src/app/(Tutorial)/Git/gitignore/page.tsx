/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='gitignore'>
      <UL>
        <LI simple={false} title='!'>
          <Code>
            {`
*.jpg
!a.jpg
                `}
          </Code>
          <p>
            توی کد بالا با علامت ! میتونیم یه فایل یا فایل هایی که میخوایم رو ignore کنیم که باعث بشه گیت اونارو ترک
            کنه. یعنی الان همه فایل های jpg ایگنور میشن بجز a.jpg
          </p>
        </LI>
        <LI simple={false}>
          وقتی به فایل کامیت بشه دیگه نمیتونیم بزاریمش توی gitignore. اگر بخوایم توی gitignore بزاریمش باید با این دستور
          اون فایل رو از لیست فایل هایی که گیت ترک میکنه پاک کنیم
          <Code>
            {`
git rm --cached filename
                `}
          </Code>
          بعدشم باید add و commit ش کنیم.
        </LI>
        <LI simple={false}>
          توی هر پوشه ای میتونیم فایل gitignore رو درست کنیم که باعث میشه زیر پوشه هاشو تحت تاثیر قرار بده. یعنی هم اون
          فولدر و هم زیر پوشه هاش از اون فایل gitignore طبعیت میکنه.
        </LI>
      </UL>
    </PageTitle>
  )
}
