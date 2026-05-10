/** @format */

import { Card, Table } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Temprature() {
  return (
    <Card title='Temprature'>
      <p>پارامتری است که میزان تصادفی بودن انتخاب کلمات را در مدل‌های زبانی کنترل می‌کند.</p>
      <p>
        هرچه تمپریچر بالاتر باشد، مدل ریسک‌پذیرتر و خلاق‌تر می‌شود و و هرچه پایین‌تر باشد، محافظه‌کار و
        قابل‌پیش‌بینی‌تر.
      </p>
      <UL title='ایده ی پشت قضیه'>
        <LI title='Temprature پایین'>
          <p>اختلاف احتمال‌ها بیشتر می‌شود → مدل می‌چسبد به گزینه‌های مطمئن.</p>
          <p>برنده‌ها قوی‌تر می‌شوند.</p>
          <p>فقط بهترین گزینه مهم است.</p>
        </LI>
        <LI title='Temprature بالا'>
          <p>احتمال‌ها به هم نزدیک می‌شوند → انتخاب‌ها تصادفی‌تر.</p>
          <p>همه گزینه‌ها به هم نزدیک می‌شوند.</p>
          <p>همه گزینه‌ها تقریباً قابل انتخاب هستند.</p>
        </LI>
      </UL>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>حالت</Table.HeaderCell>
            <Table.HeaderCell>A</Table.HeaderCell>
            <Table.HeaderCell>B</Table.HeaderCell>
            <Table.HeaderCell>C</Table.HeaderCell>
            <Table.HeaderCell>رفتار</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>خام</Table.Cell>
            <Table.Cell>0.70</Table.Cell>
            <Table.Cell>0.20</Table.Cell>
            <Table.Cell>0.10</Table.Cell>
            <Table.Cell>پایه</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>T=0.3</Table.Cell>
            <Table.Cell>0.92</Table.Cell>
            <Table.Cell>0.07</Table.Cell>
            <Table.Cell>0.01</Table.Cell>
            <Table.Cell>خیلی قطعی</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>T=1.5</Table.Cell>
            <Table.Cell>0.55</Table.Cell>
            <Table.Cell>0.28</Table.Cell>
            <Table.Cell>0.17</Table.Cell>
            <Table.Cell>خلاق و آزاد</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Card>
  )
}
