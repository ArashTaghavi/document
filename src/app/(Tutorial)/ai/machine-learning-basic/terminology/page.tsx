/** @format */

import { Card, Table } from '@/app/Components/common'
import { LI, SimpleLI, SimpleUL, UL } from '@/app/Components/List'
import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: 'فهرست مستندات', href: '/' },
    { title: 'هوش مصنوعی', href: '/ai' },
    { title: 'مبانی هوش مصنوعی و یادگیری ماشین', href: '/ai/machine-learning-basic' }
  ]

  return (
    <PageLayout title='اصطلاحات و مفاهیم' breadcrumb={breadcrumb}>
      <Card title='اصطلاحات'>
        <UL>
          <LI title='AI (Artificial Intelligence) - هوش مصنوعی'>
            <p>
              هوش مصنوعی یعنی ساخت سیستم‌هایی که بتوانند کارهایی انجام دهند که معمولاً به «هوش انسانی» نیاز دارد؛ مثل
              تصمیم‌گیری، فهم زبان، دیدن، یا حل مسئله.
            </p>
          </LI>
          <LI title='ML (Machine Learning) - یادگیری ماشین'>
            <p>
              زیرمجموعه‌ای از AI است که به جای برنامه‌نویسی مستقیم، به مدل «داده می‌دهیم» تا خودش الگوها را یاد بگیرد.
            </p>
            <p>
              مثلا به جای اینکه بگوییم اگر کلمه free بود ایمیل اسپم است، هزاران ایمیل به سیستم می دهیم و خودش یاد می
              گیرد چه چیزی اسپم است.
            </p>
          </LI>
          <LI title='ANN (Artificial Neural Network) - شبکه عصبی مصنوعی'>
            <p>
              یک مدل در ML است که از ساختار مغز انسان الهام گرفته؛ از «نورون‌ها» تشکیل شده که داده را لایه‌لایه پردازش
              می‌کنند.
            </p>
            <SimpleUL title='مثال تشخیص گربه از سگ'>
              <SimpleLI title='لایه اول'>لبه‌ها و خطوط را می‌ بیند.</SimpleLI>
              <SimpleLI title='لایه دوم'>شکل گوش/چشم را تشخیص می‌ دهد.</SimpleLI>
              <SimpleLI title='لایه سوم'>تصمیم نهایی می‌ گیرد.</SimpleLI>
            </SimpleUL>
          </LI>
          <LI title='DL (Deep Learning) - یادگیری عمیق'>
            <p>زیرمجموعه‌ای از ML است که از ANN با «لایه‌های خیلی زیاد» (Deep) استفاده می‌کند.</p>
            <SimpleUL title='سناریو تشخیص گفتار'>
              <SimpleLI title='لایه اول'>صدا های خام</SimpleLI>
              <SimpleLI title='لایه دوم'>آوا ها</SimpleLI>
              <SimpleLI title='لایه سوم'>کلمات و جملات</SimpleLI>
            </SimpleUL>
          </LI>
        </UL>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>مفهوم</Table.HeaderCell>
              <Table.HeaderCell>تعریف</Table.HeaderCell>
              <Table.HeaderCell>نقش در مدل</Table.HeaderCell>
              <Table.HeaderCell>دلیل فنی</Table.HeaderCell>
              <Table.HeaderCell>مثال عددی (A=0.7, B=0.2, C=0.1)</Table.HeaderCell>
              <Table.HeaderCell>نمونه رفتار مدل</Table.HeaderCell>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <Table.Cell>AI</Table.Cell>
              <Table.Cell>سیستم‌هایی که رفتار هوشمند شبیه انسان انجام می‌دهند</Table.Cell>
              <Table.Cell>چتر کلی تمام سیستم‌های هوشمند</Table.Cell>
              <Table.Cell>
                هدف AI حل مسئله، تصمیم‌گیری، استدلال و تعامل هوشمند است. ممکن است Rule-Based یا Learning-Based باشد.
              </Table.Cell>
              <Table.Cell>اگر ورودی «سلام» باشد → خروجی می‌تواند پاسخ انسانی تولید کند</Table.Cell>
              <Table.Cell>چت‌بات، سیستم پیشنهاد فیلم، ماشین خودران</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>ML</Table.Cell>
              <Table.Cell>یادگیری الگوها از داده بدون برنامه‌نویسی مستقیم</Table.Cell>
              <Table.Cell>بخش یادگیرنده در AI</Table.Cell>
              <Table.Cell>
                مدل با مشاهده داده، وزن‌ها و الگوها را یاد می‌گیرد تا روی داده جدید پیش‌بینی انجام دهد.
              </Table.Cell>
              <Table.Cell>10000 ایمیل → مدل یاد می‌گیرد: spam≈0.9 normal≈0.1</Table.Cell>
              <Table.Cell>تشخیص اسپم، پیش‌بینی قیمت خانه، پیشنهاد محصول</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>ANN</Table.Cell>
              <Table.Cell>شبکه‌ای از نورون‌های مصنوعی الهام‌گرفته از مغز</Table.Cell>
              <Table.Cell>مدل یادگیری در ML</Table.Cell>
              <Table.Cell>
                هر نورون ورودی را وزن‌دهی می‌کند، Activation می‌گیرد، و نتیجه را به لایه بعد می‌دهد.
              </Table.Cell>
              <Table.Cell>x1×w1 + x2×w2 + bias → activation → output</Table.Cell>
              <Table.Cell>تشخیص تصویر، OCR، تشخیص دست‌خط</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>DL</Table.Cell>
              <Table.Cell>شبکه عصبی عمیق با لایه‌های زیاد</Table.Cell>
              <Table.Cell>نسخه پیشرفته ANN</Table.Cell>
              <Table.Cell>لایه‌های متعدد ویژگی‌های پیچیده را مرحله‌به‌مرحله استخراج می‌کنند.</Table.Cell>
              <Table.Cell>لایه 1: خطوط لایه 5: چشم لایه 20: چهره کامل</Table.Cell>
              <Table.Cell>ChatGPT، تشخیص چهره، ترجمه ماشینی</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Bias</Table.Cell>
              <Table.Cell>عدد قابل یادگیری برای جابه‌جا کردن خروجی نورون</Table.Cell>
              <Table.Cell>انعطاف‌پذیری تصمیم مدل</Table.Cell>
              <Table.Cell>Bias کمک می‌کند مدل حتی وقتی ورودی صفر است بتواند خروجی معنادار تولید کند.</Table.Cell>
              <Table.Cell>output = (x×w) + b اگر: x=0 ولی: b=0.8 خروجی هنوز فعال می‌شود.</Table.Cell>
              <Table.Cell>تنظیم حساسیت نورون‌ها</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Weight</Table.Cell>
              <Table.Cell>اهمیت هر ورودی در تصمیم مدل</Table.Cell>
              <Table.Cell>دانش اصلی مدل</Table.Cell>
              <Table.Cell>وزن‌ها مشخص می‌کنند کدام ویژگی تاثیر بیشتری روی خروجی داشته باشد.</Table.Cell>
              <Table.Cell>w(cat ears)=0.9 w(background)=0.1</Table.Cell>
              <Table.Cell>مدل یاد می‌گیرد گوش گربه مهم‌تر از پس‌زمینه است</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Activation Function</Table.Cell>
              <Table.Cell>تابعی برای غیرخطی کردن خروجی نورون</Table.Cell>
              <Table.Cell>ایجاد توانایی یادگیری پیچیده</Table.Cell>
              <Table.Cell>بدون Activation، کل شبکه فقط یک معادله خطی ساده می‌شود.</Table.Cell>
              <Table.Cell>ReLU(x)=max(0,x)</Table.Cell>
              <Table.Cell>تشخیص الگوهای پیچیده و غیرخطی</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Training</Table.Cell>
              <Table.Cell>فرآیند یادگیری مدل از داده</Table.Cell>
              <Table.Cell>تنظیم وزن‌ها و biasها</Table.Cell>
              <Table.Cell>مدل خطا را حساب می‌کند و با Backpropagation وزن‌ها را اصلاح می‌کند.</Table.Cell>
              <Table.Cell>prediction=0.3 target=1.0 error=0.7</Table.Cell>
              <Table.Cell>مدل کم‌کم پاسخ درست را یاد می‌گیرد</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Inference</Table.Cell>
              <Table.Cell>استفاده از مدل آموزش‌دیده برای پاسخ‌دهی</Table.Cell>
              <Table.Cell>مرحله اجرای واقعی مدل</Table.Cell>
              <Table.Cell>در این مرحله دیگر یادگیری انجام نمی‌شود، فقط پیش‌بینی انجام می‌شود.</Table.Cell>
              <Table.Cell>ورودی: «سلام» → خروجی: «سلام! چطور می‌تونم کمک کنم؟»</Table.Cell>
              <Table.Cell>استفاده روزمره کاربران از مدل</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>مفهوم</Table.HeaderCell>
              <Table.HeaderCell>تعریف</Table.HeaderCell>
              <Table.HeaderCell>توانایی</Table.HeaderCell>
              <Table.HeaderCell>محدودیت</Table.HeaderCell>
              <Table.HeaderCell>مثال واقعی</Table.HeaderCell>
              <Table.HeaderCell>سناریو</Table.HeaderCell>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            <Table.Row>
              <Table.Cell>ANI</Table.Cell>
              <Table.Cell>Artificial Narrow Intelligence هوش مصنوعی محدود و تخصصی</Table.Cell>

              <Table.Cell>فقط یک یا چند کار مشخص را خیلی خوب انجام می‌دهد</Table.Cell>

              <Table.Cell>خارج از حوزه آموزش‌داده‌شده تقریباً ناتوان است</Table.Cell>

              <Table.Cell>ChatGPT، Google Translate، تشخیص چهره، موتور پیشنهاد یوتیوب</Table.Cell>

              <Table.Cell>
                مدل شطرنج می‌تواند قهرمان جهان را شکست دهد، ولی نمی‌تواند رانندگی کند یا آشپزی یاد بگیرد.
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>AGI</Table.Cell>
              <Table.Cell>Artificial General Intelligence هوش مصنوعی عمومی</Table.Cell>

              <Table.Cell>توانایی یادگیری، استدلال و انجام تقریباً هر کار ذهنی در سطح انسان</Table.Cell>

              <Table.Cell>هنوز به‌صورت واقعی ساخته نشده</Table.Cell>

              <Table.Cell>فعلاً وجود خارجی ندارد فقط تحقیق و تئوری</Table.Cell>

              <Table.Cell>
                اگر امروز برنامه‌نویسی بلد نباشد، خودش یاد می‌گیرد، بعد کدنویسی می‌کند، سپس پروژه را دیپلوی هم می‌کند.
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Super AI (ASI)</Table.Cell>
              <Table.Cell>Artificial Super Intelligence هوش فراتر از انسان</Table.Cell>

              <Table.Cell>در تقریباً تمام زمینه‌ها از بهترین انسان‌ها باهوش‌تر است</Table.Cell>

              <Table.Cell>فعلاً کاملاً فرضی و تئوری</Table.Cell>

              <Table.Cell>در فیلم‌ها و داستان‌های علمی‌تخیلی</Table.Cell>

              <Table.Cell>
                خودش علم جدید کشف می‌کند، تکنولوژی جدید می‌سازد، و از انسان سریع‌تر تصمیم می‌گیرد.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Card>
    </PageLayout>
  )
}
