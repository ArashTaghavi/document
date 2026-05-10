/** @format */

import { Card } from '@/app/Components/common'
import { SimpleLI, SimpleUL } from '@/app/Components/List'

export default function DecoderOnly() {
  return (
    <Card title='Decoder Only'>
      <p>فقط بر اساس کلمات قبلی، کلمهٔ بعدی را پیش‌بینی می‌کند.</p>
      <p>نحوه کار به این صورت است که متن را مثلا از راست به چپ می بند و هر بار فقط کلمه ی بعدی را حدس می زند.</p>
      <p>مثلا ورودی بصورت من به مدرسه رفتم و... در این بخش مدل ادامه می دهد: درس خواندم.</p>
      <p>این مدل‌ها پایهٔ اکثر LLM ها هستند.</p>
      <SimpleUL title='کاربرد ها'>
        <SimpleLI title='تولید متن'>.</SimpleLI>
        <SimpleLI title='چت بات ها'>.</SimpleLI>
        <SimpleLI title='کد نویسی'>.</SimpleLI>
      </SimpleUL>
    </Card>
  )
}
