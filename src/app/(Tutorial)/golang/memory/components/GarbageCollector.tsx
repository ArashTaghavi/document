/** @format */

import { Card } from '@/app/Components/common'

export default function GarbageCollector() {
  return (
    <Card title='Garbage Collector'>
      <p>GC سیستم خودکار پاکسازی حافظه در هیپ است.</p>
      <p>
        وظیفه ی پیدا کردن داده هایی که دیگر هیچ رفرنسی (پوینتر) به آن ها نیست. در نتیجه این کار حافظه را آزاد سازی می
        کند.
      </p>
    </Card>
  )
}
