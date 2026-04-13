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
    <PageLayout title="Adapter" breadcrumb={breadcrumb}>
      <p>در حالت کلی adapter یک «مترجم» بین دو چیزی که زبان همدیگر را نمی‌فهمند.</p>
      <p>
        این الگو زمانی استفاده می شود که میخوایم یا چند سیستمی که رفتار یکسان دارند اما پیاده سازی هایشان متفاوت است کار کنیم، مثل درگاه های بانکی.
      </p>
      <Code light>adapter.php</Code>
    </PageLayout>
  );
};
export default Page;
