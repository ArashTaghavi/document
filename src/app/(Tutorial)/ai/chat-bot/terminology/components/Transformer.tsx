/** @format */

import { Bold, Card, Code, Divider, Table } from '@/app/Components/common'
import { SimpleLI, SimpleUL } from '@/app/Components/List'

export default function Transformer() {
  return (
    <Card title='Transformer'>
      <p>
        ترنسفورمر یک معماری در Machine Learning است که برای کار با داده‌های ترتیبی (مثل متن) طراحی شده، اما برخلاف
        مدل‌های قدیمی، همهٔ ورودی را هم‌زمان پردازش می‌کند.
      </p>
      <p>به جای اینکه کلمات را تک تک بخواند، روابط بین کلمات را باهم بررسی می کند.</p>
      <p>
        مفهومی در ترنسفورمر وجود دارد به نام <code>Attention Mechanism </code> به این صورت که در ترنسفورمر، مکانیزم توجه
        به مدل این امکان را می‌دهد که برای هر کلمه، میزان اهمیت سایر کلمات را محاسبه کرده و بر اساس آن، درک بهتری از
        جمله به دست آورد.
      </p>
      <p>
        به زبان ساده تر ترنسفورمر وقتی یک کلمه را در متن می بیند، بررسی می کند که کدام کلمه های دیگر برای فهم این کلمه
        مهم تر هستند.
      </p>
      <p>
        «میزان اهمیت سایر کلمات» یعنی وزنی که مدل به هر کلمهٔ دیگر می‌دهد تا مشخص کند آن کلمه چقدر در درک کلمهٔ فعلی نقش
        دارد.
      </p>
      <Divider />
      <p>
        <Bold>مثال: علی به حسین گفت که او خسته است</Bold>
      </p>
      <p>در این بخش کلمه ی "او" مبهم است. یعنی مدل باید تصمیم بگیرد "او" یعنی علی یا حسین؟</p>
      <SimpleUL title='ساختار Transformer'>
        <SimpleLI title='Embedding'>
          <p>تبدیل متن به عدد. زیرا مدل معنی کلمه را نمی فهمد. پس هر کلمه را تبدیل به یک بردار می کند.</p>
        </SimpleLI>
        <SimpleLI title='Self Attention'>
          <p>هر کلمه به بقیهٔ کلمه‌ها نگاه می‌کند و اهمیتشان را حساب می‌کند.</p>
          <p> مثلا در جمله ی علی به حسین گفت اون خسته است، برای کلمه ی "او" این اتفاق رخ می دهد:</p>
          <Code light>
            {`علی → 0.7
حسین → 0.25
گفت → 0.05`}
          </Code>
          <p>یعنی مدل حدس می‌زند «او» احتمالاً به «علی» اشاره دارد.</p>
          <p>این کار برای تمام کلمات هم‌زمان انجام می‌شود.</p>
        </SimpleLI>
        <SimpleLI title='Multi-Head Attention'>
          به‌جای یک نگاه، چند نگاه مختلف دارد: یک نگاه برای معنی، یک نگاه برای گرامر، یک نگاه برای ارتباط ها
        </SimpleLI>
        <SimpleLI title='Feed Forward Layer'>
          <p>بعد از attention، هر کلمه جداگانه از یک شبکه ساده عبور می‌کند.</p>
          <p>وظیفه ی این مرحله، تقویت اطلاعات و ترکیب ویژگی هاست.</p>
          <p>
            مثلا اگر attention می گوید «او» به «علی» مرتبط است، این لایه کمک می کند این ارتباط دقیق تر و قوی تر شود.
          </p>
        </SimpleLI>
        <SimpleLI title='Positional Encoding'>
          <p>چون مدل همه کلمات را هم‌زمان می‌بیند، باید بفهمد ترتیب مهم است.</p>
          <p>
            مثلا «علی کتاب خواند» و و «کتاب علی خواند» معنای مختلفی دارند. پس به هر کلمه یک اطلاعات اضافه می شود که
            بداند کلمه کجای جمله قرار دارد.
          </p>
        </SimpleLI>
        <SimpleLI title='Residual Connection + Layer Norm'>
          <p>این دو برای پایدار کردن آموزش هستند.</p>
          <p>
            <Bold>Residual: </Bold> یعنی خروچی + ورودی قبلی، که کمک می کند اطلاعات قبلی گم نشود.
          </p>
          <p>
            <Bold>Layer Norm: </Bold> نرمال کردن داده ها برای اینکه مدل پایدار تر یاد بگیرد. نرمال سازی به این دلیل است
            که بعد از عبور بردار های کلمات از لای های مختلف، ممکن است بعضی عدد خیلی بزرگ یا خیلی کوچک شوند و باعث
            ناپایداری مدل شوند. به همین دلیل در این مرحله دیتا ها نرمال سازی می شود.
          </p>
        </SimpleLI>
      </SimpleUL>
      <SimpleUL title='مراحل ترنسفورم'>
        <SimpleLI>تبدیل کلمات به عدد</SimpleLI>
        <SimpleLI>اضافه شدن موقعیت</SimpleLI>
        <SimpleLI>محاسبه توجه بین همه کلمات</SimpleLI>
        <SimpleLI>ترکیب چند نوع توجه (multi-head)</SimpleLI>
        <SimpleLI>پردازش نهایی هر کلمه</SimpleLI>
        <SimpleLI>تثبیت با residual و normalization</SimpleLI>
      </SimpleUL>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>ویژگی</Table.HeaderCell>
            <Table.HeaderCell>RNN</Table.HeaderCell>
            <Table.HeaderCell>Transformer</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>نحوهٔ پردازش</Table.Cell>
            <Table.Cell>ترتیبی (کلمه به کلمه)</Table.Cell>
            <Table.Cell>موازی (همه کلمات هم‌زمان)</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>حافظه از گذشته</Table.Cell>
            <Table.Cell>محدود و تدریجی</Table.Cell>
            <Table.Cell>قوی با استفاده از Attention</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>سرعت پردازش</Table.Cell>
            <Table.Cell>کند</Table.Cell>
            <Table.Cell>سریع</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>وابستگی‌های طولانی</Table.Cell>
            <Table.Cell>ضعیف (فراموشی)</Table.Cell>
            <Table.Cell>قوی</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>معماری اصلی</Table.Cell>
            <Table.Cell>Hidden State (حالت مخفی)</Table.Cell>
            <Table.Cell>{`:contentReference[oaicite:0]{(index = 0)}`}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>مشکل رایج</Table.Cell>
            <Table.Cell>Vanishing Gradient</Table.Cell>
            <Table.Cell>هزینهٔ محاسباتی بالا</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>مقیاس‌پذیری</Table.Cell>
            <Table.Cell>محدود</Table.Cell>
            <Table.Cell>بسیار بالا</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>استفاده در مدل‌های جدید</Table.Cell>
            <Table.Cell>کم</Table.Cell>
            <Table.Cell>بسیار زیاد (پایهٔ LLMها)</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Bold>
        RNN مانند خواندن خط به خط یک کتاب (کند و فراموشکار) و Transformer مانند دیدن کل صفحه بصورت یکجا و فهم ارتباطات
        (سریع و دقیق)
      </Bold>
    </Card>
  )
}
