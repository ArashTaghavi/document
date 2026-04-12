/** @format */

import { Bold, Code } from "@/app/Components/common";
import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: "فهرست مستندات", href: "/" },
    {
      title: "الگوهای طراحی حرفه ای (Design Pattern)",
      href: "/design-pattern",
    },
    { title: "اصول SOLID", href: "/design-pattern/solid" },
  ];


  return (
    <PageLayout
      title="Liskov Substitution Principle (LSP)"
      breadcrumb={breadcrumb}
    >
      <p>
        هر child باید بدون تغییر رفتار جای parent کار کند.
      </p>
      <p>
        اگر مجبور به throw exception یا fake implementation شویم → یعنی design اشتباه است.
      </p>
      <Bold>
        راه حل واقعی: کوچک کردن interface ها (Interface Segregation هم کمک می کند)
      </Bold>
      <Code light>
        liskov.php
      </Code>
    </PageLayout>
  );
}
