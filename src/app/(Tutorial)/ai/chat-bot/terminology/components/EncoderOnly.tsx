/** @format */

import { Card } from '@/app/Components/common'
import { SimpleLI, SimpleUL } from '@/app/Components/List'

export default function EncoderOnly() {
  return (
    <Card title='Encoder Only'>
      <p>
        Encoder-only مدل‌هایی هستند که فقط متن را می‌خوانند و درک می‌کنند، و خروجی آن‌ها معمولاً یک برچسب یا بردار
        معنایی است، نه متن جدید.
      </p>
      <SimpleUL title='مثال'>
        <SimpleLI title='دسته بندی ایمیل'>
          ایمیل ها را می خواند و آن ها را در دسته بندی های اسپ، مهم، تبلیغاتی و... قرار می دهد.
        </SimpleLI>
        <SimpleLI title='این فیلم خیلی عالی بود'>
          <p>مدل می پرسد این جمله چه حسی داری؟ سپس بصورت زیر تحلیل می کند:</p>
          <SimpleUL>
            <SimpleLI title='خیلی عالی'>مثبت</SimpleLI>
            <SimpleLI title='فیلم'>موضوع</SimpleLI>
            <SimpleLI title='کل جمله'>احساس مثبت</SimpleLI>
            <SimpleLI title='خروجی'>Positive (مثبت)</SimpleLI>
          </SimpleUL>
        </SimpleLI>
      </SimpleUL>
    </Card>
  )
}
