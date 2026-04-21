/** @format */

import { Card, Code, Table } from '@/app/Components/common'
import { LI, SimpleLI, SimpleUL, UL } from '@/app/Components/List'
import { Check, ClosedCaption, DoorClosed, X } from 'lucide-react'

export default function ByteCode() {
  return (
    <Card title='Byte Code'>
      <SimpleUL>
        <LI title='تعریف'>
          <p>بایت‌کد (Bytecode) یک فرم میانی (Intermediate Representation) از کد است که:</p>
          <SimpleUL>
            <SimpleLI>نه کد انسان‌خوان (source code) است.</SimpleLI>
            <SimpleLI>نه کد مستقیم CPU (machine code).</SimpleLI>
          </SimpleUL>
          <p>کدی است که توسط یک ماشین مجازی (VM) قابل اجرا یا کامپایل شدن است.</p>
          <Code light>Java Code → Bytecode → JVM → Machine Code → CPU</Code>
        </LI>
        <LI title='مثال'>
          <Code light>int x = 2 + 3;</Code>
          <p>کامپایلر Java این را تبدیل می‌کند به Bytecode:</p>
          <Code light>
            {`load 2
load 3
add
store x`}
          </Code>
          <p>این کد دستور های سطح پایین تر از Java هست ولی هنوز مستقل از CPU می باشد.</p>
        </LI>
        <LI title='چرا مستقیم machine code نمی‌سازیم'>
          <Code light>یک Bytecode → اجرا روی Windows / Linux / Mac</Code>
          <p>چرا؟</p>
          <p>JVM روی هر سیستم متفاوت است ولی Bytecode یکسان است.</p>
        </LI>
        <LI title='نقش JIT'>
          <Code light>Bytecode → Machine Code (در runtime)</Code>
          <p>یعنی Bytecode قابل حمل است و JIT آن را بهینه و سریع می کند.</p>
        </LI>
        <LI title='مقایسه Byte code و Machine code'>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>ویژگی</Table.HeaderCell>
                <Table.HeaderCell>Bytecode</Table.HeaderCell>
                <Table.HeaderCell>Machine Code</Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>وابسته به CPU</Table.Cell>
                <Table.Cell>
                  <X color='red' />
                </Table.Cell>
                <Table.Cell>
                  <Check />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>قابل حمل</Table.Cell>
                <Table.Cell>
                  <Check />
                </Table.Cell>
                <Table.Cell>
                  <X color='red' />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>نیاز به VM</Table.Cell>
                <Table.Cell>
                  <Check />
                </Table.Cell>
                <Table.Cell>
                  <X color='red' />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>سرعت</Table.Cell>
                <Table.Cell>کمتر</Table.Cell>
                <Table.Cell>بیشتر</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell>ویژگی</Table.HeaderCell>
                <Table.HeaderCell>Bytecode (JIT)</Table.HeaderCell>
                <Table.HeaderCell>AOT</Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Startup</Table.Cell>
                <Table.Cell>کندتر</Table.Cell>
                <Table.Cell>سریع</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Memory</Table.Cell>
                <Table.Cell>بیشتر</Table.Cell>
                <Table.Cell>کمتر</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>نیاز به Runtime / VM</Table.Cell>
                <Table.Cell>
                  <Check />
                </Table.Cell>
                <Table.Cell>
                  <X color='red' />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>مناسب برای Embedded</Table.Cell>
                <Table.Cell>
                  <X color='red' />
                </Table.Cell>
                <Table.Cell>
                  <Check />
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>مناسب برای Lightweight</Table.Cell>
                <Table.Cell>
                  معمولاً <X color='red' />
                </Table.Cell>
                <Table.Cell>
                  <Check />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </LI>
        <LI title='مزایا'>
          <SimpleLI title='قابل حمل بودن (Portable)'>
            <p>فقط یکبار build گرفته می شود و سپس به کمک VM روی سیستم عامل های مختلف بدون recomplie اجرا می شود.</p>
          </SimpleLI>
          <SimpleLI title='اجرای هوشمند (JIT)'>
            <Code light>AOT: Best guess optimization</Code>
            <Code light>JIT: Bytecode → JIT → optimized machine code</Code>
            <p>یعنی رفتار واقعی کاربر دیده می شود و کد بر اساس usage واقعی optimize می شود.</p>
          </SimpleLI>
          <SimpleLI title='امنیت و کنترل'>
            <p>
              چون برنامه مستقیم machine code نیست در نتیجه VM می تواند آن را بررسی و در صورت لزوم اعمال محدودیت کند.
            </p>
          </SimpleLI>
          <SimpleLI title='سرعت توسعه'>
            <p>چون build سریعتر است و نیاز به compile برای هر platform نیست.</p>
          </SimpleLI>
        </LI>
        <LI title='معایب'>
          <SimpleUL>
            <SimpleLI title='Startup کندتر'>
              <p>چون</p>
              <Code light>bytecode → JIT → machine code</Code>
            </SimpleLI>
            <SimpleLI title='نیاز به runtime (JVM / CLR)'> حجم بیشتر و مصرف RAM بیشتر.</SimpleLI>
            <SimpleLI title='latency اولیه'>در برنامه‌های کوتاه‌عمر بد است.</SimpleLI>
            <SimpleLI title='dependency'>
              <p>Bytecode نیاز به JVM دارد.</p>
            </SimpleLI>
          </SimpleUL>
        </LI>
        <LI title='Bytecode بد است وقتی'>
          <SimpleUL>
            <SimpleLI>startup سریع مهم باشد.</SimpleLI>
            <SimpleLI>
              <p> سیستم Embedded یا Lightweight باشد.</p>
              <p>
                سیستم های Embedded سیستم هایی هستند که سیستمی که برای یک کار خاص طراحی شده و معمولاً منابع خیلی محدودی
                دارد. مثل میکرو کنترلر های داخل ماشین، ساعت هوشمند، سنسور دما، برد های Arduino و... .
              </p>
              <p>
                سیستم های Lightweight سیستم هایی هستند که سیستم باید کم‌حجم، سریع در startup، و کم‌مصرف باشد. مثل CLI
                Tools، میکروسرویس های کوچک، کانتینر های سبک، Serverless function و... .
              </p>
              <SimpleUL title='مشکل Bytecode در Embedded'>
                <SimpleLI title='نیاز به VM'>در نتیجه حجم زیاد، مصرف RAM بالا و پیچیدگی.</SimpleLI>
                <SimpleLI title='Latency'>compile و optimize کند.</SimpleLI>
              </SimpleUL>
              <SimpleUL title='مشکل Bytecode در سیستم های Lightweight'>
                <SimpleLI title='نیاز به VM'>در نتیجه حجم زیاد، مصرف RAM بالا و پیچیدگی.</SimpleLI>
                <SimpleLI title='Latency'>compile و optimize کند.</SimpleLI>
                <SimpleLI title='مثال'>
                  <p>
                    مثلا در یک CLI Tools اگر کامند را اجرا کنیم، چند صد میلی ثانیه طول می کشد تا JVM بالا بیاد و کد را
                    اجرا کند.
                  </p>
                </SimpleLI>
              </SimpleUL>
            </SimpleLI>
            <SimpleLI>runtime اضافی نمی‌خواهیم.</SimpleLI>
          </SimpleUL>
        </LI>
      </SimpleUL>
    </Card>
  )
}
