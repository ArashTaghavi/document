/** @format */

import { Card, Code } from "@/app/Components/common";

export default function Entity() {
  return (
    <Card title="Entity">
      <p>
        موجودیت هایی هستند که <code>identity</code> دارند. مثلا در لاراول، مدل
        ها می توانند
        <code>Entity </code>
        باشند، به دلیل وجود
        <code>id.</code>
      </p>
      <p>
        معمولا mutable هستند، به این دلیل که مقادیر
        <code> state </code>
        ها را تغییر می دهند. مثلا در کلاس
        <code>User </code>
        یک تابع می تواند اسم کاربر را تغییر دهد.
      </p>
      <Code>example.php</Code>
    </Card>
  );
}
