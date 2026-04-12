/** @format */

import { Card } from "@/app/Components/common";
import { LI, UL } from "@/app/Components/List";

export default function Event() {
  return (
    <Card title="Event">
      <UL>
        <LI simple={false} title="Domain Event">
          <p>
            برای زمانی که یک ایونت داخل خود دامین اتفاق می افتد. مثلا{" "}
            <code>OrderCreated</code>
          </p>
        </LI>
        <LI simple={false} title="Integration Event">
          زمانی که می خواهیم یک اتفاق را به سیستم های دیگر اعلام کنیم. مثلا در
          میکروسرویس بعد از ایجاد یک کاربر می خواهیم به سرویس نوتیفیکیشن که در
          قالب میکروسرویس است اعلام کنیم.
        </LI>
      </UL>
    </Card>
  );
}
