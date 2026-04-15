/** @format */

import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";

const DesignPattern = () => {
  const links: LinkItem[] = [
    {
      title: "مقدمه",
      href: "/design-pattern/introduction"
    },
    {
      title: "اصول SOLID",
      href: "/design-pattern/solid"
    },
    {
      title: "Factory Method And Abstract Factory",
      href: "/design-pattern/factory-method"
    },
    {
      title: "Builder",
      href: "/design-pattern/builder"
    },
    {
      title: "Adapter",
      href: "/design-pattern/adapter"
    },
    {
      title: "Bridge",
      href: "/design-pattern/bridge"
    },
    {
      title: "Decorator",
      href: "/design-pattern/decorator"
    },
    {
      title: "Facade",
      href: "/design-pattern/facade"
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
