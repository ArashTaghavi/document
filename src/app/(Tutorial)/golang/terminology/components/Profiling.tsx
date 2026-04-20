/** @format */

import { Card, Code } from '@/app/Components/common'
import { LI, SimpleLI, SimpleUL, UL } from '@/app/Components/List'

export default function Profiling() {
  return (
    <Card title='Profiling'>
      <SimpleUL>
        <LI title='تعریف'>
          <p>
            پروفایلینگ یعنی تحلیل رفتار واقعی برنامه در زمان اجرا برای اینکه بفهمیم کجاها بیشتر اجرا می شوند، بیشتر زمان
            می گیرند، بیشتر منابع مصرف می کنند (CPU, RAM, I/O).
          </p>
          <p>JIT از profiling استفاده می‌کند تا بفهمد کدام بخش ها hot هستند و باید optimize شوند.</p>
        </LI>

        <LI title='مثال'>
          <p>فرض کنید برنامه مسیر زیر را طی می کند:</p>
          <Code light>A → B → C → D</Code>
          <p>بدون profiling فقط ساختار را می دانیم ولی با profiling:</p>
          <Code light>
            {`A → ۵٪ زمان
B → ۱۰٪ زمان
C → ۷۰٪ زمان ❗
D → ۱۵٪ زمان`}
          </Code>
        </LI>
        <LI title='نتیجه'>
          <p>بخش C گلوگاه (bottleneck) است و باید optimize شود.</p>
        </LI>
        <LI title='انواع Profiling'>
          <SimpleUL>
            <SimpleLI title='CPU Profiling'>می‌فهمد کدام کد بیشترین CPU را مصرف می‌کند.</SimpleLI>
            <SimpleLI title='Memory Profiling'>می‌فهمد کجا حافظه زیاد مصرف شده یا leak داریم.</SimpleLI>
            <SimpleLI title='Time Profiling'>می‌فهمد هر تابع چقدر زمان می‌برد.</SimpleLI>
            <SimpleLI title='Call Profiling'>می‌فهمد کدام توابع، کدام توابع را صدا می‌زنند.</SimpleLI>
          </SimpleUL>
        </LI>
      </SimpleUL>
    </Card>
  )
}
