/** @format */

import { Card, Table } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Bias() {
  return (
    <Card title='Bias'>
      <p>
        ک انحراف سیستماتیک در خروجی مدل که باعث می‌شود مدل به بعضی پاسخ‌ها بیشتر از بقیه تمایل داشته باشد، حتی اگر
        لزوماً درست‌تر نباشند.
      </p>
      <p>مدل «منصفانه همه گزینه‌ها را نمی‌بیند» و به بعضی‌ها ذاتاً بیشتر وزن می‌ دهد.</p>
      <UL title='انواع Bias'>
        <LI title='Data Bias'>
          وقتی داده های آموزش نامتوازن باشند. مثلا اگر ۹۰ درصد داده ها در مورد برنامه نویسی پایتون باشد، مدل فکر می کند
          که همه سوال ها باید به پایتون ختم شود.
        </LI>
        <LI title='Model Bias'>
          وقتی ساختار مدل یا آموزش باعث ترجیح بعضی الگوها شود. مثلا مدل همیشه پاسخ های طولانی تر را بهتر می داند.
        </LI>
        <LI title='Sampling Bias (بایاس در انتخاب خروجی)'>
          زمانی که مدل در انتخاب نمونه greedy رفتار می کند و همیشه یک جواب ثابت را برمیگرداند.
        </LI>
        <LI title='Cultural/Social Bias'>
          زمانی که مدل بر اساس داده های اینترنتی مانند کلیشه ها، سوگیری های اجتماعی و... آموزش دیده باشد.
        </LI>
      </UL>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>مفهوم</Table.HeaderCell>
            <Table.HeaderCell>نقش در بایاس</Table.HeaderCell>
            <Table.HeaderCell>دلیل</Table.HeaderCell>
            <Table.HeaderCell>مثال عددی (A=0.7, B=0.2, C=0.1)</Table.HeaderCell>
            <Table.HeaderCell>نمونه رفتار</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Greedy</Table.Cell>
            <Table.Cell>تشدید بایاس</Table.Cell>
            <Table.Cell>فقط بیشترین احتمال را انتخاب می‌کند</Table.Cell>
            <Table.Cell>A=1.0, B=0, C=0</Table.Cell>
            <Table.Cell>همیشه A → A → A</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Temperature پایین (0.2)</Table.Cell>
            <Table.Cell>تقویت بایاس</Table.Cell>
            <Table.Cell>اختلاف احتمال‌ها را زیاد می‌کند</Table.Cell>
            <Table.Cell>A≈0.95, B≈0.04, C≈0.01</Table.Cell>
            <Table.Cell>تقریباً همیشه A</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Temperature بالا (1.5)</Table.Cell>
            <Table.Cell>پخش بایاس</Table.Cell>
            <Table.Cell>اختلاف احتمال‌ها را کم می‌کند</Table.Cell>
            <Table.Cell>A≈0.55, B≈0.28, C≈0.17</Table.Cell>
            <Table.Cell>A، B و حتی C گاهی انتخاب می‌شوند</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Top-K (K=2)</Table.Cell>
            <Table.Cell>محدودسازی بایاس</Table.Cell>
            <Table.Cell>فقط K گزینه اول را نگه می‌دارد</Table.Cell>
            <Table.Cell>A=0.7, B=0.3 (C حذف)</Table.Cell>
            <Table.Cell>فقط بین A و B انتخاب</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Top-P (P=0.9)</Table.Cell>
            <Table.Cell>کنترل بایاس</Table.Cell>
            <Table.Cell>هسته‌ی محتمل را نگه می‌دارد</Table.Cell>
            <Table.Cell>A=0.7, B=0.2 (C حذف)</Table.Cell>
            <Table.Cell>بیشتر A، گاهی B</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Random Sampling</Table.Cell>
            <Table.Cell>نمایش بایاس واقعی</Table.Cell>
            <Table.Cell>انتخاب بر اساس توزیع احتمال</Table.Cell>
            <Table.Cell>A=0.7, B=0.2, C=0.1</Table.Cell>
            <Table.Cell>در 10 بار: ~7A, 2B, 1C</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>ترکیب (T=0.7, P=0.9)</Table.Cell>
            <Table.Cell>تعادل بایاس</Table.Cell>
            <Table.Cell>هم محدودسازی هم کمی تصادفی‌سازی</Table.Cell>
            <Table.Cell>A≈0.6, B≈0.25, C≈0.15</Table.Cell>
            <Table.Cell>پاسخ طبیعی و متعادل</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Card>
  )
}
