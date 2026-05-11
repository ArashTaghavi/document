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
    <PageLayout title='Regression' breadcrumb={breadcrumb}>
      <p>در رگرسیون هدف این است که یک مقدار عددی پیوسته را پیش‌بینی کنیم، نه یک کلاس یا دسته.</p>

      <p>مدل یاد می‌گیرد که بین ورودی‌ها و یک خروجی عددی رابطه پیدا کند.</p>

      <UL title='الگوریتم های Regression'>
        <LI title='K-Nearest Neighbors (KNN)'>
          <p>در این الگوریتم، داده جدید بر اساس نزدیک‌ترین نمونه‌های آموزش تصمیم‌گیری می‌شود.</p>

          <p>
            مقدار K مشخص می‌کند چند همسایه در تصمیم‌گیری نقش داشته باشند و این مقدار با تست و اعتبارسنجی انتخاب می‌شود.
          </p>

          <p>
            اگر K بزرگ باشد مدل عمومی‌تر می‌شود (Underfitting) و اگر K کوچک باشد مدل حساس‌تر و پرنویزتر می‌شود
            (Overfitting).
          </p>

          <p>
            این الگوریتم هم برای Classification استفاده می‌شود (رأی‌گیری بین کلاس‌ها) و هم برای Regression استفاده
            می‌شود (میانگین‌گیری از مقادیر عددی همسایه‌ها).
          </p>

          <p>
            در حالت Regression، خروجی به جای کلاس، یک مقدار عددی پیوسته است؛ مثلاً پیش‌بینی قیمت خانه بر اساس قیمت
            خانه‌های مشابه.
          </p>
        </LI>
        <LI title='Linear Regression'>
          <p>ساده‌ترین مدل رگرسیون که یک رابطه خطی بین ورودی و خروجی پیدا می‌کند.</p>
          <p>مثلا افزایش متراژ خانه → افزایش قیمت.</p>
        </LI>

        <LI title='Polynomial Regression'>
          <p>نسخه غیرخطی Linear Regression که از چندجمله‌ای‌ها استفاده می‌کند.</p>
          <p>برای داده‌هایی که رابطه خطی ندارند مناسب است.</p>
        </LI>

        <LI title='Decision Tree Regression'>
          <p>داده را به بخش‌های مختلف تقسیم می‌کند و در هر بخش یک مقدار عددی پیش‌بینی می‌کند.</p>
          <p>مثلا خانه‌های با متراژ مشابه → قیمت مشابه.</p>
        </LI>

        <LI title='Random Forest Regression'>
          <p>چندین درخت تصمیم برای پیش‌بینی مقدار عددی استفاده می‌شود.</p>
          <p>خروجی نهایی میانگین خروجی درخت‌هاست.</p>
        </LI>

        <LI title='Support Vector Regression (SVR)'>
          <p>نسخه رگرسیونی SVM است که به جای مرز، یک تابع عددی فیت می‌کند.</p>
          <p>هدف کم کردن خطای پیش‌بینی در یک محدوده مشخص است.</p>
        </LI>

        <LI title='Ridge Regression'>
          <p>نسخه بهبود یافته Linear Regression با جلوگیری از overfitting.</p>
          <p>با اضافه کردن جریمه به وزن‌ها کار می‌کند.</p>
        </LI>

        <LI title='Lasso Regression'>
          <p>مشابه Ridge است ولی برخی ویژگی‌ها را کاملاً صفر می‌کند.</p>
          <p>برای انتخاب ویژگی‌ها هم استفاده می‌شود.</p>
        </LI>

        <LI title='Neural Network Regression'>
          <p>استفاده از شبکه عصبی برای پیش‌بینی مقدار عددی.</p>
          <p>برای روابط بسیار پیچیده و غیرخطی مناسب است.</p>
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
            <Table.Cell>KNN Regression (رگرسیون نزدیک‌ترین همسایه‌ها)</Table.Cell>
            <Table.Cell>پیش‌بینی مقدار عددی بر اساس میانگین K همسایه نزدیک</Table.Cell>
            <Table.Cell>داده عددی یا برداری</Table.Cell>
            <Table.Cell>تخمین مقدار پیوسته (continuous)</Table.Cell>
            <Table.Cell>پیش‌بینی قیمت خانه بر اساس خانه‌های مشابه</Table.Cell>
            <Table.Cell>میانگین قیمت خانه‌های نزدیک = قیمت جدید</Table.Cell>
            <Table.Cell>K-Nearest Neighbors</Table.Cell>
            <Table.Cell>پیش‌بینی قیمت، تخمین مقدار، سیستم‌های ساده عددی</Table.Cell>
            <Table.Cell>ساده، بدون آموزش پیچیده، قابل فهم</Table.Cell>
            <Table.Cell>کند، حساس به نویز، نیاز به حافظه بالا</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Linear Regression (رگرسیون خطی)</Table.Cell>
            <Table.Cell>مدل خطی برای پیش‌بینی مقدار عددی</Table.Cell>
            <Table.Cell>داده عددی</Table.Cell>
            <Table.Cell>یافتن رابطه خطی بین ویژگی‌ها و خروجی</Table.Cell>
            <Table.Cell>پیش‌بینی قیمت خانه</Table.Cell>
            <Table.Cell>متراژ بیشتر → قیمت بیشتر</Table.Cell>
            <Table.Cell>Linear Regression</Table.Cell>
            <Table.Cell>اقتصاد، قیمت‌گذاری</Table.Cell>
            <Table.Cell>ساده و سریع</Table.Cell>
            <Table.Cell>ضعیف در داده غیرخطی</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Polynomial Regression (رگرسیون چندجمله‌ای)</Table.Cell>
            <Table.Cell>مدل غیرخطی بر اساس توابع چندجمله‌ای</Table.Cell>
            <Table.Cell>داده عددی</Table.Cell>
            <Table.Cell>مدل‌سازی روابط غیرخطی</Table.Cell>
            <Table.Cell>رشد جمعیت در زمان</Table.Cell>
            <Table.Cell>رشد ابتدا کم بعد زیاد</Table.Cell>
            <Table.Cell>Polynomial Regression</Table.Cell>
            <Table.Cell>مدل‌سازی روندها</Table.Cell>
            <Table.Cell>قابل انعطاف</Table.Cell>
            <Table.Cell>overfitting در درجات بالا</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Decision Tree Regression (درخت تصمیم رگرسیون)</Table.Cell>
            <Table.Cell>تقسیم داده و پیش‌بینی مقدار عددی در هر بخش</Table.Cell>
            <Table.Cell>داده ساخت‌یافته</Table.Cell>
            <Table.Cell>پیش‌بینی مقدار عددی</Table.Cell>
            <Table.Cell>قیمت‌گذاری خانه</Table.Cell>
            <Table.Cell>خانه مشابه → قیمت مشابه</Table.Cell>
            <Table.Cell>Decision Tree</Table.Cell>
            <Table.Cell>قیمت‌گذاری، تحلیل داده</Table.Cell>
            <Table.Cell>قابل تفسیر</Table.Cell>
            <Table.Cell>ناپایدار</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Random Forest Regression (جنگل تصادفی رگرسیون)</Table.Cell>
            <Table.Cell>میانگین خروجی چند درخت تصمیم</Table.Cell>
            <Table.Cell>داده عددی</Table.Cell>
            <Table.Cell>افزایش دقت پیش‌بینی عددی</Table.Cell>
            <Table.Cell>پیش‌بینی قیمت خودرو</Table.Cell>
            <Table.Cell>میانگین چند مدل</Table.Cell>
            <Table.Cell>Random Forest</Table.Cell>
            <Table.Cell>مالی، پزشکی</Table.Cell>
            <Table.Cell>دقت بالا</Table.Cell>
            <Table.Cell>کند و سنگین</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>SVR (Support Vector Regression) (رگرسیون بردار پشتیبان)</Table.Cell>
            <Table.Cell>نسخه رگرسیونی SVM برای پیش‌بینی عددی</Table.Cell>
            <Table.Cell>داده عددی</Table.Cell>
            <Table.Cell>حداقل کردن خطای پیش‌بینی</Table.Cell>
            <Table.Cell>پیش‌بینی دما</Table.Cell>
            <Table.Cell>تابع نزدیک داده‌ها</Table.Cell>
            <Table.Cell>SVM</Table.Cell>
            <Table.Cell>زمان، قیمت، پیش‌بینی علمی</Table.Cell>
            <Table.Cell>دقت بالا</Table.Cell>
            <Table.Cell>تنظیم سخت</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Ridge Regression (رگرسیون ریج)</Table.Cell>
            <Table.Cell>Linear Regression با جریمه L2</Table.Cell>
            <Table.Cell>داده عددی</Table.Cell>
            <Table.Cell>کاهش overfitting</Table.Cell>
            <Table.Cell>پیش‌بینی فروش</Table.Cell>
            <Table.Cell>مدل پایدارتر از خطی</Table.Cell>
            <Table.Cell>Linear Regression</Table.Cell>
            <Table.Cell>اقتصاد، پیش‌بینی</Table.Cell>
            <Table.Cell>پایداری بالا</Table.Cell>
            <Table.Cell>کمی bias اضافه می‌کند</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Lasso Regression (رگرسیون لاسو)</Table.Cell>
            <Table.Cell>Linear Regression با حذف برخی ویژگی‌ها</Table.Cell>
            <Table.Cell>داده عددی</Table.Cell>
            <Table.Cell>انتخاب ویژگی مهم</Table.Cell>
            <Table.Cell>تحلیل داده پزشکی</Table.Cell>
            <Table.Cell>برخی ویژگی‌ها صفر می‌شوند</Table.Cell>
            <Table.Cell>Linear Regression</Table.Cell>
            <Table.Cell>Feature Selection</Table.Cell>
            <Table.Cell>حذف ویژگی اضافی</Table.Cell>
            <Table.Cell>ممکن است اطلاعات مهم حذف شود</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Neural Network Regression (شبکه عصبی رگرسیون)</Table.Cell>
            <Table.Cell>شبکه عصبی برای پیش‌بینی مقدار عددی</Table.Cell>
            <Table.Cell>داده پیچیده و بزرگ</Table.Cell>
            <Table.Cell>یادگیری روابط غیرخطی پیچیده</Table.Cell>
            <Table.Cell>پیش‌بینی قیمت بازار</Table.Cell>
            <Table.Cell>ورودی → عدد خروجی</Table.Cell>
            <Table.Cell>Deep Learning</Table.Cell>
            <Table.Cell>تصویر، صدا، اقتصاد</Table.Cell>
            <Table.Cell>بسیار قدرتمند</Table.Cell>
            <Table.Cell>نیاز به داده زیاد</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Code light>regression_models.py</Code>
    </PageLayout>
  )
}
