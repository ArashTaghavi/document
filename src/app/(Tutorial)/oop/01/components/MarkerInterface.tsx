/** @format */

import { Card, Code } from '@/app/Components/common'

export default function MarkerInterface() {
  return (
    <Card title='Marker Interface'>
      <p>
        مارکر اینترفیس (Marker Interface) یعنی اینترفیسِ خالی؛ یعنی اینترفیس فقط برای این استفاده می‌شود که بگوید یک
        کلاس «این ویژگی را دارد»، نه اینکه متد خاصی را مجبور به پیاده‌سازی کند.
      </p>
      <p>
        مارکر اینترفیس‌ها برای این بودند که به نوعی metadata یا برچسب روی کلاس بگذارند تا سیستم بداند با آن کلاس چه
        رفتاری داشته باشد.
      </p>
      <Code>markerinterface.php</Code>
    </Card>
  )
}
