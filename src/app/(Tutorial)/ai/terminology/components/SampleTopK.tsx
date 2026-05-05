/** @format */

import { Card, Table } from '@/app/Components/common'
import { LI, SimpleLI, SimpleUL, UL } from '@/app/Components/List'

export default function SampleTopK() {
  return (
    <Card title='Sample Top K'>
      <p>یک روش برای کنترل «تصادفی بودن» خروجی مدل‌های زبانی.</p>
      <p>مدل به جای انتخاب از کل کلمات ممکن، فقط از K تا از محتمل‌ترین گزینه‌ها انتخاب می‌کند.</p>
      <UL title='مثال برای K = 2'>
        <LI title='hello'>0.4</LI>
        <LI title='hi'>0.3</LI>
        <LI title='hey'>0.2</LI>
        <LI title='yo'>0.05</LI>
        <LI title='sup'>0.05</LI>
        <LI>در این حالت فقط hello و hi باقی می مانند و مدل بین این دو انتخاب می کند.</LI>
      </UL>
      <p>هرچقدر K بزرگتر باشد جواب متنوع تر و بعضا بی ربط تر می شود.</p>
      <UL title='سناریو واقعی'>
        <LI title='چت‌بات رسمی (پاسخ دقیق)'>
          <SimpleUL>
            <SimpleLI>پشتیبانی مشتری</SimpleLI>
            <SimpleLI>جواب های فنی</SimpleLI>
          </SimpleUL>
          <p>
            مقدار K را کوچک (مثلا بین ۱۰ تا ۴۰) انتخاب می کنیم تا پاسخ ها قابل پیش بینی تر و هذیان (hallucination) کمتر
            شود.
          </p>
        </LI>
        <LI title='تولید محتوا (خلاقیت مهم است)'>
          <SimpleUL>
            <SimpleLI>داستان نویسی</SimpleLI>
            <SimpleLI>کپشن اینستاگرام</SimpleLI>
          </SimpleUL>
          <p>مقدار K را بزرگتر (مثلا ۵۰ تا ۱۰۰) در نظر می گیریم تا تنوع بالا و جملات غیر تکراری تر باشند.</p>
        </LI>

        <LI title='تولید کد'>
          <p>مقدار را K را خیلی کوچک (مثلا ۱ تا ۱۰) در نظر می گیریم تا دقت کد بالا و خلاقیت (باگ) کمتر شود.</p>
        </LI>
      </UL>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>ویژگی</Table.HeaderCell>
            <Table.HeaderCell>K خیلی کم (1–5)</Table.HeaderCell>
            <Table.HeaderCell>K متوسط (20–50)</Table.HeaderCell>
            <Table.HeaderCell>K زیاد (100+)</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>رفتار مدل</Table.Cell>
            <Table.Cell>خشک، قابل پیش‌بینی</Table.Cell>
            <Table.Cell>متعادل</Table.Cell>
            <Table.Cell>خلاق ولی بی‌ثبات</Table.Cell>
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
            <Table.Cell>زیاد</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>مناسب برای</Table.Cell>
            <Table.Cell>کدنویسی، پاسخ دقیق</Table.Cell>
            <Table.Cell>چت‌بات عمومی</Table.Cell>
            <Table.Cell>داستان‌نویسی، تولید محتوا</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>مثال</Table.Cell>
            <Table.Cell>«هوش مصنوعی بهره‌وری را در صنعت افزایش می‌دهد.»</Table.Cell>
            <Table.Cell>«هوش مصنوعی در حال تغییر صنعت و نحوه کار ماست.»</Table.Cell>
            <Table.Cell>«هوش مصنوعی می‌تواند دنیا را به شکل‌های غیرمنتظره و خلاقانه دگرگون کند.»</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Card>
  )
}
