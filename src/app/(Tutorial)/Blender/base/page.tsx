/** @format */

'use client'

import { PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='نکات پایه ای بلندر' subTitle='Blender'>
      <UL>
        <LI title='Origin' simple={false}>
          وقتی توی ادیت مود ابجکت رو جابجا میکنی origin تغییر نمیکنه. ولی توی ابجکت مود origin با ابجکت حرکت میکنه
        </LI>
        <LI simple={false}>
          با کلید های G و R و S با alt باعث میشه تغییرات هر کدوم ریست بشه.
          <br />
          این تغییرات زمانی ریست میشه که توی Object Mode اتفاق افتاده باشه. چون توی Edit Mode با این تغییرات origin شی
          تکون نمیخوره.
        </LI>
        <LI simple={false} title='Inset'>
          اگه چند تا صفحه رو انتخاب کنیم و باهم Inset کنیم به هم میچسبن. اگه دوباره دکمه i رو بزنیم بصورت جدا Inset
          میکنه.
        </LI>
        <LI simple={false} title='Hide'>
          با h میتونیم مخفی کنیم. برای مخفی همه به جز اونی که سلکت شده باید alt + h بزنیم
        </LI>
        <LI simple={false} title='Separation'>
          سطح رو انتخاب میکنی و p رو میزنی و بعدش Separation
          <br />
          با control + j میتونی دوتا جسم رو توی Object Mode بهم بچسبونی
        </LI>
        <LI simple={false} title='Ctrl + L'>
          کاربردش زمانیه که توی Edit Mode دوتا فیست یا ورتکس یا اج رو از دو شی مختلف انتخاب میکنی و با زدن این دکمه ها
          هر دو شکل کامل سلکت می شن.
        </LI>
        <LI simple={false} title='Shift + R'>
          آخرین حرکتت رو تکرا میکنه
        </LI>
        <LI simple={false} title='F3'>
          برای سرچ
        </LI>
        <LI simple={false} title='Y in Edit Mode'>
          توی Edit Mode روی هر فیس Y رو بزنی جداش میکنه اما همچنان یک آبجکت داریم. مثل P آبجکت جدید درست نمیکنه
        </LI>
        <LI simple={false} title='Shear'>
          با F3 پیداش میکنیم و میتونیم باهاش به لوپ کات هامون چرخش بدیم
        </LI>
        <LI simple={false} title='Ctrl + I'>
          سلکت رو برعکس میکنه
        </LI>
      </UL>
    </PageTitle>
  )
}
