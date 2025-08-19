/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Interfacde Segregation Principle' subTitle='اصل جداسازی اینترفیس ها'>
      <UL>
        <LI simple={false}>
          هیچ کلاسی نباید مجبور بشه متدهایی رو پیاده‌سازی کنه که بهشون نیاز نداره. یعنی اینترفیس‌ها (Interface) باید
          کوچک و تخصصی طراحی بشن، نه بزرگ و همه‌کاره.
        </LI>
        <LI simple={false}>
          اگر یک اینترفیس خیلی بزرگ باشه (مثلاً ۱۰ تا متد مختلف داشته باشه) بعضی کلاس‌ها که فقط به ۲ تا از اون متدها
          نیاز دارن، مجبور می‌شن ۸ تا متد دیگه رو الکی پیاده‌سازی کنن (یا خالی بذارن). این باعث وابستگی‌های غیرضروری و
          سخت شدن نگهداری کد می‌شه.
        </LI>
      </UL>
      <UL title='حالت های نقض ISP'>
        <LI simple={false} title='Multiple use cases'>
          یعنی اینترفیسی بنویسیم که use case های متفاوتی داره که الزما ساب کلاس هاش بهش نیاز ندارن.
          <Code>
            {`
interface Worker {
    public function work();
    public function eat();
}

class Human implements Worker {
    public function work() {
        echo "Human working...";
    }

    public function eat() {
        echo "Human eating...";
    }
}

class Robot implements Worker {
    public function work() {
        echo "Robot working...";
    }

    public function eat() {
        // ❌ ربات نمی‌تونه بخوره → متد بی‌معنی یا خالی
    }
}
`}
          </Code>
          روش درستش اینجوریه:
          <Code>
            {`
 interface Workable {
    public function work();
}

interface Eatable {
    public function eat();
}

class Human implements Workable, Eatable {
    public function work() {
        echo "Human working...";
    }

    public function eat() {
        echo "Human eating...";
    }
}

class Robot implements Workable {
    public function work() {
        echo "Robot working...";
    }
}
            `}
          </Code>
        </LI>
        <LI simple={false} title='No interface, just a class'>
          <Code>
            {`
class Worker {
    public function work() {
        echo "Working...";
    }

    public function eat() {
        echo "Eating...";
    }
}

class Robot extends Worker {
    public function eat() {
        // ❌ Robot به این متد نیاز نداره، ولی چون از Worker ارث‌بری کرده
        // مجبور شده متد رو هم داشته باشه
    }
}
`}
          </Code>
        </LI>
      </UL>
    </PageTitle>
  )
}
