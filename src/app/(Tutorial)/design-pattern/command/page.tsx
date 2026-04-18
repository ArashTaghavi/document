/** @format */

import { Bold, Card, Code } from "@/app/Components/common";
import { LI, SimpleLI, SimpleUL, UL } from "@/app/Components/List";
import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";

const Page = () => {
  const breadcrumb: LinkItem[] = [
    { title: "فهرست مستندات", href: "/" },
    {
      title: "الگوهای طراحی حرفه ای (Design Pattern)",
      href: "/design-pattern"
    },
  ];

  return (
    <PageLayout title="Command" breadcrumb={breadcrumb}>
      <p>
        Command یک الگوی رفتاری است که یک درخواست (request) را به صورت یک object کپسوله می‌کند، تا بتوان آن را: اجرا کرد، صف بندی کرد، لاگ گرفت، undo/redo کرد و... .
      </p>
      <Code light>command.php</Code>

      <p>
        هدف این هست که عملیات مورد نظر را از بیرون تعریف کنیم و به آبجکت پاس بدیم برای اجرا.
      </p>
      <UL title="Command vs Strategy">
        <LI title="Strategy">
          نحوه ی انجام کار. مثلا این سفارش را بصورت نقدی یا آنلاین پرداخت کن.
        </LI>
        <LI title="Command">
          خودِ کار. مثلا پیام را ارسال کن، پیام را پاک کن، پیام را ذخیره کن و... .
        </LI>
        <LI title="مثال">
          در استراتژی می گوییم پیام را با روش sms یا ایمیل اجرا کن ولی در کامند می گوییم پیام را ارسال کن، پیام را ذخیره کن و...
        </LI>
      </UL>
      <Card title='سناریو: سیستم پرداخت سفارش'>
        <p>
          کاربر یک سفارش ثبت می‌کند و می‌خواهد پرداخت انجام شود.
        </p>
        <UL title="سیستم باید:">
          <LI title="Command (چه کاری انجام دهد)">
            <SimpleUL>
              <SimpleLI>پرداخت سفارش</SimpleLI>
              <SimpleLI>لغو سفارش</SimpleLI>
            </SimpleUL>
          </LI>
          <LI title="Strategy (پرداخت چطور انجام شود)">
            <SimpleUL>
              <SimpleLI>پرداخت با کارت بانکی</SimpleLI>
              <SimpleLI>پرداخت با کیف پول</SimpleLI>
            </SimpleUL>
          </LI>
        </UL>
      </Card>
      <Code light>command2.php</Code>
      <UL title="توضیحات کد بالا">
        <LI title="اگر Command تنها بود">
          {"payOrder() --> فقط یک عملیات"}
        </LI>
        <LI title="اگر Strategy تنها بود">
          {"paymentStrategy->pay() -->  عملیات کنسل نداشتیم"}
        </LI>
        <LI title="ترکیب Command و Strategy">
          {"Command = عملیات (Pay / Cancel)"}
          <br />
          {"Strategy = روش (Card / Wallet)"}
        </LI>
      </UL>

    </PageLayout>
  );
};
export default Page;
