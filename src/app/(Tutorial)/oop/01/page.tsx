/** @format */

import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";
import {
  Abstraction,
  Aggregation,
  Compare,
  Encapsulation,
  HasOrIs,
  MagicValues,
  MarkerInterface,
  Polymorphism,
} from "./components";

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: "فهرست مستندات", href: "/" },
    { title: "هنر شی گرایی", href: "/oop" },
  ];

  return (
    <PageLayout title="فصل اول" breadcrumb={breadcrumb}>
      <Compare />
      <Encapsulation />
      <MagicValues />
      <Abstraction />
      <HasOrIs />
      <Aggregation />
      <MarkerInterface />
      <Polymorphism />
    </PageLayout>
  );
}
