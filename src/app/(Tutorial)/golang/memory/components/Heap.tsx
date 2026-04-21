/** @format */

import { Card, Code } from '@/app/Components/common'
import { SimpleLI, SimpleUL } from '@/app/Components/List'

export default function Heap() {
  return (
    <Card title='Heap'>
      <p>هیپ حافظه‌ایه برای داده‌های دینامیک و بلندمدت.</p>
      <SimpleUL title='ویژگی ها'>
        <SimpleLI title='کندتر از استک'>
          <p>استک فقط با جابه‌جا شدن یک pointer مدیریت می‌شود (خیلی ساده و خطی)</p>
          <SimpleUL title='ولی Heap باید'>
            <SimpleLI>دنبال فضای خالی بگردد</SimpleLI>
            <SimpleLI>حافظه را تخصیص بدهد</SimpleLI>
            <SimpleLI>
              <p>ممکن است fragmentation داشته باشد</p>
              <p>
                منظور از fragmentation این است که حافظه آزاد وجود دارد، اما به شکل تکه‌های جدا از هم است و نمی‌شود از آن
                مثل یک بلوک یکپارچه استفاده کرد.
              </p>
              <Code light>[ 10KB ][ used ][ 5KB ][ used ][ 8KB ][ used ][ 6KB ]</Code>
              <p>
                اگر یک برنامه ۲۰ کیلوبایت حافظه نیاز داشته باشد، مجموع فضای خالی کافی است، ولی هیچ بخش پیوسته ی ۲۰
                کیلوبایتی وجود ندارد.
              </p>
              <p>
                دلیل رخ دادن fragmentation در heap این است که حافظه به دفعات aloocation و free دارد، همچنین اندازه داده
                ها متفاوت است و فضا خالی بین بلاک ها پخش می شود.
              </p>
            </SimpleLI>
          </SimpleUL>
        </SimpleLI>
        <SimpleLI title='اندازه بزرگ‌تر'>از کل RAM سیستم استفاده می کند.</SimpleLI>
        <SimpleLI title='نیاز به مدیریت حافظه'>
          <p>
            داده ها در Heap داینامیک هستند و زمان حذف آن ها مشخص نیست پس برنامه نویس یا GC باید مدیریت حافظه را بر عهده
            بگیرد.
          </p>
        </SimpleLI>
        <SimpleLI title='عمر داده دست برنامه یا GC'>
          در صورت وجود reference به داده، زنده می ماند و در غیر این صورت توسط GC پاک می شود.
        </SimpleLI>
      </SimpleUL>

      <SimpleUL title='مواردی که در Heap ذخیره می شوند'>
        <SimpleLI title='آبجکت ها'></SimpleLI>
        <SimpleLI title='داده‌هایی که بعد از خروج از تابع باید زنده بمونن'></SimpleLI>
      </SimpleUL>
    </Card>
  )
}
