/** @format */

import { Card, Code } from "@/app/Components/common";

export default function ValueObject() {
  return (
    <Card title="Value Object">
      <p>کلاسی است که نماینده یک مقدار است که بصورت immutable می باشد.</p>
      <p>
        برای هر مقدار جدید، باید <code>instance</code> جدید ساخته شود.
      </p>
      <p>کاربرد آن برای نوشتن بیزینس لاجیک یا ولیدیشن روی یک مقدار است.</p>
      <Code>valueobject.php</Code>
    </Card>
  );
}
