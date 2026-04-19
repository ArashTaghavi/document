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
      href: "/design-pattern"
    },
  ];

  return (
    <PageLayout title="Mediator" breadcrumb={breadcrumb}>
      <p>
        Mediator یعنی یک واسطه مرکزی که ارتباط بین چند object را مدیریت می‌کند تا objectها مستقیم با هم صحبت نکنند.
      </p>
      <UL title='مثال دنیای واقعی: برج مراقبت فرودگاه'>
        <LI>
          فرض کنید هواپیماها (اشیاء ما) می‌خواستند مستقیماً با هم هماهنگ کنند که چه کسی اول بنشیند. هر خلبان باید با تک‌تک خلبان‌های دیگر در شعاع چند کیلومتری صحبت می‌کرد! نتیجه؟ هرج‌ومرج مطلق.
        </LI>
        <LI>
          خلبان A به برج مراقبت می‌گوید: «من می‌خواهم بنشینم.»
        </LI>
        <LI>
          برج مراقبت (Mediator) وضعیت بقیه را بررسی می‌کند.
        </LI>
        <LI>
          برج مراقبت به خلبان B دستور می‌دهد: «کمی صبر کن تا هواپیمای A بنشیند.»
        </LI>
        <LI>
          خلبان‌ها اصلاً نیازی ندارند همدیگر را بشناسند؛ آن‌ها فقط برج مراقبت را می‌شناسند.
        </LI>
      </UL>
      <Code light>mediator.php</Code>
    </PageLayout>
  );
};
export default Page;
