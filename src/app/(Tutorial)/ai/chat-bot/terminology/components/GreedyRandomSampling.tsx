/** @format */

import { Card, Table } from '@/app/Components/common'

export default function GreedyRandomSampling() {
  return (
    <Card title='Greedy Sampling vs Random Sampling'>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>ویژگی</Table.HeaderCell>
            <Table.HeaderCell>Greedy Sampling</Table.HeaderCell>
            <Table.HeaderCell>Random Sampling</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>تعریف</Table.Cell>
            <Table.Cell>انتخاب همیشه محتمل‌ترین توکن</Table.Cell>
            <Table.Cell>انتخاب تصادفی بر اساس احتمال‌ها</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>رفتار مدل</Table.Cell>
            <Table.Cell>قطعی و ثابت</Table.Cell>
            <Table.Cell>غیرقطعی و متنوع</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>مثال با احتمال (A=0.7, B=0.2, C=0.1)</Table.Cell>
            <Table.Cell>A همیشه انتخاب می‌شود</Table.Cell>
            <Table.Cell>A بیشتر انتخاب می‌شود، ولی B و C هم گاهی انتخاب می‌شوند</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>نمونه خروجی</Table.Cell>
            <Table.Cell>همیشه: A → A → A → A</Table.Cell>
            <Table.Cell>A → B → A → C → A</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>تنوع خروجی</Table.Cell>
            <Table.Cell>خیلی کم</Table.Cell>
            <Table.Cell>زیاد</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>ریسک خطا</Table.Cell>
            <Table.Cell>کم</Table.Cell>
            <Table.Cell>بیشتر</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>مناسب برای</Table.Cell>
            <Table.Cell>کدنویسی، ترجمه دقیق، پاسخ قطعی</Table.Cell>
            <Table.Cell>داستان‌نویسی، تولید ایده، متن خلاق</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>مزیت اصلی</Table.Cell>
            <Table.Cell>دقت و ثبات بالا</Table.Cell>
            <Table.Cell>خلاقیت و تنوع بالا</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>عیب اصلی</Table.Cell>
            <Table.Cell>تکراری و غیرخلاق</Table.Cell>
            <Table.Cell>ناپایدار و گاهی غیرمنطقی</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Card>
  )
}
