/** @format */

import Image from 'next/image'
import { UL, LI } from '../Components/List'
import { PageTitle, TextNote } from '../Components/common'
import ipImage from '../assets/images/ip.png'

export default function Page() {
  return (
    <>
      <PageTitle title='IP' />

      <UL title='کلاس بندی IP ها'>
        <LI title='Class A'>مقدار 1 تا 126 را قبول می کند.</LI>
        <LI title='Class B'>مقدار 128 تا 191 را قبول می کند.</LI>
        <LI title='Class C'>مقدار 192 تا 223 را قبول می کند.</LI>
        <LI title='Class D '>مقدار 224 تا 239 را قبول می کند.</LI>
      </UL>
      <div className='flex justify-center'>
        <TextNote important>بخش Net.id ثابت است و مقدار Host.id متغیر است.</TextNote>
      </div>
      <div className='flex justify-center'>
        <Image src={ipImage} width={700} height={500} alt='ip' className='mt-2' />
      </div>
    </>
  )
}
