/** @format */

import { Bold, Code, Table, TextNote } from "@/app/Components/common";
import { SimpleLI, SimpleUL, UL } from "@/app/Components/List";
import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";

const Page = () => {
  const breadcrumb: LinkItem[] = [
    { title: "فهرست مستندات", href: "/" },
    {
      title: "الگوهای طراحی حرفه ای (Design Pattern)",
      href: "/design-pattern",
    },
  ];

  return (
    <PageLayout title="Chain of Responsibility" breadcrumb={breadcrumb}>
      <p>
        Chain of Responsibility یک الگوی رفتاری است که در آن یک درخواست به‌جای اینکه مستقیم توسط یک کلاس پردازش شود، از یک زنجیره از handler ها عبور می‌کند تا یکی از آن‌ها (یا چندتا به ترتیب) آن را پردازش کنند یا به handler بعدی پاس دهند.
      </p>
      <p>
        <Bold>سناریو: </Bold>فرض کنید یک سیستم برای پردازش درخواست های پشتیبانی داریم که بسته به شدت مشکل باید توسط یکی از موارد زیر بررسی شود:
      </p>
      <SimpleUL>
        <SimpleLI>مشکلات ساده (Low)</SimpleLI>
        <SimpleLI>مشکلات متوسط (Medium)</SimpleLI>
        <SimpleLI>مشکلات بحرانی (High)</SimpleLI>
      </SimpleUL>
      <p>
        <Bold>هدف: </Bold> بجای استفاده از if/else های زیاد، درخواست وارد یک زنجیره می شود.
      </p>
      <p>به این صورت که اول Level1 بررسی می کند، اگر نتوانست درخواست را پردازش کند وارد Level2 می شود و این زنجیره تا پردازش درخواست ادامه پیدا می کند.</p>

      <UL title="Chain of Responsibility vs Strategy">
        <SimpleLI title="Chain of Responsibility">
          بر اساس شرایط تصمیم گرفته می شود کدام هندلر اجرا شود.
        </SimpleLI>
        <SimpleLI title="Strategy">صراحتا اعلام می کنیم کدام بخش از کد اجرا شود.</SimpleLI>
        <SimpleLI title="تشابه">
          <SimpleUL title="سناریو انتخاب رستوران">
            <SimpleLI title="Strategy">رستوران ایتالیایی انتخاب می کنم.</SimpleLI>
            <SimpleLI title="Chain of Responsibility">
              وارد اول خیابان می شوم، اگر رستوران داشت وارد می شوم، در غیر این صورت به خیابان بعدی می روم.
            </SimpleLI>

          </SimpleUL>
        </SimpleLI>
      </UL>
      <TextNote>مثال لاراولی :‌ Guard یک Strategy و Middleware یه Chain of Responsibility است.</TextNote>
      <TextNote>در یک Chain امکان اجرا شدن بیش از یک handler نیز وجود دارد. مثلا چک کردن دسترسی کاربر به خرید، بررسی محدودیت روزانه خرید کاربر، داشتن موجودی و ... برای انجام خرید.</TextNote>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>ویژگی</Table.HeaderCell>
            <Table.HeaderCell>Strategy</Table.HeaderCell>
            <Table.HeaderCell>Chain</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>انتخاب</Table.Cell>
            <Table.Cell>explicit (دستی)</Table.Cell>
            <Table.Cell>implicit (خودکار)</Table.Cell>

          </Table.Row>
          <Table.Row>
            <Table.Cell>تعداد اجرا</Table.Cell>
            <Table.Cell>یکی</Table.Cell>
            <Table.Cell>ممکن است چند هندلر بررسی کنند</Table.Cell>

          </Table.Row>
          <Table.Row>
            <Table.Cell>flow</Table.Cell>
            <Table.Cell>ثابت</Table.Cell>
            <Table.Cell>داینامیک</Table.Cell>

          </Table.Row>
          <Table.Row>
            <Table.Cell>هدف</Table.Cell>
            <Table.Cell>Bheavior swap</Table.Cell>
            <Table.Cell>Request routing</Table.Cell>

          </Table.Row>
        </Table.Body>
      </Table>
      <Code light>chainofresponsibility.php</Code>
      <Code light>chainofresponsibility2.php</Code>
    </PageLayout>
  );
};
export default Page;
