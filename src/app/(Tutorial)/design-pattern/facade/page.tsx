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
    <PageLayout title="Facade" breadcrumb={breadcrumb}>
      <p>
        Facade یک الگوی طراحی است که یک interface ساده و یکپارچه روی یک سیستم پیچیده قرار می‌دهد تا استفاده از آن راحت‌تر شود.
      </p>
      <p>
        زمانی که یک کار ساده داریم، ولی در پشت صحنه سرویس های زیادی کال می شوند، مثلا برای ثبت سفارش، علاوه بر ثبت، لاگ گیری، ارسال نوتیفیکیشن، تنظیمات دلیوری و... در پشت صحنه انحام می شود
      </p>
      <Code light>facade.php</Code>
    </PageLayout>
  );
};
export default Page;
