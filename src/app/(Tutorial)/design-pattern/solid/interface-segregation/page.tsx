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
      title="Interface Segregation Principle (ISP)"
      breadcrumb={breadcrumb}
    >
      <p>
        هیچ کلاسی نباید مجبور باشد متدهایی را پیاده‌سازی کند که به آن‌ها نیاز ندارد.
      </p>
      <ul>
        <li>اینترفیس‌ها نباید بزرگ و سنگین باشند.</li>
        <li>اید کوچک و تخصصی (fine-grained) باشند.</li>
        <li>هر کلاس فقط چیزی را implement کند که واقعاً استفاده می‌کند.</li>
      </ul>
      <Code light>
        interfacesegregation.php
      </Code>
    </PageLayout>
  );
}
