/** @format */

import { Code, Table, TextNote } from "@/app/Components/common";
import { LI, UL } from "@/app/Components/List";
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
    <PageLayout title="Observer" breadcrumb={breadcrumb}>
      <p>
        Observer یک الگوی رفتاری است که در آن یک شیء (Subject) وقتی تغییر می‌کند، به‌صورت خودکار یک یا چند شیء دیگر (Observerها) را خبر می‌کند.
      </p>
      <p>
        مثلا بعد از ثبت سفارش، انبار باید آپدیت شود، ایمیل برای کاربر ارسال شود، لاگ سفارش ثبت شود و... .
      </p>
      <UL title="Observer vs Event">
        <LI title="Observer">
          <p>
            خود آبجکت (مثلا Order) وظیفه ی نگهداری و تعریف لیست آبجکت هایی که قرار است از تغییرات با خبر شوند را نگهداری می کند.
          </p>
          <Code light>
            {`Order::created(function ($order) {
    // مستقیم به آبجکت وصل شده
});`}
          </Code>
        </LI>

        <LI title="Event">
          <p>
            صرفا منتشر می شود و هر آبجکت دیگری می تواند به آن گوش دهد.
          </p>
          <Code light>
            {`event(new OrderCreated($order));`}
          </Code>
          <p>یک event منتشر می شود و چند listener مستقل می تواند به آن متصل شود.</p>
        </LI>
      </UL>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>ویژگی</Table.HeaderCell>
            <Table.HeaderCell>Observer</Table.HeaderCell>
            <Table.HeaderCell>Event</Table.HeaderCell>
            <Table.HeaderCell>توضیحات</Table.HeaderCell>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Coupling</Table.Cell>
            <Table.Cell>نسبی</Table.Cell>
            <Table.Cell>خیلی کم</Table.Cell>
            <Table.Cell>
              در Observer کلاس‌ها به هم وابسته هستند و Subject می‌داند چه Observerهایی دارد، اما در Event هیچ شناخت مستقیمی بین فرستنده و گیرنده وجود ندارد.
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>ارتباط</Table.Cell>
            <Table.Cell>مستقیم (attach)</Table.Cell>
            <Table.Cell>غیرمستقیم (dispatcher)</Table.Cell>
            <Table.Cell>
              در Observer باید دستی observerها را attach کنی، ولی در Event فقط event را dispatch می‌کنی و سیستم خودش listenerها را مدیریت می‌کند.
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>مدیریت</Table.Cell>
            <Table.Cell>داخل object</Table.Cell>
            <Table.Cell>مرکزی (framework)</Table.Cell>
            <Table.Cell>
              Observer داخل همان کلاس Subject مدیریت می‌شود، اما Eventها در یک سیستم مرکزی مثل Event Dispatcher مدیریت می‌شوند.
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>flexibility</Table.Cell>
            <Table.Cell>محدود تر</Table.Cell>
            <Table.Cell>خیلی بالا</Table.Cell>
            <Table.Cell>
              در Observer تغییر ساختار سخت‌تر است چون وابسته به کلاس اصلی است، ولی در Event می‌توان listenerهای جدید را بدون تغییر در core اضافه کرد.
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>scalability</Table.Cell>
            <Table.Cell>متوسط</Table.Cell>
            <Table.Cell>خیلی بالا</Table.Cell>
            <Table.Cell>
              Observer بیشتر برای سیستم‌های کوچک مناسب است، ولی Event به راحتی با queue و async processing در سیستم‌های بزرگ مقیاس‌پذیر می‌شود.
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <TextNote>در سیستم لاراولی، Observer برای لاجیک های نزدیک به مدل و Event برای جدا سازی سیستم (مثل ارسال ایمیل، لاگ و...)</TextNote>

      <Code light>observer.php</Code>
    </PageLayout>
  );
};
export default Page;
