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
      title="Dependency Inversion Principle (DIP)"
      breadcrumb={breadcrumb}
    >
      <div className="text-left">
        <TextNote>Depend on abstraction, not on concretions</TextNote>
      </div>
      <p>
        در حالت کلی مقصود از این موضوع این است که کد های ما باید به قرارداد ها (interface) وابسته باشد، نه یک کلاس پیاده سازی شده.
      </p>
      <p>
        ماژول‌های سطح بالا نباید به ماژول‌های سطح پایین وابسته باشند؛ هر دو باید به abstraction (مثل interface) وابسته باشند.
      </p>
      <Code light>
        dependencyinversion.php
      </Code>
    </PageLayout>
  );
}
