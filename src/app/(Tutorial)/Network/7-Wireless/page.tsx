/** @format */

import Image from 'next/image'
import { UL, LI } from '../Components/List'
import { PageTitle, TextNote } from '../Components/common'
import wapImage from '../assets/images/wap.png'
import wap2Image from '../assets/images/wap-2.png'

export default function Page() {
  return (
    <>
      <PageTitle title='شبکه وایرلس' />

      <UL title='Wireless'>
        <LI title='WAP ( Wireless Access Point )'>
          سوییچ بصورت سیمی و اکسس پوینت بصورت بی سیم ارتباط بین سیستم ها را فراهم می کند. میتوانیم اکسس پوینت را به یک
          سوییچ وصل کنیم و شبکه سمت راست ( مطابق تصویر ) را به شبکه سمت چپ بصورت بی سیم متصل کنیم.
          <br />
          کاربرد اکسس پوینت معمولا در شرکت ها و سازمان هاست که با اتصال کابل LAN به آن می توانیم ارتباط سیمی را بصورت
          وایرلس در مجموعه داشته باشیم.
          <div className='flex justify-around'>
            <TextNote important size='text-md'>
              روتر فقط وظیفه ی ایجاد ارتباط بی سیم و تقویت سینگال های ارتباط وایرلس را به عهده دارد.
            </TextNote>
          </div>
          <div className='flex justify-around'>
            <TextNote important size='text-md'>
              اگر قابلیت DHCP و مسیریابی را از روتر بگیریم مانند یک Access Point عمل می کند. در واقعا روتر می تواند یک
              Access Point باشد اما Access Point نمی تواند روتر باشد.{' '}
            </TextNote>
          </div>
          <div className='flex justify-center gap-2'>
            <Image src={wapImage} width={1000} height={500} alt='wap' className='mt-2' />
            <Image src={wap2Image} width={700} height={500} alt='wap-2' className='mt-2' />
          </div>
        </LI>
      </UL>
    </>
  )
}
