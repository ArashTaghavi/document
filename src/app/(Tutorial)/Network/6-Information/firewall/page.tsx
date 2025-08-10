/** @format */

import { UL, LI } from '../../Components/List'
import { PageTitle, TextNote } from '../../Components/common'

export default function Page() {
  return (
    <>
      <PageTitle title='اطلاعات' />

      <UL title='Firewall'>
        <LI title='IDS ( Intruction Detection System )'>
          سیستم تشخیص نفوذ. با بررسی و تحلیل شبکه در صورت پیدا کردن مشکل یا مورد مشکوک صرفا هشدار می دهد. در واقع یک نوع
          Packet Sniffer است. مانند دزدگیر خودرو.
          <br />
          دارای یک دیتابیس است که رفتار های مشکوک و غیر عادی را با اطلاعات موجود در دیتابیس مورد بررسی قرار می دهد.
          <br />
          برای مثال نرم افزار snort یک IDS است.
          <div className='flex justify-center'>
            <TextNote important size='text-md'>
              اگر IDS در مسیر شبکه باشد Network Base و اگر روی سیستم باشد Host Base نامیده می شود. در حالت اول کل ترافیک
              شبکه که شامل چندین سرور می باشد بررسی می شود. در حالت دوم فقط ترافیک سیستمی که IDS روی آن نصب است بررسی می
              شود.
            </TextNote>
          </div>
        </LI>
        <LI title='IPS ( Intruction Prevention System )'>
          سیستم جلوگیری نفوذ. با بررسی و تحلیل شبکه در صورت پیدا کردن مشکل یا مورد مشکوک اقدام به مقابله و جلوگیری با
          تهدید می کند. مانند دزدگیر خودرو.
        </LI>
        <LI title='UTM (Unified Threats Management)'>
          UTM یا Unified Threat Management به معنی "مدیریت یکپارچه تهدیدات" یک راهکار امنیتی جامع برای شبکه است که چندین
          ابزار امنیتی (مثل فایروال، آنتی‌ویروس، فیلترینگ، VPN، تشخیص نفوذ و...) را در یک دستگاه یا نرم‌افزار ترکیب
          می‌کند.
          <h1 className='mt-5 mb-2 font-extrabold text-lg'>قابلیت های UTM:</h1>
          <table className='w-half p-3 my-2'>
            <thead>
              <tr>
                <th className='border p-2 text-center'>قابلیت</th>
                <th className='border p-2 text-center'>توضیح</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border p-2 text-center'>Firewall</td>
                <td className='border p-2 text-center'>کنترل ترافیک ورودی/خروجی طبق قوانین</td>
              </tr>
              <tr>
                <td className='border p-2 text-center'>Antivirus / Anti-Malware</td>
                <td className='border p-2 text-center'>بررسی بسته‌ها از نظر بدافزار</td>
              </tr>
              <tr>
                <td className='border p-2 text-center'>Intrusion Detection/Prevention (IDS/IPS)</td>
                <td className='border p-2 text-center'>شناسایی و جلوگیری از نفوذ</td>
              </tr>
              <tr>
                <td className='border p-2 text-center'>VPN</td>
                <td className='border p-2 text-center'>ارتباط امن بین سایت‌ها یا کارمندان از راه دور</td>
              </tr>
              <tr>
                <td className='border p-2 text-center'>Web Filtering</td>
                <td className='border p-2 text-center'>فیلتر کردن سایت‌های خطرناک یا نامناسب</td>
              </tr>
              <tr>
                <td className='border p-2 text-center'>Spam Filtering</td>
                <td className='border p-2 text-center'>جلوگیری از ایمیل‌های ناخواسته</td>
              </tr>
              <tr>
                <td className='border p-2 text-center'>Application Control</td>
                <td className='border p-2 text-center'>کنترل اپلیکیشن‌هایی که توی شبکه استفاده می‌شن</td>
              </tr>
              <tr>
                <td className='border p-2 text-center'>Data Loss Prevention (DLP)</td>
                <td className='border p-2 text-center'>جلوگیری از نشت اطلاعات حساس</td>
              </tr>
            </tbody>
          </table>
          <div className='flex mt-5'>
            <TextNote important size='text-md'>
              یکی از روش های bypass فایروال در ویندوز هایی مانند 7 و xp به این صورت بود که هکر با مهندسی اجتماعی یک بد
              افزار را روی سیستم قربانی نصب می کرد و بد افزار داده ها را از داخل سیستم عامل به هکر ارسال می کرد. فایروال
              جلوی ورود داده از بیرون را می گیرد ولی در مورد خروج داده از سیستم حساسیتی ندارد.
            </TextNote>
          </div>
        </LI>
      </UL>
    </>
  )
}
