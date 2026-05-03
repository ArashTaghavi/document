/** @format */

import { Bold, Card } from '@/app/Components/common'
import { SimpleLI, SimpleUL } from '@/app/Components/List'

export default function RNN() {
  return (
    <Card title='RNN (Recurrent Neural Network)'>
      <p>شبکه بازگشتی مدلیست در Machine Learning که برای داده هایی استفاده می شود که ترتیب دارند. مثل جمله ها.</p>
      <p>در این حالت مدل جملات را به صورت کلمه به کلمه می خواند و هر بار یک چیزی از قبل را بخاطر می سپارد.</p>

      <SimpleUL title='پردازش جمله‌ "من دیروز به مدرسه رفتم" توسط RNN'>
        <SimpleLI title='من'> ایجاد حالت اولیه</SimpleLI>
        <SimpleLI title='دیروز'> حالت قبلی + این کلمه</SimpleLI>
        <SimpleLI title='به'> حالت اول + ‌حالت دوم + این کلمه</SimpleLI>
        <SimpleLI title='...'>الی آخر</SimpleLI>
      </SimpleUL>
      <p>یعنی هر محله = اطلاعات قبلی + کلمه جدید = حالت جدید</p>
      <p>
        <Bold>مشکل RNN:</Bold>
        اگر جمله بزرگ شود، مدل کم کم اول جمله را فراموش می کند. (Vanishing Gradient)
      </p>
    </Card>
  )
}
