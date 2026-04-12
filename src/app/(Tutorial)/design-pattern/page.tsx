/** @format */

import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";

const DesignPattern = () => {
  const links: LinkItem[] = [
    {
      title: "مقدمه",
      href: "/design-pattern/introduction",
    },
    {
      title: "اصول SOLID",
      href: "/design-pattern/solid",
    },
  ];

  return (
    <PageLayout
      title="الگوهای طراحی حرفه ای (Design Pattern)"
      toc={links}
      breadcrumb={[{ title: "فهرست مستندات", href: "/" }]}
    />
  );
};
export default DesignPattern;
