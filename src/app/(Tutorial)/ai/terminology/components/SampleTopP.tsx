/** @format */

import { Card, Code, Table } from '@/app/Components/common'
import { LI, SimpleLI, SimpleUL, UL } from '@/app/Components/List'

export default function SampleTopP() {
  return (
    <Card title='Sample Top P'>
      <p>روشی برای انتخاب خروجی از بین کلمات احتمالی است، اما بر اساس مجموع احتمال‌ها، نه تعداد ثابت.</p>
      <p>
        مدل کوچک‌ترین مجموعه از کلمات را انتخاب می‌کند که مجموع احتمال‌ شان ≥ مقدار P باشد، بعد از همان‌ها نمونه‌گیری
        می‌کند.
      </p>
      <UL title='مثال برای P = 0.7'>
        <LI title='hello'>0.4</LI>
        <LI title='hi'>0.3</LI>
        <LI title='hey'>0.2</LI>
        <LI title='yo'>0.05</LI>
        <LI title='sup'>0.05</LI>
        <LI>
          در این حالت فقط hello و hi باقی می مانند و مدل بین این دو انتخاب می کند. چون مجموع درصد آن ها به P = 0.7 می
          رسد.
        </LI>
      </UL>
      <p>هرچقدر K بزرگتر باشد جواب متنوع تر و بعضا بی ربط تر می شود.</p>
      <UL title='سناریو واقعی'>
        <LI title='چت‌بات رسمی (پاسخ دقیق)'>
          <SimpleUL>
            <SimpleLI>پشتیبانی مشتری</SimpleLI>
            <SimpleLI>جواب های فنی</SimpleLI>
          </SimpleUL>
          <p>
            مقدار P را کوچک (مثلا بین 0.2 تا 0.4) انتخاب می کنیم تا پاسخ ها قابل پیش بینی تر و هذیان (hallucination)
            کمتر شود.
          </p>
        </LI>
        <LI title='تولید محتوا (خلاقیت مهم است)'>
          <SimpleUL>
            <SimpleLI>داستان نویسی</SimpleLI>
            <SimpleLI>کپشن اینستاگرام</SimpleLI>
          </SimpleUL>
          <p>مقدار K را بزرگتر (مثلا 0.9 تا 1) در نظر می گیریم تا تنوع بالا و جملات غیر تکراری تر باشند.</p>
        </LI>

        <LI title='تولید کد'>
          <p>مقدار را K را خیلی کوچک (مثلا 0.1 تا 0.3) در نظر می گیریم تا دقت کد بالا و خلاقیت (باگ) کمتر شود.</p>
        </LI>
      </UL>
      <UL title='مثال کد'>
        <LI title='P = 0.2'>
          <Code light>
            {`def reverse_string(s):
    return s[::-1]`}
          </Code>
        </LI>
        <LI title='P = 0.9'>
          <Code light>
            {`def reverse_string(s):
    result = ""
    for char in s:
        result = char + result
    return result`}
          </Code>
        </LI>
      </UL>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>ویژگی</Table.HeaderCell>
            <Table.HeaderCell>P کم (0.1–0.3)</Table.HeaderCell>
            <Table.HeaderCell>P متوسط (0.5–0.8)</Table.HeaderCell>
            <Table.HeaderCell>P زیاد (0.9–1.0)</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>رفتار مدل</Table.Cell>
            <Table.Cell>خیلی محدود، دقیق</Table.Cell>
            <Table.Cell>متعادل</Table.Cell>
            <Table.Cell>خلاق و باز</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>تنوع خروجی</Table.Cell>
            <Table.Cell>خیلی کم</Table.Cell>
            <Table.Cell>متوسط</Table.Cell>
            <Table.Cell>زیاد</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>ریسک خطا</Table.Cell>
            <Table.Cell>کم</Table.Cell>
            <Table.Cell>متوسط</Table.Cell>
            <Table.Cell>بیشتر</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>مناسب برای</Table.Cell>
            <Table.Cell>کدنویسی، پاسخ‌های حساس</Table.Cell>
            <Table.Cell>چت‌بات عمومی</Table.Cell>
            <Table.Cell>داستان‌نویسی، تولید خلاق</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>مثال</Table.Cell>
            <Table.Cell>«هوش مصنوعی ابزار قدرتمندی برای بهبود کارایی است.»</Table.Cell>
            <Table.Cell>«هوش مصنوعی در حال تغییر زندگی ما و نحوه کار کردن ماست.»</Table.Cell>
            <Table.Cell>«هوش مصنوعی می‌تواند آینده‌ای غیرقابل پیش‌بینی و خلاقانه برای بشر بسازد.»</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Card>
  )
}
