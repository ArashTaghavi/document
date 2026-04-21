/** @format */

import { Bold, Card, Code, Divider } from '@/app/Components/common'
import { LI, SimpleLI, SimpleUL } from '@/app/Components/List'

export default function JIT() {
  return (
    <>
      <Card title='JIT (Just-In-Time Compilation)'>
        <SimpleUL>
          <LI title='تعریف'>
            <span>
              در JIT، کد در زمان اجرا (runtime) به ماشین کد تبدیل می‌شود. یعنی برنامه ابتدا شروع به اجرا کرده و سپس کم
              کم کامپایل می شود.
            </span>
            <Code light>Java Code ↓ Bytecode ↓ JVM ↓ (runtime) JIT Compiler → Machine Code</Code>
          </LI>

          <LI title='مزایا'>
            <SimpleUL>
              <SimpleLI title='Optimization بر اساس رفتار واقعی برنامه'>
                مثلا اگر یک تابع زیاد اجرا شود، JIT آن را hot path تشخیص داده و آن را optimize می کند. که نتیجه ی آن در
                مسیرهای پرتکرار حتی ممکن است از C++ هم سریع‌تر شود (در موارد خاص).
              </SimpleLI>
              <SimpleLI title='قابل پیش‌بینی بودن performance'>چون همه چیز از قبل آماده شده است.</SimpleLI>
              <SimpleLI title='عدم نیاز با runtime سنگین'>مثلاً C++ نیازی به VM ندارد.</SimpleLI>
            </SimpleUL>
          </LI>
          <LI title='معایب'>
            <SimpleUL>
              <SimpleLI title='تأخیر اولیه (Startup latency)'>
                مثلاً اپ‌های Java یا .NET اول کند تر اجرا می شوند چون هنوز optimize نشده اند.
              </SimpleLI>
              <SimpleLI title='مصرف RAM بیشتر'>
                <p>runtime باید compiler داشته باشد و profiling انجام دهد.</p>
              </SimpleLI>
            </SimpleUL>
          </LI>
        </SimpleUL>
      </Card>
      <Senario />
    </>
  )
}

const Senario = () => {
  return (
    <Card title='مثال سناریو محور برای مقایسه رفتار JIT و AOT'>
      <p>فرض کنید یک سرویس برای پردازش سفارش های یک رستوران به صورت زیر داریم:</p>
      <Code light>
        {`
function proccessOrder($order)
{
    if (order.type == "VIP") {
        fastPath();
    } else {
        normalPath();
    }
}
`}
      </Code>

      <SimpleUL title='آمار واقعی کاربران بعد از یک ماه اجرا در production'>
        <SimpleLI title='۹۵٪ سفارش ها'>VIP</SimpleLI>
        <SimpleLI title='۵٪ سفارش ها'>Normal</SimpleLI>
      </SimpleUL>
      <p>سیستم در عمل همیشه در مسیر VIP حرکت می‌کند.</p>
      <Divider />
      <div>
        <Bold>در AOT چه اتفاقی می افتد؟</Bold>
        <Bold>کامپایلر هیچ یک از موارد زیر را نمی داند:</Bold>
        <SimpleUL>
          <SimpleLI>VIP بیشتر استفاده می‌شود.</SimpleLI>
          <SimpleLI>normal کم استفاده است.</SimpleLI>
          <SimpleLI>الگوی واقعی کاربران چیست.</SimpleLI>
        </SimpleUL>
        <Bold>نتیجه:</Bold>
        <p>
          کامپایلر فقط یک if ساده را می بیند و تصمیم می گیرد branch prediction عمومی و optimization متوسط انجام دهد.
        </p>
        <p>در واقع CPU باید مقدام چک کند آیا VIP است یا نه؟ حتی اگر ۹۵٪ اوقات VIP باشد.</p>
        <SimpleUL title='تاثیرات'>
          <SimpleLI title='cache miss بیشتر'>
            CPU داده‌ای که لازم دارد را در cache پیدا نمی‌کند و مجبور می‌شود برود از RAM بگیرد. در این مدت CPU بیکار می
            ماند و پرفورمنس به شدت افت می کند.
          </SimpleLI>
          <SimpleLI title='Branch Misprediction (اشتباه در پیش‌بینی شرط)'>
            CPU برای سریع‌تر شدن، حدس می‌زند نتیجه‌ی if چیست. اگر حدس اشتباه باشد، Branch mispredication اتفاق می افتد
            که موجب افت پرفورمنس می شود.
          </SimpleLI>
          <SimpleLI>performance کمتر از حالت ایده‌آل</SimpleLI>
        </SimpleUL>
      </div>
      <Divider />
      <div>
        <Bold>در JIT چه اتفاقی می افتد؟</Bold>
        <SimpleUL>
          <SimpleLI title='Warm-up'>
            <p>سیستم اجرا می‌شود و JIT شروع به جمع‌آوری اطلاعات می‌کند:</p>
            <p>
              VIP: 9500 calls
              <br />
              Normal: 500 calls
            </p>
          </SimpleLI>
          <SimpleLI title='Optimization'>
            <p>در این مرحله JIT می فهمد که این if همیشه VIP است و در نتیجه کد را به چیزی شبیه</p>
            <Code light>fastPath(); // مستقیم</Code>
            <p>می کند.</p>
          </SimpleLI>
          <SimpleLI>الگوی واقعی کاربران چیست.</SimpleLI>
        </SimpleUL>
        <Bold>نتیجه:</Bold>
        <p>
          کامپایلر فقط یک if ساده را می بیند و تصمیم می گیرد branch prediction عمومی و optimization متوسط انجام دهد.
        </p>
        <p>در واقع CPU باید مقدام چک کند آیا VIP است یا نه؟ حتی اگر ۹۵٪ اوقات VIP باشد.</p>
        <SimpleUL title='تاثیرات'>
          <SimpleLI title='cache miss بیشتر'>
            CPU داده‌ای که لازم دارد را در cache پیدا نمی‌کند و مجبور می‌شود برود از RAM بگیرد. در این مدت CPU بیکار می
            ماند و پرفورمنس به شدت افت می کند.
          </SimpleLI>
          <SimpleLI title='Branch Misprediction (اشتباه در پیش‌بینی شرط)'>
            CPU برای سریع‌تر شدن، حدس می‌زند نتیجه‌ی if چیست. اگر حدس اشتباه باشد، Branch mispredication اتفاق می افتد
            که موجب افت پرفورمنس می شود.
          </SimpleLI>
          <SimpleLI>performance کمتر از حالت ایده‌آل</SimpleLI>
        </SimpleUL>
      </div>
    </Card>
  )
}
