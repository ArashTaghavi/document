/** @format */

import Image from 'next/image'
import { UL, LI } from '../../Components/List'
import { PageTitle } from '../../Components/common'
import ibssImage from '../../assets/images/ibss.png'
import bssImage from '../../assets/images/bss.png'
import essImage from '../../assets/images/ess.png'
import meshImage from '../../assets/images/mesh.png'

export default function Page() {
  return (
    <>
      <PageTitle title='شبکه وایرلس' />

      <UL title='Topology'>
        <LI title='IBSS (Independent Basic Service Set)'>
          IBSS شبکه‌ای بی‌سیم است که در آن دستگاه‌ها بدون نیاز به نقطه دسترسی (Access Point) به صورت مستقیم و نظیر به
          نظیر (Peer-to-Peer) با یکدیگر ارتباط برقرار می‌کنند. این نوع شبکه معمولاً به عنوان حالت Ad-Hoc شناخته می‌شود.
          کاربرد: مناسب برای ایجاد شبکه‌های موقت و کوچک، مانند تبادل داده بین چند دستگاه در فضاهای بدون زیرساخت شبکه.
          <Image src={ibssImage} width={700} height={500} alt='ibssImage' className='mt-2' />
        </LI>
        <LI title='BSS (Basic Service Set)'>
          BSS ساختار پایه‌ای شبکه‌های بی‌سیم است که شامل یک نقطه دسترسی (Access Point) و چندین دستگاه بی‌سیم می‌باشد.
          تمامی دستگاه‌ها از طریق این نقطه دسترسی به یکدیگر متصل می‌شوند و امکان دسترسی به شبکه‌های وسیع‌تر و اینترنت
          فراهم می‌شود. کاربرد: عمدتاً در شبکه‌های خانگی و سازمانی کوچک که یک نقطه دسترسی مرکزی وجود دارد، استفاده
          می‌شود.
          <Image src={bssImage} width={700} height={500} alt='bssImage' className='mt-2' />
        </LI>
        <LI title='BSS (Basic Service Set)'>
          ESS ترکیبی از چندین BSS است که از طریق شبکه‌های سیمی یا بی‌سیم به یکدیگر متصل شده‌اند تا یک شبکه بی‌سیم
          بزرگ‌تر و گسترده‌تر را تشکیل دهند. در این ساختار، چندین نقطه دسترسی با یک SSID مشترک فعالیت می‌کنند و کاربران
          می‌توانند بدون قطعی اتصال بین نقاط دسترسی جابه‌جا شوند (Roaming). کاربرد: مناسب برای سازمان‌ها، دانشگاه‌ها و
          محیط‌های وسیع که نیازمند پوشش بی‌سیم گسترده با قابلیت جابه‌جایی مداوم کاربران هستند.
          <Image src={essImage} width={700} height={500} alt='essImage' className='mt-2' />
        </LI>
        <LI title='Mesh'>
          توپولوژی مش در شبکه‌های وایرلس ساختاری است که در آن هر گره (Node) از طریق اتصال بی‌سیم به چندین گره‌ی دیگر
          متصل می‌شود. این ساختار باعث می‌شود که داده‌ها از مسیرهای مختلفی قابل انتقال باشند و مسیر ارتباطی فقط به یک
          مسیر خاص محدود نشود.
          <UL title='ویژگی ها' simple row>
            <LI title='اتصال چندگانه'> هر دستگاه می‌تواند با چند دستگاه اطراف خود ارتباط داشته باشد.</LI>
            <LI title='مسیریابی پویا'>
              داده‌ها می‌توانند از مسیرهای مختلفی عبور کنند، بسته به در دسترس بودن مسیر یا خرابی در شبکه.
            </LI>
            <LI title='خودترمیمی (Self-Healing)'>
              اگر یکی از مسیرها یا گره‌ها از کار بیفتد، داده‌ها به صورت خودکار از مسیر جایگزین عبور می‌کنند.
            </LI>
            <LI title='گسترش‌پذیری بالا'>
              اضافه کردن گره‌های جدید باعث افزایش پوشش و پایداری شبکه می‌شود، بدون نیاز به سیم‌کشی مجدد.
            </LI>
          </UL>
          <UL title='کاربرد ها' simple row>
            <LI title='شهرهای هوشمند (Smart Cities)'>-</LI>
            <LI title='شبکه‌های بی‌سیم در مناطق روستایی یا دورافتاده'>- </LI>
            <LI title='شبکه‌های بزرگ صنعتی یا ساختمانی'>- </LI>
          </UL>
          <UL title='مزایا' simple row>
            <LI title='پوشش وسیع با حداقل زیرساخت فیزیکی'>- </LI>
            <LI title='پایداری و قابلیت اطمینان بالا'>- </LI>
            <LI title='گسترش آسان و سریع'>- </LI>
          </UL>
          <UL title='معایب' simple row>
            <LI title='پیچیدگی در مدیریت و پیکربندی'>-</LI>
            <LI title='مصرف بیشتر منابع در دستگاه‌ها (برای مسیریابی و اتصال‌های چندگانه)'>- </LI>
            <LI title='احتمال تأخیر بیشتر در ارسال داده‌ها نسبت به ساختارهای ساده‌تر'>- </LI>
          </UL>
        </LI>
        <LI title='مقایسه توپولوژی های معروف شبکه'>
          <table className='border-collapse border text-md w-full'>
            <thead>
              <tr>
                <th className='border px-4 py-2 text-center'>ویژگی‌ها</th>
                <th className='border px-4 py-2 text-center'>مش (Mesh)</th>
                <th className='border px-4 py-2 text-center'>ستاره‌ای (Star)</th>
                <th className='border px-4 py-2 text-center'>حلقوی (Ring)</th>
                <th className='border px-4 py-2 text-center'>گذرگاه (Bus)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border px-4 py-2'>ساختار ارتباطی</td>
                <td className='border px-4 py-2'>هر گره به چند گره (یا همه)</td>
                <td className='border px-4 py-2'>همه گره‌ها به یک مرکز (Hub/Switch)</td>
                <td className='border px-4 py-2'>گره‌ها به صورت حلقه‌ای به هم وصل‌اند</td>
                <td className='border px-4 py-2'>همه گره‌ها روی یک خط مشترک قرار دارند</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>افزونگی و اطمینان</td>
                <td className='border px-4 py-2'>بسیار بالا (خصوصاً Full Mesh)</td>
                <td className='border px-4 py-2'>متوسط (در صورت خرابی مرکز → اختلال)</td>
                <td className='border px-4 py-2'>کم (خرابی یک گره → اختلال کل شبکه)</td>
                <td className='border px-4 py-2'>پایین (خرابی کابل → کل شبکه از کار می‌افتد)</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>هزینه و پیچیدگی</td>
                <td className='border px-4 py-2'>بالا</td>
                <td className='border px-4 py-2'>متوسط</td>
                <td className='border px-4 py-2'>پایین تا متوسط</td>
                <td className='border px-4 py-2'>پایین</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>مدیریت و نگهداری</td>
                <td className='border px-4 py-2'>سخت‌تر</td>
                <td className='border px-4 py-2'>ساده‌تر</td>
                <td className='border px-4 py-2'>دشوارتر در شبکه‌های بزرگ</td>
                <td className='border px-4 py-2'>ساده ولی آسیب‌پذیر</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>گسترش‌پذیری</td>
                <td className='border px-4 py-2'>بالا (در Partial Mesh)</td>
                <td className='border px-4 py-2'>بالا</td>
                <td className='border px-4 py-2'>محدود</td>
                <td className='border px-4 py-2'>محدود</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>تأخیر انتقال داده</td>
                <td className='border px-4 py-2'>پایین (در مسیرهای مستقیم)</td>
                <td className='border px-4 py-2'>پایین</td>
                <td className='border px-4 py-2'>متوسط تا زیاد</td>
                <td className='border px-4 py-2'>زیاد (در شبکه‌های شلوغ)</td>
              </tr>
            </tbody>
          </table>
        </LI>
        <LI title='مقایسه Partial Mesh و Full Mesh'>
          <div className='flex justify-center gap-3'>
            <table className='border-collapse border text-sm w-full'>
              <thead>
                <tr>
                  <th className='border px-4 py-2 text-center'>ویژگی‌ها</th>
                  <th className='border px-4 py-2 text-center'>Full Mesh (مش کامل)</th>
                  <th className='border px-4 py-2 text-center'>Partial Mesh (مش جزئی)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border px-4 py-2'>تعریف</td>
                  <td className='border px-4 py-2'>هر گره به تمام گره‌های دیگر متصل است.</td>
                  <td className='border px-4 py-2'>فقط برخی از گره‌ها به صورت مستقیم به چند گره دیگر متصل هستند.</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>افزونگی و اطمینان</td>
                  <td className='border px-4 py-2'>بسیار بالا، بیشترین میزان افزونگی.</td>
                  <td className='border px-4 py-2'>وجود مسیرهای جایگزین ولی محدودتر.</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>هزینه و پیچیدگی</td>
                  <td className='border px-4 py-2'>بالا به دلیل تعداد زیاد اتصالات.</td>
                  <td className='border px-4 py-2'>کمتر از Full Mesh، طراحی ساده‌تر.</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>مدیریت و نگهداری</td>
                  <td className='border px-4 py-2'>پیچیده و دشوارتر.</td>
                  <td className='border px-4 py-2'>ساده‌تر و قابل کنترل‌تر.</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>تعداد اتصالات (برای n گره)</td>
                  <td className='border px-4 py-2'>{'n(n - 1) / 2'}</td>
                  <td className='border px-4 py-2'>{'کمتر از n(n - 1) / 2 و متناسب با نیاز.'}</td>
                </tr>
              </tbody>
            </table>
            <Image src={meshImage} width={700} height={500} alt='mesh' className='mt-2' />
          </div>
        </LI>
      </UL>
    </>
  )
}
