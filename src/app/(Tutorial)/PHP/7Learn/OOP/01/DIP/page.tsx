/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Dependency Inversion Principle' subTitle='Depend on abstractions, not on concreation'>
      <UL>
        <LI simple={false}>
          <Code>
            {`
interface Mailer
{
    public function send();
}

class Mailchimp implements Mailer
{
    public function send()
    {
        // implementation
    }
}

class Gmail implements Mailer
{
    public function send()
    {
        // implementation
    }
}

class Notification
{
   1) public function __construct(public Gmail $mailer) {}
   2) public function __construct(public Mailer $mailer) {}
}
          `}
          </Code>
          توو حالت ۱ ما سیستم داره به ما میگه یه ابجکت Gmail بهم بده. توو حالت دوم ما داریم به سیستم میگیم یه قرارداد
          تحت عنوان Mailer دریافت کن. بعد از بیرون ما میتونیم مقادیر Gmail یا Mailchimp رو پاس بدیم. یعنی بجای اینکه
          ورودی به کلاس وابسته باشه به abstraction وابسته ست.
          <br />
          قاعده کلی اینه که ورودی رو به abstraction وابسته کنیم و همچنین کلاسی که میخوایم پاس بدیم رو هم به abstraction
          وابسته کنیم.
        </LI>
      </UL>
      <UL title='موارد نقض DIP'>
        <LI simple={false} title='A high-level class depends on a low-level class'>
          توی کد بالا توو حالت ۱ در واقع high-level class ما که Notification باشه به Gmail که در واقع low-level class ما
          باشه وابسته ست. خب بدیش چیه؟ بدیش اینه که این کلاس Notification فقط و فقط با کلاسی از نوع Gmail کار میکنه.
          یعنی نمیتونیم یه پیاده سازی مثله Mailchimp رو که ازقضا همون ساختار کلاس Gmail رو بهش پاس بدیم. اگه بیایم
          Mailchimp رو از Gmail ارث بری کنیم چی؟ اوکی میشه. اما مشکلش چیه؟ مشکلش اینه که ما وقتی داریم پکیج مینویسیم
          باید بیایم یه کلاسی تعریف کنیم فرضا به اسم Gmail یا همون Mailer و توش یه متد خالی send تعریف کنیم که بقیه بیان
          ازش اکستند کنن. همین پیاده سازی یه متد خالی جایگزین شده با تعریف یک اینترفیس که متد هاش بدنه نداره و اصلا هدف
          ما اینه که فقط بگیم متد send باید پیاده سازی بشه. با جزییاتش کاری نداریم.
        </LI>
        <LI simple={false} title='Vendor lock-in'>
          وقتی مثلا یه پکیج مینویسیم و از فرضا dispatcher لاراول استفاده میکنیم. این پکیج توی لاراول کار میکنه ولی اگه
          ببریمش توی سیمفونی دیگه کار نمیکنه. یعنی کدمون نباید به کدهای وندور وابسته باشه. واسه حلش طبیعتا یه اینترفیس
          درست میکنم. بعد یه کلاس به اسم LaravelDispatcher که اینترفیس رو implements کرده و توی LaravelDisptacher کارمون
          رو میکنیم و ازش استفاده میکنیم.
        </LI>
      </UL>
    </PageTitle>
  )
}
