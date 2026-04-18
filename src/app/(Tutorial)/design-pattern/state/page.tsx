/** @format */

import { Code, TextNote } from "@/app/Components/common";
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
    <PageLayout title="State" breadcrumb={breadcrumb}>
      <p>
        State Design Pattern یک الگوی رفتاری است که به یک object اجازه می‌دهد وقتی وضعیت (state) آن تغییر می‌کند، رفتار خودش را هم تغییر دهد؛ طوری که انگار آن object در زمان‌های مختلف “کلاس متفاوتی” دارد.
      </p>
      <p>ایده اصلی به این صورت است که هر state تبدیل به یک کلاس شود.</p>
      <TextNote>
        یکی از نشانه های استفاده از این الگو، وجود if/else های زیاد و وابسته به state است.
      </TextNote>
      <TextNote>
        State Pattern باعث می شود به جای تغییر یک کلاس مرکزی (Order)، فقط کلاس‌های جدید state اضافه کنیم و رفتار سیستم از داخل state ها مدیریت شود، نه داخل if/else های Order.
      </TextNote>
      <TextNote>
        State Pattern رفتار مربوط به هر وضعیت را داخل کلاس‌های جداگانه کپسوله می‌کند و آن را از کلاس Context (مثل Order) خارج می‌کند، به طوری که Context فقط نقش نگهدارنده و تغییردهنده state را دارد.
      </TextNote>
      <Code light>state.php</Code>
    </PageLayout>
  );
};
export default Page;
