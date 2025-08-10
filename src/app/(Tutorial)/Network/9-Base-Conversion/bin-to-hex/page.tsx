/** @format */

import { UL, LI } from '../../Components/List'
import { PageTitle, TextNote } from '../../Components/common'

export default function Page() {
  return (
    <>
      <PageTitle title='تبدیل مبنا' />

      <UL title='Decimal To Binary'>
        <LI title='روش اول ( تقسیم متوالی )'>
          یک عدد در مبنای 10 را انقدر به 2 تقسیم می کنیم تا باقی مانده صفر شود. مثلا برای عدد 43 باقی مانده ها تا زمانی
          که خارج قسمت به 0 برسد بصورت زیر است:
          <p className='text-left'>
            <br />
            43/2 = 21 (1)
            <br />
            21/2 = 10 (1)
            <br />
            10/2 = 5 (0)
            <br />
            5/2 = 2 (1)
            <br />
            2/2 = 1 (0)
            <br />
            1/2 = 0 (1)
            <br />
          </p>
          مقدار درون پرانتز باقی مانده است که از پایین به بالا قرار می گیرد. یعنی خروجی بصورت 101011 می باشد.
          <div className='flex justify-center'>
            <TextNote important size='text-md'>
              خروجی حتما باید 8 عدد باشد که در خروجی مثال قبل 6 عدد وجود دارد. در نتیجه با اضافه کردن 2 صفر به ابتدای
              خروجی آن را به 8 عدد می رسانیم. یعنی خروجی نهایی بصورت 00101011 می باشد.
            </TextNote>
          </div>
        </LI>
        <LI title='روش سریع تر'>ویدیو 2 فصل هشت</LI>
        <LI title='تبدیل Binary به Decimal'>ویدیو 3 فصل هشت</LI>
      </UL>
    </>
  )
}
