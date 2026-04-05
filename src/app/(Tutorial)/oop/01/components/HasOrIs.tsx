/** @format */

import { AiDescription, Bold, Card, Code } from '@/app/Components/common'

export default function HasOrIs() {
  return (
    <Card title='Has a or Is a and Composition?'>
      <p>این مفهوم برای درک این موضوع استفاده می شود که کجا باید از ارث بری و کجا باید از کامپوزیشن استفاده کنیم.</p>
      <p>هر زمانی که یک کلاس (فرزند) مصداق یک کلاس دیگر (والد) باشد از ارث بری استفاده می شود.</p>
      <p>هر زمانی که یک کلاس در یک کلاس دیگر ایفای نقش کند از کامپوزیشن استفاده می شود.</p>
      <p>
        کلاس <code>User</code> دقیقا یک <code>Model</code> است، زیرا عملیات دیتابیسی ای که در <code>Model</code> پیاده
        سازی شده است را لازم دارد.
      </p>
      <p>
        کلاس <code>Order</code> صرفا به برخی متد های کلاس های <code>Payment</code> و <code>Notification</code> احتیاج
        دارد.
      </p>
      <p>کامپوزیشن کمک میکند که یک کلاس بزرگ را به قطعات کوچکتر خرد کنیم.</p>
      <Code>composition.php</Code>

      <AiDescription dark>
        <Bold>قاعده‌ی خوب:</Bold>
        <p>اگر گفتی «X یک Y است»، احتمالاً ارث‌بری. مثلاً Dog is an Animal</p>
        <p>اگر گفتی «X یک Y دارد»، احتمالاً کامپوزیشن. مثلا ًCar has an Engine</p>
      </AiDescription>
    </Card>
  )
}
