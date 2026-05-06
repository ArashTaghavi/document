/** @format */

import { Card } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'
import { PageLayout } from '@/app/Components/PageLayout/page-layout'
import { LinkItem } from '@/app/types'
import {
  Bias,
  Compare,
  DecoderOnly,
  EncoderDecoder,
  EncoderOnly,
  GreedyRandomSampling,
  ICL,
  RNN,
  SampleTopK,
  SampleTopP,
  Temprature,
  Transformer
} from './components'

export default function Page() {
  const breadcrumb: LinkItem[] = [
    { title: 'فهرست مستندات', href: '/' },
    { title: 'چت پات هوش مصنوعی', href: '/ai' }
  ]

  return (
    <PageLayout title='اصطلاحات و مفاهیم' breadcrumb={breadcrumb}>
      <Card title='اصطلاحات'>
        <UL>
          <LI title='LLM (Large Language Model)'>...</LI>
          <LI title='Context Window'>
            <p>به حداکثر تعداد «توکن»‌هایی گفته می‌شود که مدل می‌تواند هم‌زمان ببیند و بر اساس آن‌ها پاسخ تولید کند.</p>
            <p>
              مثلا مدلی که context window آن ۸۰۰۰ کلمه باشد، هنگام چت کردن با آن، آخرین ۸۰۰۰ کلمه را بخاطر می سپارد و
              بقیه ی متن های قبل از آن را نادیده می گیرد.
            </p>
          </LI>
        </UL>
      </Card>
      <RNN />
      <Transformer />
      <EncoderOnly />
      <EncoderDecoder />
      <DecoderOnly />
      <Compare />
      <ICL />
      <SampleTopK />
      <SampleTopP />
      <Temprature />
      <GreedyRandomSampling />
      <Bias />
    </PageLayout>
  )
}
