/** @format */

import { Code, Table } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'
import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: 'فهرست مستندات', href: '/' },
    { title: 'هوش مصنوعی', href: '/ai' },
    { title: 'مبانی هوش مصنوعی و یادگیری ماشین', href: '/ai/machine-learning-basic' }
  ]

  return (
    <PageLayout title='Classification' breadcrumb={breadcrumb}>
      <p>
        در طبقه‌بندی هدف این است که یک ورودی را به یک دسته یا کلاس مشخص نسبت بدهیم، نه اینکه یک عدد دقیق پیش‌ بینی کنیم.
      </p>
      <p>مدل یاد می‌گیرد که هر داده مربوط به چه گروهی است.</p>
      <UL title='الگوریتم های Classification'>
        <LI title='Logistic Regression'>
          <p>احتمال تعلق یک داده به یک کلاس را محاسبه می‌کند، سپس با یک آستانه مثلا 0.5، تصمیم می گیرد.</p>
          <p>مثلا احتما اسپم بودن یک ایمیل ۸۰ ٪.</p>
        </LI>
        <LI title='K-Nearest Neighbors (KNN)'>
          <p>هر داده جدید که به مدل داده می شود، بر اساس N نزدیک ترین همسایه ها دسته بندی می شود.</p>
          <p>پیدا کردن مقدار مناسب برای K با تست و اعتبارسنجی به دست می آید.</p>
          <p>
            هرچقدر K بزرگتر باشد مدل به سمت عمومی شدن پیش می رود. (Underfitting) و هرچقدر K کوچکتر باشد مدل حساس تر و پر
            نویز تر می شود. (Overfitting)
          </p>
        </LI>
        <LI title='Decision Tree (درخت تصمیم)'>
          <p>داده را با سوال های پشت سر هم تقسیم می کند.</p>
          <p>مثلا آیا سن بیشتر از ۱۸ است؟ آیا درامد بالاست؟ آیا سابقه دارد؟ و... تا در نهایت به یک کلاس می رسد.</p>
        </LI>
        <LI title='Random Forest'>
          <p>نسخه ی قوی تر Decision Tree</p>
          <p>از چندین درخت تصمیم استفاده می کند و بین آن ها رای گیری انجام می دهد.</p>
        </LI>
        <LI title='Support Vector Machine (SVM)'>
          <p>پیدا کردن بهترین خط یا مرز برای جدا کردن کلاس ها.</p>
          <p>مثلا دو دسته نقاط را با یک خط جدا می کند.</p>
        </LI>
        <LI title='Naive Bayes'>
          <p>استفاده از احتمال و آمار برای تصمیم گیری.</p>
          <p>مثلا احتمال اینکه یک ایمیل اسپم باشد با توجه به کلماتش.</p>
        </LI>
      </UL>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>الگوریتم</Table.HeaderCell>
            <Table.HeaderCell>تعریف</Table.HeaderCell>
            <Table.HeaderCell>نوع داده ورودی</Table.HeaderCell>
            <Table.HeaderCell>هدف مدل</Table.HeaderCell>
            <Table.HeaderCell>سناریو واقعی</Table.HeaderCell>
            <Table.HeaderCell>مثال ساده</Table.HeaderCell>
            <Table.HeaderCell>الگوریتم‌های مرتبط</Table.HeaderCell>
            <Table.HeaderCell>کاربردها</Table.HeaderCell>
            <Table.HeaderCell>مزایا</Table.HeaderCell>
            <Table.HeaderCell>محدودیت‌ها</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>KNN (نزدیک‌ترین همسایه‌ها)</Table.Cell>
            <Table.Cell>تصمیم‌گیری بر اساس نزدیک‌ترین داده‌ها</Table.Cell>
            <Table.Cell>داده عددی یا برداری</Table.Cell>
            <Table.Cell>یافتن کلاس با رأی همسایه‌ها</Table.Cell>
            <Table.Cell>تشخیص نوع کاربر جدید</Table.Cell>
            <Table.Cell>اگر بیشتر همسایه‌ها سگ باشند → سگ</Table.Cell>
            <Table.Cell>K-Nearest Neighbors</Table.Cell>
            <Table.Cell>سیستم پیشنهاد، دسته‌بندی ساده</Table.Cell>
            <Table.Cell>ساده و قابل فهم</Table.Cell>
            <Table.Cell>کند در داده بزرگ، حساس به نویز</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Logistic Regression (رگرسیون لجستیک)</Table.Cell>
            <Table.Cell>مدل احتمالاتی برای طبقه‌بندی</Table.Cell>
            <Table.Cell>داده عددی</Table.Cell>
            <Table.Cell>پیش‌بینی احتمال کلاس</Table.Cell>
            <Table.Cell>تشخیص اسپم ایمیل</Table.Cell>
            <Table.Cell>احتمال 0.8 → اسپم</Table.Cell>
            <Table.Cell>Logistic Regression</Table.Cell>
            <Table.Cell>پزشکی، فیلتر اسپم</Table.Cell>
            <Table.Cell>سریع و ساده</Table.Cell>
            <Table.Cell>ضعیف در داده غیرخطی</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Decision Tree (درخت تصمیم)</Table.Cell>
            <Table.Cell>مدل شرطی if-else</Table.Cell>
            <Table.Cell>داده ساخت‌یافته</Table.Cell>
            <Table.Cell>رسیدن به تصمیم مرحله‌ای</Table.Cell>
            <Table.Cell>تصمیم وام بانکی</Table.Cell>
            <Table.Cell>اگر درآمد بالا → تأیید</Table.Cell>
            <Table.Cell>Decision Tree</Table.Cell>
            <Table.Cell>بانکداری، پزشکی</Table.Cell>
            <Table.Cell>قابل تفسیر</Table.Cell>
            <Table.Cell>overfitting</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Random Forest (جنگل تصادفی)</Table.Cell>
            <Table.Cell>چند درخت + رأی‌گیری</Table.Cell>
            <Table.Cell>داده ساخت‌یافته</Table.Cell>
            <Table.Cell>افزایش دقت پیش‌بینی</Table.Cell>
            <Table.Cell>تشخیص بیماری</Table.Cell>
            <Table.Cell>رأی اکثریت درخت‌ها</Table.Cell>
            <Table.Cell>Random Forest</Table.Cell>
            <Table.Cell>ریسک مالی، پزشکی</Table.Cell>
            <Table.Cell>دقت بالا</Table.Cell>
            <Table.Cell>کند و سنگین</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Support Vector Machine (SVM) (ماشین بردار پشتیبان)</Table.Cell>
            <Table.Cell>یافتن مرز جداکننده بهینه بین کلاس‌ها</Table.Cell>
            <Table.Cell>داده عددی</Table.Cell>
            <Table.Cell>بیشینه‌سازی فاصله بین کلاس‌ها</Table.Cell>
            <Table.Cell>تشخیص چهره</Table.Cell>
            <Table.Cell>جداسازی دو دسته با یک خط</Table.Cell>
            <Table.Cell>Support Vector Machine</Table.Cell>
            <Table.Cell>تصویر، متن</Table.Cell>
            <Table.Cell>دقت بالا در داده کم</Table.Cell>
            <Table.Cell>تنظیم سخت پارامترها</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Naive Bayes (بیز ساده)</Table.Cell>
            <Table.Cell>مدل احتمالاتی بر اساس قانون بیز</Table.Cell>
            <Table.Cell>متن یا ویژگی مستقل</Table.Cell>
            <Table.Cell>محاسبه احتمال کلاس</Table.Cell>
            <Table.Cell>فیلتر اسپم</Table.Cell>
            <Table.Cell>"free money" → اسپم</Table.Cell>
            <Table.Cell>Naive Bayes</Table.Cell>
            <Table.Cell>NLP، ایمیل</Table.Cell>
            <Table.Cell>خیلی سریع</Table.Cell>
            <Table.Cell>فرض استقلال غیرواقعی</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Neural Network (شبکه عصبی)</Table.Cell>
            <Table.Cell>شبکه چندلایه یادگیری عمیق</Table.Cell>
            <Table.Cell>داده بزرگ و پیچیده</Table.Cell>
            <Table.Cell>یادگیری روابط غیرخطی</Table.Cell>
            <Table.Cell>تشخیص تصویر</Table.Cell>
            <Table.Cell>تصویر → کلاس</Table.Cell>
            <Table.Cell>Deep Learning</Table.Cell>
            <Table.Cell>بینایی، NLP، خودرو</Table.Cell>
            <Table.Cell>بسیار قدرتمند</Table.Cell>
            <Table.Cell>نیاز به داده زیاد</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Code light>knn.py</Code>
    </PageLayout>
  )
}
