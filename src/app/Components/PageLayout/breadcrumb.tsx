/** @format */
import { BreadcrumbType } from "@/app/types";
import Link from "next/link";

type PropsType = { breadcrumb: BreadcrumbType[] };

export const Breadcrumb = ({ breadcrumb }: PropsType) => {
  return (
    <div className="w-full flex space-x-2">
      {breadcrumb.map((b: BreadcrumbType) => {
        return b.href ? (
          <Link href={b.href} key={b.title}>
            {b.title} {" / "}
          </Link>
        ) : (
          <p key={b.title}>{b.title}</p>
        );
      })}
    </div>
  );
};
