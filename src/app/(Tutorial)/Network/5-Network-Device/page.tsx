/** @format */

import Image from 'next/image'
import { UL, LI } from '../Components/List'
import { PageTitle, TextNote } from '../Components/common'
import bridgeImage from '../assets/images/bridge.png'
import switchImage from '../assets/images/switch.png'

export default function Page() {
  return (
    <>
      <PageTitle title='تجهیزات شبکه' />

      <UL title='Network  Device'>
        <LI title='Hub'>...</LI>
        <LI title='Bridge'>
          مطابق شکل زیر شبکه ها را از هم تفکیک می کند. یعنی اگر سیستم 1 داده ای را ارسال کند فقط به سیستم های 2 و 3 و 4
          ارسال می شود و Brdige جلوی نشت اطلاعات به سیستم ها 5 6 7 8 را می گیرد.
          <br />
          دارای یک مک تیبل است که هر سیستمی که وارد شبکه می شود مک آدرس خود را بصورت برودکست به Bridge اعلام می کند.
          وجود این مک آدرس ها برای Bridge تعیین می کند که هر سیستم درون کدام شبکه است. معمولا دارای ۲ پورت می باشد. در
          لایه 2 شبکه کار می کند.
          <div className='flex justify-center'>
            <TextNote important size='text-md'>
              تعداد پورت های Bridge محدود است.
            </TextNote>
          </div>
          <Image src={bridgeImage} width={800} height={600} alt='brdige' className='mt-2' />
        </LI>
        <LI title='Switch'>
          مشابه Bridge است با این تفاوت که دارای سرعت بالاتر و تعداد پورت های بیشتر است.
          <br />
          در تصویر زیر اگر دو سوییچ را به هم متصل کنیم مک تیبل های هر دو شبکه باهم به اشتراک گذاشته می شود و سیستم مثلا
          1 می تواند به سیستم 8 داده ارسال کند. در لایه 2 شبکه کار می کند.
          <Image src={switchImage} width={800} height={600} alt='switch' className='mt-2' />
        </LI>
        <LI title='Router'>
          یک نرم افزار یا سخت افزار می باشد که وظیفه ی انتخاب مسیر صحیح برای ارسال داده است که در لایه 3 شبکه را دارد.
          مانند مسیریاب گوگل!
          <br />
          روتر دارای IP Table است و برخلاف سوییچ که کامپیوتر ها را به هم متصل می کند, شبکه ها را به هم متصل می کند.
          <div className='flex justify-center'>
            <TextNote important size='text-md'>
              برای ارسال داده بین دو شبکه با IP Range مختلف روتر وارد عمل می شود. به این صورت که هر دو شبکه به پورت های
              روتر متصل می شوند و در نهایت این دو شبکه می توانند باهم ارتباط برقرار کنند.
            </TextNote>
          </div>
          <div className='flex justify-center'>
            <TextNote important size='text-md'>
              دیفالت گیت وی Default Gateway وظیفه ی هدایت داده از یک شبکه به شبکه ی دیگر را دارد.
              <br />
              یعنی وقتی دو شبکه در دو رنج مختلف IP قرار دارند نمی توانند بصورت مستقیم با هم ارتباط داشته باشند. در این
              میان دیفالت گیت وی وظیفه اتصال ارتباط را به عهده می گیرد.
              <br />
              دیفالت گیت وی یک آدرس IP ( معمولا 192.168.1.1 ) است.
            </TextNote>
          </div>
        </LI>
      </UL>
    </>
  )
}
