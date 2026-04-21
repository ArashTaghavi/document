/** @format */

import { Bold, Card, Code } from '@/app/Components/common'
import { SimpleLI, SimpleUL } from '@/app/Components/List'

export default function Pointer() {
  return (
    <Card title='Pointer'>
      <p>پوینتر یعنی آدرس یک محل در حافظه.</p>
      <p>پوینتر خودش داده نیست، فقط «نشانی» داده است.</p>
      <SimpleUL title='دلیل اهمیت'>
        <SimpleLI title='دسترسی مستقیم به حافظه'>
          یعنی می توانیم به جای کپی کردن مقدار، خودِ آدرس یک داده را بگیریم و مستقیماً روی همان محل کار کنیم.
        </SimpleLI>
        <SimpleLI title='مدیریت بهینه داده های بزرگ'>
          اگر داده بزرگ باشد (مثلاً struct سنگین یا آرایه بزرگ)، کپی کردن آن هزینه‌دار است.
        </SimpleLI>
        <SimpleLI title='اشتراک داده بین توابع بدون کپی'>یعنی چند تابع روی یک داده مشترک کار می‌کنند.</SimpleLI>
      </SimpleUL>
      <SimpleUL title='اشتباه در استفاده از پوینتر'>
        <SimpleLI title='دسترسی پیدا کردن به یک حافظه نا معتبر'>
          <Code light>
            {`$p = null;

$p->value = 10;`}
          </Code>
        </SimpleLI>
        <SimpleLI title='خراب کردن حافظه ی درست'>
          <Code light>
            {`$a = ["x" => 10, "y" => 20];

$b =& $a["x"]; // reference

$b = 999;

print_r($a);`}
          </Code>
          <p>
            چرا خطرناک است؟ چون داده اصلی ناخواسته تغییر کرده است و چند بخش برنامه همزمان روی یک داده اثر می‌گذارند.
          </p>
        </SimpleLI>
        <SimpleLI title='اشاره به جایی که نمی دانیم (dangling-like behavior)'>
          {`function getRef() {
    $x = 10;
    return &$x;
}

$r = getRef();

echo $r;`}
          <p>
            چه اتفاقی می افتد؟ $x داخل تابع ساخته شده و بعد از خروج از تابع نابود می شود ولی رفرنس آن برگشت داده شده است
            که باعث خطا یا یک رفتار غیر قابل پیش بینی می شود
          </p>
        </SimpleLI>
      </SimpleUL>
    </Card>
  )
}
