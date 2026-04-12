/** @format */

import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";
import { Terminology, Service } from "./components";

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: "فهرست مستندات", href: "/" },
    { title: "هنر شی گرایی", href: "/oop" },
  ];

  return (
    <PageLayout title="فصل دوم" breadcrumb={breadcrumb}>
      <Terminology />
      <Service />
    </PageLayout>
  );
}
