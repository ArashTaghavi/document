/** @format */

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
      SRP
    </PageLayout>
  );
}
