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
    <PageLayout title="Decorator" breadcrumb={breadcrumb}>
      <p>
        Decorator یک الگوی طراحی ساختاری است که به شما اجازه می‌دهد بدون تغییر کلاس اصلی، رفتار آن را در زمان اجرا به‌صورت ترکیبی و لایه‌ای گسترش دهید.      </p>
      <p>
        ترکیبی و لایه‌ای یعنی رفتارها به‌صورت زنجیره‌ای (chain) روی هم اعمال می‌شوند، نه اینکه داخل یک کلاس بزرگ قاطی شوند یا جدا جدا و غیرقابل ترکیب باشند.
      </p>
      <Code light>decorator.php</Code>
      <Code light>decorator2.php</Code>
      <Code light>decorator3.php</Code>
    </PageLayout>
  );
};
export default Page;
