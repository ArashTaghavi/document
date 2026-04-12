/** @format */

import { LinkItem, StepType } from "@/app/types";

const url: string = "https://test.com/post.php?id=10";

const steps: StepType[] = [
  { title: "۱", body: "کشف آسیب پذیری SQL Injection" },
  { title: "۲", body: "پیدا کردن تعداد ستون های موجود در کوئری" },
  { title: "۳", body: "واکشی اطلاعات موجود در دیتابیس" },
  { title: "۴", body: "خطاهای امنیتی احتمالی و روش های دور زدن آن" },
  { title: "۵", body: "جمع بندی" },
];

const breadcrumb: LinkItem[] = [
  { title: "فهرست مستندات", href: "/" },
  { title: "هک و امنیت", href: "/security" },
  { title: "کلوپ ۱", href: "/security/club-1" },
];

const title = "مراحل انجام کار";

export { url, steps, breadcrumb, title };
