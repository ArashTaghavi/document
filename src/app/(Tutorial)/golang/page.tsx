/** @format */

import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";

const Security = () => {
  const links: LinkItem[] = [
    {
      title: "اصطلاحات و مفاهیم",
      href: "/golang/terminology",
    },
  ];

  return (
    <PageLayout
      title="GO"
      toc={links}
      breadcrumb={[{ title: "فهرست مستندات", href: "/" }]}
    />
  );
};
export default Security;
