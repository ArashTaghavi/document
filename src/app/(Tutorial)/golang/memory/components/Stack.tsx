/** @format */

import { Card } from '@/app/Components/common'
import { SimpleLI, SimpleUL } from '@/app/Components/List'

export default function Stack() {
  return (
    <Card title='خلاصه'>
      <SimpleUL>
        <SimpleLI title='Pointer (پوینتر)'>آدرس یک داده در حافظه است که به جای خود داده استفاده می‌شود.</SimpleLI>

        <SimpleLI title='Reference (ریفرنس)'>ارجاع به یک متغیر که تغییر آن روی داده اصلی اثر مستقیم دارد.</SimpleLI>

        <SimpleLI title='Stack (استک)'>
          حافظه سریع و خودکار برای داده‌های کوتاه‌عمر که بر اساس LIFO کار می‌کند.
        </SimpleLI>

        <SimpleLI title='Heap (هیپ)'>حافظه بزرگ‌تر و انعطاف‌پذیرتر برای داده‌های دینامیک و بلندعمر.</SimpleLI>

        <SimpleLI title='Stack Frame (فریم استک)'>
          بخشی از استک که اطلاعات یک تابع مثل متغیرها و آدرس بازگشت را نگه می‌دارد.
        </SimpleLI>

        <SimpleLI title='Return Address (آدرس بازگشتی)'>
          آدرسی در برنامه که CPU بعد از پایان تابع باید اجرای برنامه را از آن ادامه دهد.
        </SimpleLI>

        <SimpleLI title='Scope (اسکوپ)'>محدوده‌ای در کد که یک متغیر در آن معتبر و قابل دسترسی است.</SimpleLI>

        <SimpleLI title='Fragmentation (تکه‌تکه شدن حافظه)'>
          حالتی که حافظه آزاد وجود دارد ولی به صورت تکه‌های پراکنده و غیرقابل استفاده یکپارچه است.
        </SimpleLI>

        <SimpleLI title='Crash (کرش)'>توقف ناگهانی برنامه به دلیل خطای جدی مثل دسترسی به حافظه نامعتبر.</SimpleLI>

        <SimpleLI title='Memory Corruption (خرابی حافظه)'>
          تغییر اشتباه داده‌های حافظه که بدون توقف برنامه باعث خروجی غلط می‌شود.
        </SimpleLI>

        <SimpleLI title='Null Pointer (پوینتر تهی)'>
          پوینتری که هیچ آدرسی را اشاره نمی‌کند ولی به اشتباه استفاده می‌شود.
        </SimpleLI>

        <SimpleLI title='Dangling Pointer (پوینتر معلق)'>
          اشاره به حافظه‌ای که قبلاً آزاد شده یا دیگر معتبر نیست.
        </SimpleLI>

        <SimpleLI title='Buffer Overflow (سرریز بافر)'>نوشتن داده خارج از محدوده حافظه تخصیص داده شده.</SimpleLI>

        <SimpleLI title='Garbage Collector (GC)'>سیستم خودکار پاکسازی حافظه‌های بدون reference در هیپ.</SimpleLI>
      </SimpleUL>
    </Card>
  )
}
