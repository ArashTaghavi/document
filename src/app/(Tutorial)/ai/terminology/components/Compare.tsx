/** @format */

import { Card, Table } from '@/app/Components/common'

export default function Compare() {
  return (
    <Card title='Encoder Only vs EncoderDecoder vs Decoder Only'>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>ویژگی</Table.HeaderCell>
            <Table.HeaderCell>Encoder-only</Table.HeaderCell>
            <Table.HeaderCell>Encoder-Decoder</Table.HeaderCell>
            <Table.HeaderCell>Decoder-only</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>هدف اصلی</Table.Cell>
            <Table.Cell>فهم و تحلیل متن</Table.Cell>
            <Table.Cell>تبدیل متن به متن دیگر</Table.Cell>
            <Table.Cell>تولید متن</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>نوع ورودی</Table.Cell>
            <Table.Cell>کل متن</Table.Cell>
            <Table.Cell>متن ورودی</Table.Cell>
            <Table.Cell>متن + context قبلی</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>نوع خروجی</Table.Cell>
            <Table.Cell>برچسب / embedding</Table.Cell>
            <Table.Cell>متن جدید</Table.Cell>
            <Table.Cell>تولید متن کلمه‌به‌کلمه</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>جهت پردازش</Table.Cell>
            <Table.Cell>دوطرفه</Table.Cell>
            <Table.Cell>Encoder دوطرفه + Decoder یک‌طرفه</Table.Cell>
            <Table.Cell>یک‌طرفه (causal)</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>ساختار اصلی</Table.Cell>
            <Table.Cell>فقط Encoder</Table.Cell>
            <Table.Cell>Encoder + Decoder</Table.Cell>
            <Table.Cell>فقط Decoder</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>مکانیزم Attention</Table.Cell>
            <Table.Cell>Bidirectional Attention</Table.Cell>
            <Table.Cell>Self Attention + Cross Attention</Table.Cell>
            <Table.Cell>Masked Self Attention</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>کاربرد</Table.Cell>
            <Table.Cell>طبقه‌بندی، تحلیل متن</Table.Cell>
            <Table.Cell>ترجمه، خلاصه‌سازی</Table.Cell>
            <Table.Cell>چت‌بات، تولید متن، کدنویسی</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>مثال</Table.Cell>
            <Table.Cell>«این فیلم عالی بود → مثبت» (تحلیل احساس)</Table.Cell>
            <Table.Cell>«Hello → سلام» (ترجمه متن)</Table.Cell>
            <Table.Cell>«امروز هوا… → خوب است» (ادامه متن)</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Card>
  )
}
