/** @format */

import { Table } from '@/app/Components/common'
import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: 'فهرست مستندات', href: '/' },
    { title: 'هوش مصنوعی', href: '/ai' },
    { title: 'مبانی هوش مصنوعی و یادگیری ماشین', href: '/ai/machine-learning-basic' }
  ]

  return (
    <PageLayout title='الگوریتم های ماشین لرنینگ' breadcrumb={breadcrumb}>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>نوع یادگیری</Table.HeaderCell>
            <Table.HeaderCell>تعریف</Table.HeaderCell>
            <Table.HeaderCell>داده ورودی</Table.HeaderCell>
            <Table.HeaderCell>هدف مدل</Table.HeaderCell>
            <Table.HeaderCell>سناریو واقعی</Table.HeaderCell>
            <Table.HeaderCell>مثال ساده</Table.HeaderCell>
            <Table.HeaderCell>الگوریتم‌های معروف</Table.HeaderCell>
            <Table.HeaderCell>کاربردها</Table.HeaderCell>
            <Table.HeaderCell>مزایا</Table.HeaderCell>
            <Table.HeaderCell>محدودیت‌ها</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Supervised Learning</Table.Cell>

            <Table.Cell>یادگیری با داده‌های برچسب‌دار یعنی مدل هم ورودی را می‌بیند هم جواب درست را.</Table.Cell>

            <Table.Cell>Input + Label</Table.Cell>

            <Table.Cell>یادگیری رابطه بین ورودی و خروجی</Table.Cell>

            <Table.Cell>
              شرکت ایمیل می‌خواهد اسپم را تشخیص دهد. میلیون‌ها ایمیل دارد که مشخص شده: Spam یا Not Spam
            </Table.Cell>

            <Table.Cell>"Win Money Now" → Spam "Hello Friend" → Not Spam</Table.Cell>

            <Table.Cell>
              Linear Regression Logistic Regression Decision Tree Random Forest SVM Neural Network
            </Table.Cell>

            <Table.Cell>تشخیص اسپم پیش‌بینی قیمت خانه OCR پزشکی تشخیص تصویر</Table.Cell>

            <Table.Cell>دقت بالا قابل ارزیابی آموزش مستقیم</Table.Cell>

            <Table.Cell>نیاز شدید به داده برچسب‌دار Label کردن گران است</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Unsupervised Learning</Table.Cell>

            <Table.Cell>یادگیری بدون جواب درست مدل خودش باید ساختار و الگو را کشف کند.</Table.Cell>

            <Table.Cell>فقط Input</Table.Cell>

            <Table.Cell>کشف شباهت‌ها و گروه‌ها</Table.Cell>

            <Table.Cell>
              فروشگاه اینترنتی می‌خواهد مشتری‌های مشابه را پیدا کند بدون اینکه گروه‌بندی از قبل داشته باشد.
            </Table.Cell>

            <Table.Cell>گروه 1: گیمرها گروه 2: خریداران لوکس گروه 3: کاربران عادی</Table.Cell>

            <Table.Cell>K-Means DBSCAN PCA AutoEncoder</Table.Cell>

            <Table.Cell>خوشه‌بندی مشتری کشف تقلب سیستم پیشنهاد کاهش ابعاد</Table.Cell>

            <Table.Cell>نیاز نداشتن به Label مناسب داده عظیم</Table.Cell>

            <Table.Cell>تفسیر سخت‌تر ارزیابی دشوار</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Semi-Supervised Learning</Table.Cell>

            <Table.Cell>ترکیب داده برچسب‌دار و بدون برچسب</Table.Cell>

            <Table.Cell>مقداری Label + مقدار زیادی بدون Label</Table.Cell>

            <Table.Cell>استفاده از داده کم‌برچسب برای یادگیری بهتر</Table.Cell>

            <Table.Cell>بیمارستان میلیون‌ها MRI دارد، ولی فقط تعداد کمی توسط پزشک برچسب خورده‌اند.</Table.Cell>

            <Table.Cell>1000 تصویر: سرطان 1 میلیون تصویر: بدون برچسب</Table.Cell>

            <Table.Cell>Pseudo Labeling Consistency Training Semi-Supervised Neural Networks</Table.Cell>

            <Table.Cell>پزشکی NLP بینایی ماشین داده اینترنتی</Table.Cell>

            <Table.Cell>کاهش هزینه Labeling استفاده بهتر از داده</Table.Cell>

            <Table.Cell>پیچیدگی بیشتر احتمال خطای Label مصنوعی</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Reinforcement Learning</Table.Cell>

            <Table.Cell>یادگیری با پاداش و تنبیه مدل با آزمون و خطا رفتار درست را یاد می‌گیرد.</Table.Cell>

            <Table.Cell>State + Reward</Table.Cell>

            <Table.Cell>بیشینه کردن پاداش بلندمدت</Table.Cell>

            <Table.Cell>ربات می‌خواهد راه رفتن یاد بگیرد. اگر نیفتد: Reward اگر زمین بخورد: Penalty</Table.Cell>

            <Table.Cell>حرکت درست → +10 برخورد → -50</Table.Cell>

            <Table.Cell>Q-Learning Deep Q Network (DQN) PPO Policy Gradient</Table.Cell>

            <Table.Cell>Game AI رباتیک ماشین خودران Trading</Table.Cell>

            <Table.Cell>مناسب تصمیم‌گیری پویا یادگیری رفتار پیچیده</Table.Cell>

            <Table.Cell>آموزش بسیار سنگین نیاز به Trial & Error زیاد</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </PageLayout>
  )
}
