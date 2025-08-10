/** @format */

import Image from 'next/image'
import { UL, LI } from '../Components/List'
import { PageTitle, TextNote } from '../Components/common'

import topologyImage from '../assets/images/Most-Common-Types-of-Network-Topology.jpg'
import castImage from '../assets/images/cast.png'
import coaxialCableImage from '../assets/images/coaxial-cable.png'

export default function Page() {
  return (
    <>
      <PageTitle title='مباحث پایه' />
      <div className='flex'>
        <UL title='توپولوژی به نحوه ی اتصال کامپیوتر ها در یک شبکه گفته می شود.' row>
          <LI title='مثال هایی از انواع توپولوژی'>
            <Image src={topologyImage} width={500} height={500} alt='topology' className='mt-2' />
          </LI>
          <LI title='مثال هایی از انواع روش ارسال داده'>
            <Image src={castImage} width={500} height={500} alt='topology' className='mt-2' />
            <UL simple={false} textSize='text-sm'>
              <LI title='Unicast'>ارسال داده برای یک گیرنده</LI>
              <LI title='Multicast'>ارسال داده برای یک دسته گیرنده ی انتخابی</LI>
              <LI title='Multicast'>ارسال داده برای تمام گیرنده های موجود در شبکه</LI>
            </UL>
          </LI>
          <LI title='کابل کواکسیال'>
            <Image src={coaxialCableImage} width={700} height={500} alt='coaxial' className='mt-2' />
            <TextNote important>
              ایراد کابل کواکسیال در شبکه این است که انتقال اطلاعات بصورت تک هسته اتفاق می افتد و امکان ارسال اطلاعات
              بصورت همزمان وجود ندارد.
            </TextNote>
          </LI>
          <LI title='Half duplex, Full duplex'>
            <UL simple={false} textSize='text-sm'>
              <LI title='Half Duplex'>
                ارتباط Half duplex به گونه ای است که هر دو طرف نمی توانند بصورت هم زمان برای یکدیگر دیتا ارسال کنند.
                مانند بیسیم های پلیس. یک فرکانس
              </LI>
              <LI title='Full Duplex'>
                ارسال داده به گونه ای است که هر دو طرف می توانند به صورت همزمان برای یکدیگر دیتا ارسال کنند مانند تلفن و
                موبایل. دو فرکانس
              </LI>
            </UL>
          </LI>
        </UL>
      </div>
    </>
  )
}
