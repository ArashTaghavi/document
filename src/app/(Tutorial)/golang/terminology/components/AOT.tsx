/** @format */

import { Card, Code } from '@/app/Components/common'
import { LI, SimpleLI, SimpleUL, UL } from '@/app/Components/List'

export default function AOT() {
  return (
    <Card title='AOT (Ahead Of Time)'>
      <SimpleUL>
        <LI title='تعریف'>
          <span>
            در AOT، کد قبل از اجرا (زمان build یا نصب) به کد ماشین (Machine Code) تبدیل می‌شود. یعنی قبل از اینکه برنامه
            اجرا شود، کاملاً آماده اجراست.
          </span>
          <Code light>C++ Code → Compiler → Binary (exe) → Run</Code>
        </LI>

        <LI title='مزایا'>
          <SimpleUL>
            <SimpleLI title='سرعت اجرای بالا'>چون دیگر در زمان اجرا چیزی کامپایل نمی‌شود.</SimpleLI>
            <SimpleLI title='قابل پیش‌بینی بودن performance'>چون همه چیز از قبل آماده شده است.</SimpleLI>
            <SimpleLI title='عدم نیاز با runtime سنگین'>مثلاً C++ نیازی به VM ندارد.</SimpleLI>
          </SimpleUL>
        </LI>
        <LI title='معایب'>
          <SimpleUL>
            <SimpleLI title='زمان buil طولانی تر'>build ممکن است چند دقیقه تا چند ساعت طول بکشد.</SimpleLI>
            <SimpleLI title='عدم optimization runtime'>
              <span>چون اطلاعات واقعی اجرای کاربر را ندارد.</span>
              <p>
                مثلا در AOT نمی توانیم متوجه شویم که کاربر چه ورودی هایی را زیاد استفاده می کند و چه مسیر هایی در hot
                path هستند.
              </p>
            </SimpleLI>
          </SimpleUL>
        </LI>
      </SimpleUL>
    </Card>
  )
}
