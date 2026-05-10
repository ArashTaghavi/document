/** @format */

import { Card } from '@/app/Components/common'
import { SimpleLI, SimpleUL } from '@/app/Components/List'

export default function EncoderDecoder() {
  return (
    <Card title='Encoder Decoder'>
      <p>یک بخش متن را می‌فهمد (encoder) و یک متن جدید تولید می‌کند (decoder)</p>
      <SimpleUL title='ساختار'>
        <SimpleLI title='Encoder'>
          <SimpleUL>
            <SimpleLI>ورودی را کامل می‌خواند.</SimpleLI>
            <SimpleLI>معنی آن را استخراج می‌کند.</SimpleLI>
          </SimpleUL>
        </SimpleLI>
        <SimpleLI title='Decoder'>بر اساس آن معنی، خروجی تولید می‌کند.</SimpleLI>
      </SimpleUL>
      <SimpleUL title='مثال مترجم'>
        <SimpleLI title='Encoder'>معنی جمله انگلیسی را متوجه می شود.</SimpleLI>
        <SimpleLI title='Decoder'>جمله فارسی را تولید می کند.</SimpleLI>
      </SimpleUL>
      <SimpleUL title='کاربرد ها'>
        <SimpleLI>ترجمه</SimpleLI>
        <SimpleLI>خلاصه سازی</SimpleLI>
        <SimpleLI>تبدیل متن به متن. مثلا تبدیل یک جمله ی غیر رسمی به یک جمله رسمی.</SimpleLI>
      </SimpleUL>
    </Card>
  )
}
