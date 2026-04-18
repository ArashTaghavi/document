/** @format */

import { Code } from "@/app/Components/common";
import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";

const Page = () => {
  const breadcrumb: LinkItem[] = [
    { title: "فهرست مستندات", href: "/" },
    {
      title: "الگوهای طراحی حرفه ای (Design Pattern)",
      href: "/design-pattern"
    },
  ];

  return (
    <PageLayout title="Template Method" breadcrumb={breadcrumb}>
      <p>
        Template Method الگویی است که اسکلت (flow) یک الگوریتم را در یک کلاس پایه تعریف می‌کند و بعضی از مراحلش را به subclassها واگذار می‌کند.
      </p>
      <Code light>templatemethod.php</Code>
    </PageLayout>
  );
};
export default Page;
