/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Usefull'>
      <UL>
        <LI simple={false} title='.gitkeep'>
          توو حالت معمولی نمیتونیم یه فولدر خالی رو توی گیت کامیت کنیم. برای این کار باید توش یه فایل به اسم .gitkeep
          بسازیم.اینجوری گیت اجازه میده فولدر رو کامیت کنی. اگه یه فایلی جز این بزاریم گیت به واسطه ی کامیت کردن اون
          فایل میاد اجازه کامیت فولدر رو میده. ولی با .gitkeep میتونی خود فولدر رو کامیت کنی.
        </LI>
        <LI simple={false} title='source tree'>
          نرم افزار source tree
        </LI>
        <LI simple={false} title='git clean'>
          این دستور فایلی که کامیت نشده رو پاک میکنه.
          <Code>{`git clean -f filename`}</Code>
        </LI>
      </UL>
    </PageTitle>
  )
}
