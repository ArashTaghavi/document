/** @format */

import { Code } from "@/app/Components/common";
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
      title="Open Close Principle (OCP)"
      breadcrumb={breadcrumb}
    >
      <p>
        موجودیت‌های نرم‌افزاری (کلاس‌ها، ماژول‌ها، توابع و غیره) باید برای توسعه، باز (Open for extension) و برای تغییر، بسته (Closed for modification) باشند.
      </p>
      <Code light>
        openclose.php
      </Code>
    </PageLayout>
  );
}
