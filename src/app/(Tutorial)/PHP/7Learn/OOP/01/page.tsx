/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='هفته اول'>
      <UL title="Tell Don't Ask">
        <LI simple={false} title='تعریف'>
          در برنامه‌نویسی شیءگرا (OOP)، "Tell, Don't Ask" یک اصل طراحی است که به مسئولیت دادن به اشیاء و استفاده از
          آن‌ها برای انجام کارها به‌جای پرسیدن وضعیت داخلی آن‌ها اشاره دارد.
          <br />
          به زبان ساده: به جای اینکه از یک شیء اطلاعات بپرسی و بر اساس آن تصمیم بگیری، به شیء بگو چه کاری انجام دهد و
          خود شیء مسئول انجام آن باشد.
        </LI>
        <LI simple={false} title='Ask'>
          <Code>
            {`<?php
class User {
    private $points;

    public function __construct($points) {
        $this->points = $points;
    }

    public function getPoints() {
        return $this->points;
    }

    public function setPoints($points) {
        $this->points = $points;
    }
}

// ایجاد کاربر
$user = new User(100);

// پرسیدن وضعیت و تصمیم گرفتن بیرون از کلاس
if ($user->getPoints() >= 50) {
    $user->setPoints($user->getPoints() - 50);
}
?>
`}
          </Code>
        </LI>
        <LI simple={false} title='Tell'>
          <Code>
            {`<?php
class User {
    private $points;

    public function __construct($points) {
        $this->points = $points;
    }

    public function spendPoints($amount) {
        if ($this->points >= $amount) {
            $this->points -= $amount;
            return true;
        } else {
            return false;
        }
    }

    public function getPoints() {
        return $this->points;
    }
}

// ایجاد کاربر
$user = new User(100);

// به آیجکت می‌گوییم اقدام کند
if ($user->spendPoints(50)) {
    echo "Purchase successful!";
} else {
    echo "Not enough points!";
}
?>
`}
          </Code>
        </LI>
      </UL>

      <UL title='YAGNI (You Aren’t Gonna Need It)'>
        <LI simple={false} title=''>
          -
        </LI>
      </UL>
    </PageTitle>
  )
}
