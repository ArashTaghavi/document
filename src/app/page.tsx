/** @format */

import { PageLayout } from "./Components/PageLayout/page-layout";

import { LinkItem } from "./types";
import { Toc } from "./Components/Toc";

export default function Page() {
  const links: LinkItem[] = [
    {
      title: "هک و امنیت",
      href: "security",
    },
    {
      title: "هنر شی گرایی",
      href: "oop",
    },
    {
      title: "الگوهای طراحی حرفه ای (Design Pattern)",
      href: "design-pattern",
    },
  ];

  return (
    <PageLayout title="فهرست مستندات">
      <Toc links={links} />
    </PageLayout>
  );
}
