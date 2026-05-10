/** @format */

import { Card, Table } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'
import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: 'فهرست مستندات', href: '/' },
    { title: 'هوش مصنوعی', href: '/ai' },
    { title: 'چت بات هوش مصنوعی', href: '/ai/chat-bot' }
  ]

  return (
    <PageLayout title='قوانین پرامپت نویسی خوب' breadcrumb={breadcrumb}>
      <Card title='Iterative Prompt Development'>
        <p>اصلاح پرامپت به صورت مرحله به مرحله.</p>
        <p>
          مثلا برای دیباگ یک کد، پرامپت اولیه را می نویسیم، خروجی را بررسی می کنیم، ضعف ها را پیدا می کنیم، پرامپت را
          بهتر می کنیم، دوباره تست می کنیم و این چرخه را تکرار می کنیم.
        </p>
        <UL title='چرا Iterative Prompt Development؟'>
          <LI title='مدل‌ها deterministic کامل نیستند'>
            <p>همیشه برای یک ورودی، دقیقاً یک خروجی ثابت تولید نمی‌کنند.</p>
            <p>مثلا اگر از مدل بپرسی برای من یک برند پیشنهاد بده، هر بار ممکن است جواب متفاوتی بدهد.</p>
          </LI>
          <LI title='Ambiguity (ابهام)'>
            <p>جمله چند معنی ممکن دارد و مدل باید منظور را حدس بزند.</p>
            <p>
              مثلا یک کلاس برای کاربر بنویس. در این پرامپت مشخص نیست کلاس پایتونی؟ کلاس css? کلاس جاوا یا ... مد نظر است
            </p>
          </LI>
          <LI title='محدودیت Context'>
            <p>مدل کانتکست و حافظه نامحدود ندارد.</p>
            <p>
              مثلا اگر یک PDF ۵۰۰ صفحه ای به مدل بدهیم و از آن در مورد صفحه اول سوال کنیم، اگر صفحه اول از کانتکست خارج
              شده باشد عملا مدل نمی تواند به پرامپت پاسخ درست بدهد.
            </p>
          </LI>
          <LI title='عدم تشخیص سبک درست'>
            <p>مدل فقط اطلاعات تولید نمی کند، بلکه سبک، لحن، فرم، شخصیت و... هم تولید می کند.</p>
            <p>
              مثلا به مدل می گوییم در مورد docker توضیح بده. ممکن است انتظار ما جواب تکنیکال باشد ولی مدل انگیزشی پاسخ
              دهد.
            </p>
          </LI>
          <LI title='Hallucination (توهم مدل)'>
            <p>مدل چیزی می‌سازد که واقعی نیست ولی با اعتمادبه‌نفس می‌ گوید.</p>
            <p>
              مثلا به مدل می گوییم یک جمله از دکتر شریعتی در مورد جام جهانی ۲۰۲۶ بگو. مدل پاسخ می دهد، در صورتی که دکتر
              شریعتی قبل از جام جهانی ۲۰۲۶ فوت کرده است.
            </p>
          </LI>
          <LI title='عدم فهم هدف واقعی'>
            <p>حالتی که مدل هدف واقعی پرامپت را متوجه نمی شود.</p>
            <p>
              مثلا پرامپت می گوید یک کد خوب بنویس، مدل تشخیص نمی دهد که منظور از کد خوب، کد کوتاه است؟ کد سریع است؟ کد
              خوانا است؟ و...
            </p>
          </LI>
        </UL>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>مفهوم</Table.HeaderCell>
              <Table.HeaderCell>ترجمه</Table.HeaderCell>
              <Table.HeaderCell>معنی ساده</Table.HeaderCell>
              <Table.HeaderCell>مشکل اصلی</Table.HeaderCell>
              <Table.HeaderCell>مثال Prompt ضعیف</Table.HeaderCell>
              <Table.HeaderCell>نتیجه بد</Table.HeaderCell>
              <Table.HeaderCell>Prompt بهتر</Table.HeaderCell>
              <Table.HeaderCell>هدف اصلاح</Table.HeaderCell>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Deterministic</Table.Cell>
              <Table.Cell>قطعی / قابل‌پیش‌بینی</Table.Cell>
              <Table.Cell>مدل همیشه یک جواب ثابت نمی‌دهد</Table.Cell>
              <Table.Cell>خروجی ممکن است هر بار فرق کند</Table.Cell>
              <Table.Cell>یک اسم برند بده</Table.Cell>
              <Table.Cell>هر بار اسم متفاوت</Table.Cell>
              <Table.Cell>برای یک استارتاپ AI پزشکی، ۱۰ اسم کوتاه انگلیسی بده</Table.Cell>
              <Table.Cell>کاهش randomness</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Probability Distribution</Table.Cell>
              <Table.Cell>توزیع احتمالات</Table.Cell>
              <Table.Cell>مدل محتمل‌ترین توکن بعدی را حدس می‌زند</Table.Cell>
              <Table.Cell>مدل حقیقت ذخیره نکرده</Table.Cell>
              <Table.Cell>ادامه بده</Table.Cell>
              <Table.Cell>خروجی نامشخص</Table.Cell>
              <Table.Cell>پاسخ را در ۳ bullet ادامه بده</Table.Cell>
              <Table.Cell>محدود کردن فضای پاسخ</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Temperature</Table.Cell>
              <Table.Cell>میزان تصادفی بودن</Table.Cell>
              <Table.Cell>کنترل خلاقیت مدل</Table.Cell>
              <Table.Cell>یا خیلی random یا خیلی خشک</Table.Cell>
              <Table.Cell>داستان بنویس</Table.Cell>
              <Table.Cell>متن غیرمنطقی</Table.Cell>
              <Table.Cell>temperature پایین + سبک مشخص</Table.Cell>
              <Table.Cell>پایداری خروجی</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Ambiguity</Table.Cell>
              <Table.Cell>ابهام</Table.Cell>
              <Table.Cell>جمله چند معنی دارد</Table.Cell>
              <Table.Cell>مدل مجبور به حدس می‌شود</Table.Cell>
              <Table.Cell>یک کلاس بنویس</Table.Cell>
              <Table.Cell>Java یا Python مشخص نیست</Table.Cell>
              <Table.Cell>در Python یک class برای User بنویس</Table.Cell>
              <Table.Cell>حذف ابهام</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Context</Table.Cell>
              <Table.Cell>زمینه</Table.Cell>
              <Table.Cell>اطلاعات اطراف مسئله</Table.Cell>
              <Table.Cell>بدون context حدس اشتباه</Table.Cell>
              <Table.Cell>این را optimize کن</Table.Cell>
              <Table.Cell>هدف مشخص نیست</Table.Cell>
              <Table.Cell>برای performance بهتر optimize کن</Table.Cell>
              <Table.Cell>شفاف‌سازی هدف</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Context Window</Table.Cell>
              <Table.Cell>پنجره زمینه</Table.Cell>
              <Table.Cell>حد متن قابل مشاهده مدل</Table.Cell>
              <Table.Cell>فراموشی اطلاعات قبلی</Table.Cell>
              <Table.Cell>چت طولانی</Table.Cell>
              <Table.Cell>گم شدن اطلاعات</Table.Cell>
              <Table.Cell>chunking + retrieval</Table.Cell>
              <Table.Cell>مدیریت حافظه</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Hallucination</Table.Cell>
              <Table.Cell>توهم مدل</Table.Cell>
              <Table.Cell>ساخت اطلاعات غلط</Table.Cell>
              <Table.Cell>پاسخ plausible ولی اشتباه</Table.Cell>
              <Table.Cell>مقاله Einstein 1958</Table.Cell>
              <Table.Cell>منبع جعلی</Table.Cell>
              <Table.Cell>اگر مطمئن نیستی بگو نمی‌دانم</Table.Cell>
              <Table.Cell>کاهش اطلاعات جعلی</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Constraint</Table.Cell>
              <Table.Cell>محدودیت</Table.Cell>
              <Table.Cell>قوانین خروجی</Table.Cell>
              <Table.Cell>خروجی uncontrolled</Table.Cell>
              <Table.Cell>JSON بده</Table.Cell>
              <Table.Cell>توضیح اضافه</Table.Cell>
              <Table.Cell>Return ONLY valid JSON</Table.Cell>
              <Table.Cell>کنترل فرمت</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Intent</Table.Cell>
              <Table.Cell>هدف کاربر</Table.Cell>
              <Table.Cell>نیت واقعی پشت سؤال</Table.Cell>
              <Table.Cell>مدل اشتباه برداشت می‌کند</Table.Cell>
              <Table.Cell>کد را بهتر کن</Table.Cell>
              <Table.Cell>هدف نامشخص</Table.Cell>
              <Table.Cell>برای latency بهتر optimize کن</Table.Cell>
              <Table.Cell>هم‌راستایی خروجی</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Style Steering</Table.Cell>
              <Table.Cell>هدایت سبک</Table.Cell>
              <Table.Cell>کنترل لحن پاسخ</Table.Cell>
              <Table.Cell>سبک نامناسب</Table.Cell>
              <Table.Cell>Docker را توضیح بده</Table.Cell>
              <Table.Cell>خیلی عمومی</Table.Cell>
              <Table.Cell>برای backend developer توضیح بده</Table.Cell>
              <Table.Cell>کنترل لحن</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Few-shot</Table.Cell>
              <Table.Cell>یادگیری با مثال</Table.Cell>
              <Table.Cell>دادن نمونه input/output</Table.Cell>
              <Table.Cell>عدم درک الگو</Table.Cell>
              <Table.Cell>بدون مثال</Table.Cell>
              <Table.Cell>خروجی inconsistent</Table.Cell>
              <Table.Cell>چند مثال قبل سؤال</Table.Cell>
              <Table.Cell>افزایش دقت</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Chain of Thought</Table.Cell>
              <Table.Cell>تفکر مرحله‌ای</Table.Cell>
              <Table.Cell>حل گام‌به‌گام</Table.Cell>
              <Table.Cell>پرش منطقی</Table.Cell>
              <Table.Cell>فقط جواب بده</Table.Cell>
              <Table.Cell>reasoning ضعیف</Table.Cell>
              <Table.Cell>step by step فکر کن</Table.Cell>
              <Table.Cell>بهبود reasoning</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>RAG</Table.Cell>
              <Table.Cell>بازیابی + تولید</Table.Cell>
              <Table.Cell>استفاده از داده واقعی</Table.Cell>
              <Table.Cell>تکیه روی دانش مدل</Table.Cell>
              <Table.Cell>جواب بده</Table.Cell>
              <Table.Cell>hallucination</Table.Cell>
              <Table.Cell>فقط بر اساس context جواب بده</Table.Cell>
              <Table.Cell>افزایش دقت واقعی</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Prompt Engineering</Table.Cell>
              <Table.Cell>مهندسی پرامپت</Table.Cell>
              <Table.Cell>طراحی ورودی کنترل‌شده</Table.Cell>
              <Table.Cell>prompt مبهم</Table.Cell>
              <Table.Cell>متن آزاد</Table.Cell>
              <Table.Cell>کیفیت پایین</Table.Cell>
              <Table.Cell>Role + Task + Constraints + Output</Table.Cell>
              <Table.Cell>کنترل رفتار</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Iterative Development</Table.Cell>
              <Table.Cell>توسعه تکرارشونده</Table.Cell>
              <Table.Cell>تست و اصلاح مداوم</Table.Cell>
              <Table.Cell>انتظار prompt جادویی</Table.Cell>
              <Table.Cell>یک prompt</Table.Cell>
              <Table.Cell>خروجی ضعیف</Table.Cell>
              <Table.Cell>analyze → refine → retry</Table.Cell>
              <Table.Cell>بهبود تدریجی</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Card>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>قانون / تکنیک</Table.HeaderCell>
            <Table.HeaderCell>پرامپت ضعیف</Table.HeaderCell>
            <Table.HeaderCell>پرامپت حرفه‌ای</Table.HeaderCell>
            <Table.HeaderCell>تأثیر</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Role</Table.Cell>
            <Table.Cell>کد بزن</Table.Cell>
            <Table.Cell>تو یک Senior Backend Engineer هستی</Table.Cell>
            <Table.Cell>سبک پاسخ تخصصی‌تر می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Task دقیق</Table.Cell>
            <Table.Cell>Redis رو توضیح بده</Table.Cell>
            <Table.Cell>Redis را برای caching در NestJS توضیح بده</Table.Cell>
            <Table.Cell>مدل دقیق‌تر هدف را می‌فهمد</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Context</Table.Cell>
            <Table.Cell>این کد خرابه</Table.Cell>
            <Table.Cell>پروژه TypeORM و PostgreSQL است و transaction fail می‌شود</Table.Cell>
            <Table.Cell>ابهام کمتر می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Constraints</Table.Cell>
            <Table.Cell>API بنویس</Table.Cell>
            <Table.Cell>FastAPI + async + بدون ORM</Table.Cell>
            <Table.Cell>خروجی قابل‌کنترل‌تر می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Output Format</Table.Cell>
            <Table.Cell>جواب بده</Table.Cell>
            <Table.Cell>خروجی را JSON بده</Table.Cell>
            <Table.Cell>استفاده از خروجی راحت‌تر می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Audience</Table.Cell>
            <Table.Cell>توضیح بده</Table.Cell>
            <Table.Cell>برای beginner توضیح بده</Table.Cell>
            <Table.Cell>سطح توضیح تنظیم می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Few-shot Prompting</Table.Cell>
            <Table.Cell>بدون مثال</Table.Cell>
            <Table.Cell>چند نمونه input/output بده</Table.Cell>
            <Table.Cell>مدل pattern را تقلید می‌کند</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Delimiter</Table.Cell>
            <Table.Cell>متن شلوغ</Table.Cell>
            <Table.Cell>استفاده از ``` یا XML Tags</Table.Cell>
            <Table.Cell>مدل مرز داده‌ها را بهتر می‌فهمد</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Step-by-step</Table.Cell>
            <Table.Cell>حل کن</Table.Cell>
            <Table.Cell>اول تحلیل کن بعد جواب بده</Table.Cell>
            <Table.Cell>reasoning بهتر می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Prompt Chaining</Table.Cell>
            <Table.Cell>کل سیستم را طراحی کن</Table.Cell>
            <Table.Cell>اول architecture بعد database بعد API</Table.Cell>
            <Table.Cell>خطا کمتر می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Hallucination Control</Table.Cell>
            <Table.Cell>بدون محدودیت</Table.Cell>
            <Table.Cell>اگر مطمئن نیستی بگو نمی‌دانم</Table.Cell>
            <Table.Cell>اطلاعات جعلی کمتر می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Specificity</Table.Cell>
            <Table.Cell>یه سایت طراحی کن</Table.Cell>
            <Table.Cell>Landing Page مدرن با React و Tailwind</Table.Cell>
            <Table.Cell>کیفیت خروجی جهشی بهتر می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Tone Control</Table.Cell>
            <Table.Cell>بدون لحن</Table.Cell>
            <Table.Cell>رسمی و کوتاه پاسخ بده</Table.Cell>
            <Table.Cell>سبک پاسخ کنترل می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Length Control</Table.Cell>
            <Table.Cell>بدون محدودیت</Table.Cell>
            <Table.Cell>در ۵ bullet خلاصه کن</Table.Cell>
            <Table.Cell>از اضافه‌گویی جلوگیری می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Security Prompting</Table.Cell>
            <Table.Cell>Login API بنویس</Table.Cell>
            <Table.Cell>SQL Injection-safe و rate-limited باشد</Table.Cell>
            <Table.Cell>امنیت بهتر می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Performance Prompting</Table.Cell>
            <Table.Cell>کد بنویس</Table.Cell>
            <Table.Cell>memory-efficient و scalable باشد</Table.Cell>
            <Table.Cell>خروجی production-ready‌تر می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Verification Prompting</Table.Cell>
            <Table.Cell>فقط جواب بده</Table.Cell>
            <Table.Cell>قبل پاسخ consistency را بررسی کن</Table.Cell>
            <Table.Cell>خطا کمتر می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Anti-Assumption</Table.Cell>
            <Table.Cell>بدون constraint</Table.Cell>
            <Table.Cell>چیزی فرض نکن مگر گفته شده باشد</Table.Cell>
            <Table.Cell>hallucination کمتر می‌شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Structured Prompt</Table.Cell>
            <Table.Cell>متن درهم</Table.Cell>
            <Table.Cell>Role / Task / Constraints / Output</Table.Cell>
            <Table.Cell>مدل بهتر parse می‌کند</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Iterative Refinement</Table.Cell>
            <Table.Cell>یک پرامپت نهایی</Table.Cell>
            <Table.Cell>چند بار refine و تست</Table.Cell>
            <Table.Cell>خروجی حرفه‌ای‌تر می‌شود</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </PageLayout>
  )
}
