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
    <PageLayout title="Proxy" breadcrumb={breadcrumb}>
      <p>
        یک آبجکت واسطه که جلوی دسترسی مستقیم به آبجکت اصلی (Real Object) را می گیرد و کنترلش می کند.
      </p>
      <SimpleUL title="دلیل استفاده">
        <SimpleLI>اعمال کنترل رو ساخت آبجکت</SimpleLI>
        <SimpleLI>اعمال lazy load</SimpleLI>
        <SimpleLI>اعمال cache</SimpleLI>
        <SimpleLI>اعمال access control</SimpleLI>
      </SimpleUL>

      <SimpleUL title='تفاوت Proxy و Decorator'>
        <SimpleLI title="Proxy">کنترل دسترسی</SimpleLI>
        <SimpleLI title="Decorator">اضافه کردن behavior</SimpleLI>
      </SimpleUL>
      <Code light>Client → Proxy → Real Object</Code>
      <Code light>prxoy.php</Code>
    </PageLayout>
  );
};
export default Page;
