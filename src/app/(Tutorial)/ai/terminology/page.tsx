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
  Spec,
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
          <LI title='GGUF (GPT-Generated Unified Format)'>نسخه فشرده و بهینه‌شده مدل برای اجرای لوکال</LI>
          <LI title='Quantization'>
            کوانتیزیشن یعنی کم کردن دقت اعداد داخل مدل برای کم کردن حجم مدل، افزایش سرعت مدل و کاهش مصرف CPU/GPU.
          </LI>
          <LI title='CUDA (Compute Unified Device Architecture)'>
            <p>زبان/پلتفرم برای استفاده از GPU.</p>
            <p>
              قبل از CUDA، کارت های گرافیک فقط برای بازی و تصویر استفاده می شدند. بعد از CUDA، در واقع GPU تبدیل به یک
              ماشین محاسباتی خیلی سریع شد که مثلا در هوش مصنوعی می تواند محاسبات را سریع انجام دهد.
            </p>
          </LI>
          <LI title='cuDNN (CUDA Deep Neural Network Library)'>
            <p>یه لایه‌ی آماده و بهینه روی CUDA برای اجرای شبکه‌های عصبی. cuDNN در واقع یک کتابخانه است.</p>
            <p>در واقع CUDA موتور خام GPU، و cuDNN یک موتور بهینه برای هوش مصنوعی است.</p>
            <p>
              برای اجرای یک مدل هوش مصنوعی، CUDA محاسبات را اول به دستورات عمومی GPU تبدیل می کند و سپس اجرا می کند که
              کند تر است. ولی cuDNN برای اجرای دستورات هوش مصنوعی از قبل یک سری عملیات آماده و بهینه دارد، برخلاف CUDA
              که استفاده عمومی دارد.
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
      <Spec />
    </PageLayout>
  )
}
