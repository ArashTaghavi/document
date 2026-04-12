/** @format */

import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";
import { TellDontAsk, Yagni } from "./components";

const Introduction = () => {
  const breadcrumb: LinkItem[] = [
    { title: "فهرست مستندات", href: "/" },
    {
      title: "الگوهای طراحی حرفه ای (Design Pattern)",
      href: "/design-pattern",
    },
  ];

  return (
    <PageLayout title="مقدمه" breadcrumb={breadcrumb}>
      <TellDontAsk />
      <Yagni />
    </PageLayout>
  );
};
export default Introduction;
