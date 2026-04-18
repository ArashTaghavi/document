/** @format */

import { Code } from "@/app/Components/common";
import { SimpleLI, SimpleUL } from "@/app/Components/List";
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
    <PageLayout title="Strategy" breadcrumb={breadcrumb}>
      <SimpleUL title="تفاوت Builer و Strategy">
        <SimpleLI title="Builder">
          می خوام این آبجکت را چطور بسازم؟
        </SimpleLI>
        <SimpleLI title="Strategy">
          می خوام این کار را چطور انجام بدهم؟
        </SimpleLI>
        <SimpleLI title="مثال">
          <SimpleUL title="Strategy (روش پخت پیتزا)">
            <SimpleLI>Oven</SimpleLI>
            <SimpleLI>Grill</SimpleLI>
            <SimpleLI>Pan</SimpleLI>
          </SimpleUL>
          <SimpleUL title="Builder (ساخت خود پیتزا)">
            <SimpleLI>Dough</SimpleLI>
            <SimpleLI>Sauce</SimpleLI>
            <SimpleLI>Cheese</SimpleLI>
            <SimpleLI>Toppings</SimpleLI>
          </SimpleUL>
        </SimpleLI>
      </SimpleUL>
      <Code light>strategyvsbuilder.php</Code>
      <Code light>strategy.php</Code>
    </PageLayout>
  );
};
export default Page;
