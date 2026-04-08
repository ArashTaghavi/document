/** @format */

import { Card, Code } from '@/app/Components/common'

export default function DTO() {
  return (
    <Card title='DTO'>
      <p>
        کاربرد DTO صرفا برای انتقال دیتا می باشد.
      </p>
      <p>می تواند دارای متد
        setter باشد و الزامی به immutable بودن ندارد. چون فقط داده حمل می کند و ساید افکت ندارد.</p>
      <p> در واقع چون DTO ها صرفا وظیفه ی حمل دیتا دارند و از
        <code> state </code> ها برای محاسبات استفاده نمی کنند، در نتیجه وجود
        <code>setter </code> فقط مقدار
        <code>state </code>
        را تغییر می دهد، برخلاف سرویس ها که دارای متد های محاسباتی ای هستند که ممکن است به
        <code>state </code> ها وابسته باشند.
      </p>
      <p>برای روشن تر شدن مطلب به فایل زیر مراجعه کنید.</p>
      <Code>dto.php</Code>
    </Card>
  )
}
