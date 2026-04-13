/** @format */

import { Bold, Code } from "@/app/Components/common";
import { UL, LI, SimpleUL, SimpleLI } from "@/app/Components/List";
import { PageLayout } from "@/app/Components/PageLayout/page-layout";
import { LinkItem } from "@/app/types";

const Page = () => {
  const breadcrumb: LinkItem[] = [
    { title: "فهرست مستندات", href: "/" },
    {
      title: "الگوهای طراحی حرفه ای (Design Pattern)",
      href: "/design-pattern",
    },
  ];

  return (
    <PageLayout title="Builder" breadcrumb={breadcrumb}>
      <p>
        این الگوی طراحی برای ساخت آبجکت های پیچیده است.
      </p>
      <Code light>
        builder.php
      </Code>
      <Bold>توضیحات کد بالا:</Bold>
      <UL title="نکات مهم در مورد استفاده از Builder">
        <LI simple={false} title="مدل امن (recommended)">
          <Code light>
            {`$user = (new UserBuilder())
          ->setName('Arash')
          ->setEmail('...')
          ->build();`}
          </Code>
          <SimpleUL title="مزایا">
            <SimpleLI >هیچ state قبلی وجود نداره</SimpleLI>
            <SimpleLI>قابل پیش بینی</SimpleLI>
            <SimpleLI>safe</SimpleLI>
          </SimpleUL>
        </LI>
        <LI simple={false} title="مدل قابل قبول (با reset)">
          <Code light>
            {`$builder = new UserBuilder();
$user1 = $builder->setName('A')->build();
$builder->reset();
$user2 = $builder->setName('B')->build();`}
          </Code>
          <SimpleUL title="مزایا">
            <SimpleLI>قابل کنترل</SimpleLI>
            <SimpleLI>ولی وابسته به discipline. یعنی برای جلوگیری از باگ باید متد reset را کال کنیم.</SimpleLI>
          </SimpleUL>
        </LI>
        <LI simple={false} title="مدل خطرناک (رایج‌ترین باگ)">
          <Code light>
            {`$builder = new UserBuilder();
$user1 = $builder->setName('A')->build();
$user2 = $builder->setName('B')->build();`}
          </Code>
          <SimpleUL title="معایب">
            <SimpleLI>state قبلی هنوز هست</SimpleLI>
            <SimpleLI>باگ subtle (باگی که راحت دیده نمی شود ولی اثرش خطرناک است.)</SimpleLI>
            <SimpleLI>دیباگ سخت</SimpleLI>
          </SimpleUL>
        </LI>
        <LI simple={false} title="چرا متد های setter را داخل کلاس User ننویسیم؟">
          <p>
            مزیتی که بیلدر به ما می دهد به این صورت است که ما می توانیم اول پراپرتی ها را ست کنیم، سپس در متد build بود و نبود مقادیر اجباری را validate کنیم.
          </p>
          <p>
            اما اگر متد های <code>setter</code> داخل کلاس <code>User</code> باشد، ما قابلیت اعتبارسنجی را در ابتدای ساخت آبجکت از دست می دهیم، زیرا برخلاف بیلدر که با کال کردن متد build آبجکت ساخته می شود، در حالتی که بخواهیم مستقیما از کلاس User استفاده کنیم، به محض new کردن آبجکت ما ساخته خواهد شد.
          </p>
        </LI>
      </UL>
    </PageLayout>
  );
};
export default Page;
