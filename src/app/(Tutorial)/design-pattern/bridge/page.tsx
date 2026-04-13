/** @format */

import { Code } from "@/app/Components/common";

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
    <PageLayout title="Bridge" breadcrumb={breadcrumb}>
      <p>
        این الگوی طراحی برای ساخت آبجکت های پیچیده است.
      </p>
      <Code light>
        bridge.php
      </Code>

    </PageLayout>
  );
};
export default Page;
