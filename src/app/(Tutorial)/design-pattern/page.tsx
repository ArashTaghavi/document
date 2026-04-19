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
    {
      title: "Fly Weight",
      href: "/design-pattern/fly-weight"
    },
    {
      title: "Proxy",
      href: "/design-pattern/proxy"
    },
    {
      title: "Strategy",
      href: "/design-pattern/strategy"
    },
    {
      title: "Chain of Responsibility",
      href: "/design-pattern/chain-of-responsibility"
    },
    {
      title: "Observer",
      href: "/design-pattern/observer"
    },
    {
      title: "State",
      href: "/design-pattern/state"
    },
    {
      title: "Template Method",
      href: "/design-pattern/template-method"
    },
    {
      title: "Command",
      href: "/design-pattern/command"
    },
    {
      title: "Mediator",
      href: "/design-pattern/mediator"
    }
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
