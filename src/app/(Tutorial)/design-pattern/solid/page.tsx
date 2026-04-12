/** @format */

import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";

const Solid = () => {
  const breadcrumb: LinkItem[] = [
    { title: "فهرست مستندات", href: "/" },
    {
      title: "الگوهای طراحی حرفه ای (Design Pattern)",
      href: "/design-pattern",
    },
  ];

  const links: LinkItem[] = [
    {
      title: "Single Responsibility Principle",
      href: "/design-pattern/solid/single-responsibility",
    },

    {
      title: "Open Close Principle",
      href: "/design-pattern/solid/open-close",
    },

    {
      title: "Liskov Substitution Principle",
      href: "/design-pattern/solid/liskov-substitution",
    },
    {
      title: "Interface Segration Principle",
      href: "/design-pattern/solid/interface-segration",
    },
    {
      title: "Dependency Inversion Principle",
      href: "/design-pattern/solid/dependency-inversion",
    },
  ];

  return <PageLayout title="اصول SOLID" toc={links} breadcrumb={breadcrumb} />;
};
export default Solid;
