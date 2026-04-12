/** @format */

import { Code, TextNote } from "@/app/Components/common";
import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: "فهرست مستندات", href: "/" },
    {
      title: "الگوهای طراحی حرفه ای (Design Pattern)",
      href: "/design-pattern",
    },
    { title: "اصول SOLID", href: "/design-pattern/solid" },
  ];


  return (
    <PageLayout
      title="Single Responsibility Principle (SRP)"
      breadcrumb={breadcrumb}
    >
      <p>
        اصل Single Responsibility Principle (SRP) می‌گوید هر کلاس یا ماژول باید فقط یک دلیل برای تغییر داشته باشد، یعنی تنها یک مسئولیت مشخص و محدود را بر عهده بگیرد. اگر یک کلاس چند کار نامرتبط انجام دهد، تغییر در یکی از آن‌ها می‌تواند باعث ایجاد اثر جانبی و پیچیدگی در بقیه بخش‌ها شود. این اصل باعث افزایش خوانایی، تست‌پذیری و نگهداری بهتر کد می‌شود.
      </p>
      <TextNote>
        SRP وقتی نقض می‌شود که کلاس “تصمیم‌گیرنده‌ی رفتار” باشد، نه وقتی فقط “استفاده‌کننده‌ی رفتار” است.
      </TextNote>
      <TextNote>
        نکته کلیدی اینجاست: *SRP به این معنا نیست که هیچ کلاسی نباید از چند ابزار استفاده کند؛ بلکه به این معناست که یک کلاس نباید مسئول "چگونگی کارکرد" آن ابزارها باشد.
      </TextNote>
      <Code light>
        srp.php
      </Code>
    </PageLayout>
  );
}
