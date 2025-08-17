/** @format */

import { Code, PageTitle, TextNote } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Liskov Subsitiution Principle'>
      <TextNote>
        هدف LSP اینه که مطمین باشه کلاس های فرزند میتونن بجای کلاس های پرنت توی سیستم استفاده بشن بدون اینکه مشکلی پیش
        بیاد.
      </TextNote>
      <UL>
        <LI simple={false} title='Preconditions cannot be strengthened in the subtype'>
          پیش‌شرط در فرزند نباید سخت‌تر از والد بشه.
          <Code>
            {`
class Bird {
  fly(distance: number) {
    console.log('Flying $distance meters')
  }
}

class Eagle extends Bird {
  fly(distance: number) {
    if (distance < 100) {   // ❌ سخت‌تر شد
      throw new Error("Eagle must fly at least 100 meters")
    }
    super.fly(distance)
  }
}
            `}
          </Code>
        </LI>
        <LI simple={false} title='Postconditions cannot be weakened in the subtype'>
          پس‌شرط در فرزند نباید ضعیف‌تر از والد بشه.
          <Code>
            {`
class Rectangle {
  setWidth(w: number) { this.width = w }
  getWidth() { return this.width }   // پس‌شرط: همون مقداری که ست شد
}
         
class Square extends Rectangle {
  setWidth(w: number) {
    this.width = w
    this.height = w   // ❌ پس‌شرط تغییر کرد: الان setWidth فقط width رو تغییر نمیده
  }
}
            `}
          </Code>
        </LI>
        <LI simple={false} title='Invariants cannot be weakened in the subtype'>
          ناورداها (قوانین کلی‌ای که همیشه باید برقرار باشن) توی فرزند نباید نقض بشن.
          <Code>
            {`
class BankAccount {
  balance: number = 0
  deposit(amount: number) {
    this.balance += amount
  }
}

class PremiumAccount extends BankAccount {
  deposit(amount: number) {
    this.balance += amount
    if (this.balance < 0) {   // ❌ invariant: balance همیشه ≥ 0 باید باشه
      throw new Error("Invalid state")
    }
  }
}
            `}
          </Code>
        </LI>
        <LI simple={false} title='History constraint (the "history rule")'>
          تاریخچهٔ وضعیت (state history) باید سازگار باشه:
          <br />
          شیء فقط باید از طریق متدها تغییر کنه (encapsulation).
          <br />
          اگه یه کلاس والد immutable (تغییرناپذیر) باشه، نباید یه کلاس mutable رو به‌عنوان subtype اون بسازیم.
          <br />
          چون تاریخچهٔ immutable همیشه ثابت می‌مونه، ولی تاریخچهٔ mutable تغییر می‌کنه → ناسازگاری.
          <br />
          البته می‌تونیم فیلدهای جدید توی subclass اضافه کنیم و اونا رو تغییر بدیم، چون والد اصلاً اونا رو نمی‌شناسه.
          <br />
          <Code>
            {`
class ImmutablePoint {
  constructor(public readonly x: number, public readonly y: number) {}
}

class MutablePoint extends ImmutablePoint {
  setX(x: number) { this.x = x }  // ❌ تاریخچه تغییر می‌کنه
}

class Circle extends ImmutablePoint {
  constructor(x: number, y: number, public radius: number) {
    super(x, y)
  }
  setRadius(r: number) { this.radius = r }  // اوکی چون والد radius نداره
}
            `}
          </Code>
        </LI>
      </UL>
    </PageTitle>
  )
}
