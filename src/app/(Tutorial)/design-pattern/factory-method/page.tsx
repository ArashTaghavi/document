/** @format */

import { Code } from "@/app/Components/common";
import { LI, UL } from "@/app/Components/List";
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
    <PageLayout title="Factory Method And Abstract Factory" breadcrumb={breadcrumb}>
      <p>
        الگوی Factory Method یکی از الگوهای Creational در طراحی نرم‌افزار است. هدفش این است که ساختن object را از استفاده کردن آن جدا کند.
      </p>
      <UL title="کاربرد ها">
        <LI title="کاهش وابستگی (Decoupling)">
          کد client دیگر نمی‌داند object دقیقاً چطور ساخته می‌شود. مزیت آن، تغییرات راحت تر است.
        </LI>
        <LI title="رعایت Open/Closed Principle">
          اگر نوع جدیدی از آبجکت اضافه کنیم، فقط یک فکتوری جدید می سازیم. مثلا SmsFactory, EmailFactory که در نتیجه نیازی به تغییر در کلاینت نداریم.
        </LI>
        <LI title="وقتی ساخت object پیچیده است">
          وقتی ساخت آبجکت نیاز به کانفیگ، دیپندسی اینجکشن، شروط مختلف و ... دارد.
        </LI>
        <LI title="انتخاب در Runtime">
          مثل بایند کردن سرویس ها در سرویس پروایدر های لاراول
        </LI>
      </UL>
      <UL title='مزایا'>
        <LI>کاهش coupling</LI>
        <LI>
          افزایش extensibility
        </LI>
        <LI>
          رعایت OCP
        </LI>
        <LI>
          تمیز شدن ساخت object logic
        </LI>
      </UL>
      <Code light>
        factory.php
      </Code>
      <Code light>
        factory2.php
      </Code>
      <Code light>
        factory3.php
      </Code>
    </PageLayout>
  );
};
export default Page;
