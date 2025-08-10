/** @format */

import Image from 'next/image'
import { UL, LI } from '../../Components/List'
import { PageTitle, TextNote } from '../../Components/common'
import twistedPairImage from '../../assets/images/twisted-pair.png'

export default function Page() {
  return (
    <>
      <PageTitle title='انواع توپولوژی' />

      <UL title='توپولوژی Star'>
        <LI title='Hub'>
          این وسیله محل اتصال سیستم ها به شبکه می باشد. یعنی سیستم ها بجای اتصال به یک کابل کواکسیال به Hub متصل می
          شوند.
        </LI>
        <LI title='Twisted pair'>
          کابلی شامل ۸ رشته مسی که بصورت دوتا دوتا ست. یعنی چهار جفت دوتایی. ترتیب کابل ها مهم است. نام سوکت موجود در
          تصویر RG-45 است.
          <Image src={twistedPairImage} width={700} height={500} alt='twisted' className='mt-2' />
        </LI>
        <LI title='Troubleshooting'>
          با وجود Hub عملیات عیب یابی ساده می شود. به این صورت که اگر سیستمی قطع شود علت آن را در خود سیستم یا اتصالش به
          Hub بررسی می کنند.
        </LI>
      </UL>
      <div className='flex justify-center'>
        <TextNote important size='text-lg'>
          بقیه شرایط مشابه توپولوژی Bus می باشد.
        </TextNote>
      </div>
    </>
  )
}
