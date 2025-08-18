/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Facade'>
      <UL>
        <LI simple={false} title='getFacadeAccessor'>
          هم میتونه استرینگ بگیره هم آبجکت. اگه آبجکت پاس بدیم همون آبجکت رو برمیگردونه. اگه آبجکت برگردونیم هر سری
          Facade رو کال کنیم یه آبجکت جدید میسازه. ولی وقتی استرینگ تعریف میکنیم و توی سرویس پروایدر تعریفش میکنیم ابجکت
          کش میشه.
        </LI>
        <LI simple={false} title='Realtime Facede'>
          اگه همچین کدی رو اجرا کنیم:
          <Code>Facades\App\X\Y::hello()</Code>
          اتفاقی که میافته لاراول میره توی فولدر کش توی storage یه Facade درست میکنه و توی متد getFacadeAccessor مقدار
          <strong> App\X\Y </strong>
          رو برمیگردونه
        </LI>
        <LI simple={false} title='Decorator Design Pattern'>
          برای زمانیه که میخوایم یه تیکه کد رو ساندویچ کنیم. یعنی بزاریمش بین دوتا عملیات. مثه try catch مثلا ویدیو 15
        </LI>
      </UL>
    </PageTitle>
  )
}
