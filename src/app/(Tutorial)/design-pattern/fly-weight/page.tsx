/** @format */

import { Bold, Code } from "@/app/Components/common";
import { SimpleLI, SimpleUL } from "@/app/Components/List";
import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";
import { Terminology } from "./components";

const Page = () => {
  const breadcrumb: LinkItem[] = [
    { title: "فهرست مستندات", href: "/" },
    {
      title: "الگوهای طراحی حرفه ای (Design Pattern)",
      href: "/design-pattern",
    },
  ];

  return (
    <PageLayout title="Fly Weight" breadcrumb={breadcrumb}>
      <p>
        هدف از این الگوی طراحی، جدا سازی بخش های مشترک آبجکت ها از خود آبجکت است.
      </p>
      <Bold>مثال:</Bold>
      <p>
        فرض کنید در یک بازی ۱۰۰۰۰ درخت می سازیم.
      </p>
      <SimpleUL title="حالت بد">
        <SimpleLI>مدل سه بعدی</SimpleLI>
        <SimpleLI>تکسچر</SimpleLI>
        <SimpleLI>رنگ</SimpleLI>
        <SimpleLI>موقعیت</SimpleLI>
      </SimpleUL>
      <SimpleUL title="حالت خوب">
        <SimpleLI>مدل و تکسچر {"-->"} مشترک</SimpleLI>
        <SimpleLI>موقعیت {"-->"} جدا</SimpleLI>
      </SimpleUL>
      <p>
        در حالت خوب فقط یک مدب داریم و در موقعیت های متفاوت به آن اشاره می کنند.
      </p>
      <SimpleUL title='ساختار کلی'>
        <SimpleLI>Flyweight (اینترفیس)</SimpleLI>
        <SimpleLI>Concrete Flyweight (دیتای مشترک)</SimpleLI>
        <SimpleLI>Flyweight Factory (مدیریت و reuse)</SimpleLI>
      </SimpleUL>
      <SimpleUL title="مزایا">
        <SimpleLI>کاهش شدید مصرف حافظه، زمانی که تعداد آبجکت ها زیاد است. مثل گیم</SimpleLI>
        <SimpleLI>پرفورمنس بالاتر به واسطه ی allocate کمتر</SimpleLI>
      </SimpleUL>

      <SimpleUL title="معایب">
        <SimpleLI>
          پیچیدگی بالاتر نسبت به حالت عادی
        </SimpleLI>
        <SimpleLI>
          باید intrinsic / extrinsic درست تشخیص داده شوند، در غیر این صورت دیزاین خراب می شود.
        </SimpleLI>
        <SimpleLI>
          coupling ذهنی بیشتر، چون state پخش می شود.
        </SimpleLI>
      </SimpleUL>

      <Terminology />

      <Code light>flyweight.php</Code>
    </PageLayout>
  );
};
export default Page;
