/** @format */

import { Card, Code } from '@/app/Components/common'
import { SimpleLI, SimpleUL } from '@/app/Components/List'

export default function ICL() {
  return (
    <Card title='ICL (In-Context Learning )'>
      <p>
        مدلی که بدون تغییر در وزن‌های خودش، فقط با دیدن چند مثال داخل همان ورودی، یاد می‌گیرد چه کاری باید انجام دهد.
      </p>
      <p>
        در این روش، مدل آموزش جدید نمی‌بیند، بلکه از مثال‌هایی که داخل پرامپت به آن داده می‌شود، الگو را حدس می‌زند و
        همان الگو را ادامه می‌دهد.
      </p>
      <SimpleUL title='مثال‌(تشخیص احساس)'>
        <SimpleLI title='این فیلم عالی بود'>مثبت</SimpleLI>
        <SimpleLI title='این غذا بد بود'>منفی</SimpleLI>
        <SimpleLI title='این کتاب خیلی خوب بود'>در این مرحله مدل جواب "مثبت" را برمی گرداند.</SimpleLI>
      </SimpleUL>
      <SimpleUL title='روش های دادن مثال به مدل'>
        <SimpleLI title='Zero-Shot'>
          بدون دادن مثال به مدل، از آن سوال می پرسیم. مثلا می گوییم این متن را ترجمه کن.
        </SimpleLI>
        <SimpleLI title='One-Shot'>
          <p>با دادن یک مثال به مدل می فهمانیم هدفمان چیست</p>
          <Code light>
            {`مثال:
سلام → hello  

حالا ترجمه کن:
خداحافظ →`}
          </Code>
        </SimpleLI>
        <SimpleLI title='Few-Shot'>
          <p>با تعریف ۲ یا چند مثال به مدل الگو را می فهمانیم.</p>
          <Code light>
            {`سلام → hello  
خداحافظ → goodbye  
کتاب → book  

حالا ترجمه کن:
مدرسه →`}
          </Code>
        </SimpleLI>
      </SimpleUL>
      <p>در حالت کلی اگر مدل با Few-Shot هم پیشرفت نکرد بهتر است مدل را عوض کنیم.</p>
    </Card>
  )
}
