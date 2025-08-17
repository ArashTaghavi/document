/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Usefull'>
      <UL>
        <LI simple={false} title='.gitkeep'>
          توو حالت معمولی نمیتونیم یه فولدر خالی رو توی گیت کامیت کنیم. برای این کار باید توش یه فایل به اسم .gitkeep
          بسازیم.اینجوری گیت اجازه میده فولدر رو کامیت کنی. اگه یه فایلی جز این بزاریم گیت به واسطه ی کامیت کردن اون
          فایل میاد اجازه کامیت فولدر رو میده. ولی با .gitkeep میتونی خود فولدر رو کامیت کنی.
        </LI>
        <LI simple={false} title='source tree'>
          نرم افزار source tree
        </LI>
        <LI simple={false} title='git clean'>
          این دستور فایلی که کامیت نشده رو پاک میکنه. یعنی کلا تا حالا کامیت نشده باشه
          <Code>{`git clean -f filename`}</Code>
        </LI>
        <LI simple={false} title='git stash'>
          -
        </LI>
        <LI simple={false} title='HEAD'>
          یه اشاره گره که بهمون میگه الان سورس کد ما داره به کدوم برنچ یا کامیت اشاره میکنه. وقتی HEAD به یک کامیت اشاره
          میکنه اصطلاحا میگیم detach head که توو این مورد فقط باید نگاه کنیم و نباید کامیت دیگه ای بزنیم.
        </LI>
        <LI simple={false} title='git reflog'>
          این برای زمانیه که مثلا ما ۱۰ تا کامیت داشتیم حالا اومدیم برنچ master رو به چهار تا کامیت قبل ریست کردیم و
          عملا ۶ تا کامیت بعدی رو نداریم. با این دستور اون ۶ تا کامیت بعدی رو هم میتونیم ببینیم. توو خروجی HEAD@{0} نشون
          دهنده آخرین جابجایی HEAD هست حالا میتونیم آی دی اون کامیتی که میخوایم رو برداریم و مستر رو بهش ریست هارد کنیم
          تا برگردیم به حالتی که میخوایم.
        </LI>
        <LI simple={false} title='git rebase'>
          با این دستور میتونیم n کامیت آخر رو تجمیع کنیم.
          <Code>
            {`
git rebase -i HEAD~n
            `}
          </Code>
          بعد این کار n تا کامیت آخری میاد. توی ادیتور باید همه ی کامیت ها بجز اول رو مقدار pick به squash یا s تغییر
          بدیم. اولی رو هم روی همون حالت pick میزاریم بعد دوباره یه ادیتور میاد که مسیج کامیتمون رو بنویسیم. توو این
          حالت کامیتی پاک نمیشه. میتونیم با ریست دوباره ریبس رو برگردونیم به حالت قبل
        </LI>
        <LI simple={false} title='tag'>
          وقتی میخوایم روی یک کامیت خاص یه علامت بزاریم. مثلا کامیت شماره 234234324234 مربوط به نسخه ریلیز بوده. روش تگ
          میزنیم که راحت تر پیداش کنیم. میتونیم روی یک کامیت n تا تگ بزنیم. تگ ها اشاره گر به یک کامیت هستن. pointer یا
          reference
          <Code>
            {`git tag ==> همه تگ هارو میده
git tag --list "v1*" ==> میتونیم وایلد کارد بدیم بهش واسه سرچ
git tag -a v1 -m "message" ==> -a واسه اینه که توضیحات بنویسیم واسه ش توی -m
git tag "message..." commitID ==> واسه تگ زدن روی یک کامیت خاص
git tag tagName ==> تگ ساده با اسم tagName
git show tagName ==> نمایش اطلاعات 
git tag -d tagName ==> حذف تگ با نام tagName
`}
          </Code>
          <p>
            اگه -a نزاریم دیگه اطلاعات کسی که تگ رو زده و تاریخش توی show نمیاد. فقط اطلاعات کسی که کامیتی که روش تگ
            خورده میاد. a مخفف annotated هست.
          </p>
          <p>روی تگ هم میتونیم checkout کنیم.</p>
          <p>گیت هاب ورژن های برنامه رو از روی تگ تشخیص میده.</p>
        </LI>
        <LI simple={false} title='cherry pick'>
          ویدیو ۳۶
        </LI>
        <LI simple={false} title='fast forward'>
          زمانی اتفاق میافته که HEAD برنچ مستر نسبت به زمانی که از روش برنچ ساختیم تغییر نکنه. اون موقع با مرج کردن اون
          برنچ fast forward اتفاق میافته. یعنی عملا HEAD برنچ مستر میشه آخرین کامیتی که روی برنچ فیچر زدیم. ایرادش اینه
          نقطه شروع و پایان برنچ فیچر رو از دست میدیم. ولی هیستوریمون تمیز تره. توو این حالت میتونیم بجای مرج کردن برنچ
          فیچر با مستر بیایم برنچ مستر رو ریست هارد کنیم به اخرین کامیت برنچ فیچر.
        </LI>
        <LI simple={false} title='rebase'>
          وقتی که HEAD برنچ مستر بعد از ساخت برنچ فیچر تغییر میکنه. یعنی یه کامیتی روی مستر ایجاد مبشه. با rebase
          میتونیم نقطه شروع برنچ فیچر که قبلا HEAD قبلی مستر بوده رو به HEAD جدید مستر منتقل کنیم. یا اینکه میتونم از
          حالت جدید مستر یه برنچ بسازم و کامیت های برنچ فیچر قبلی رو chery pick کنم روش. گیت توی بک گراند همین کارو
          میکنه.
        </LI>
        <LI simple={false} title='video 39'>
          -
        </LI>

        <LI simple={false} title='git branch -M main ( git branch --move --force main )'>
          اسم برنچ فعلی رو به main مثلا تغییر مبده
        </LI>

        <LI simple={false} title='pull vs fetch'>
          وقتی pull میکنیم تغییرات میاد روی برنچ لوکال میشینه.
          <br />
          وقتی fetch میزنیم در واقع origin ی که روی سیستممون هست اپدیت میشه. نه برنچ لوکالمون
          <table className='table-auto border w-full text-sm text-center mt-2'>
            <thead>
              <tr>
                <th className='border px-4 py-2'>نوع برنچ</th>
                <th className='border px-4 py-2'>مکان</th>
                <th className='border px-4 py-2'>هدف</th>
                <th className='border px-4 py-2'>
                  تاثیر <code>git fetch</code>
                </th>
                <th className='border px-4 py-2'>
                  تاثیر <code>git pull</code>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border px-4 py-2 font-medium'>
                  برنچ لوکال (مثل <code>main</code>)
                </td>
                <td className='border px-4 py-2'>روی سیستم شما</td>
                <td className='border px-4 py-2'>
                  جایی که روی آن کار می‌کنید، commit می‌زنید و فایل‌ها را ویرایش می‌کنید
                </td>
                <td className='border px-4 py-2'>تغییری نمی‌کند؛ برنچ روی commit فعلی شما می‌ماند</td>
                <td className='border px-4 py-2'>
                  با merge یا rebase بر اساس <code>origin/main</code> آپدیت می‌شود و HEAD حرکت می‌کند
                </td>
              </tr>
              <tr>
                <td className='border px-4 py-2 font-medium'>
                  برنچ ریموت-ترکینگ (مثل <code>origin/main</code>)
                </td>
                <td className='border px-4 py-2'>
                  روی سیستم شما (داخل <code>.git/refs/remotes/</code>)
                </td>
                <td className='border px-4 py-2'>کپی محلی از برنچ ریموت؛ برای مقایسه و merge/rebase</td>
                <td className='border px-4 py-2'>با آخرین وضعیت سرور آپدیت می‌شود</td>
                <td className='border px-4 py-2'>
                  ابتدا آپدیت می‌شود (مثل fetch) و سپس برای merge/rebase روی برنچ لوکال استفاده می‌شود
                </td>
              </tr>
              <tr>
                <td className='border px-4 py-2 font-medium'>برنچ ریموت واقعی (روی سرور)</td>
                <td className='border px-4 py-2'>روی سرور (GitHub/GitLab و غیره)</td>
                <td className='border px-4 py-2'>برنچ مرکزی که با تیم به اشتراک گذاشته می‌شود</td>
                <td className='border px-4 py-2'>مستقیماً تغییری نمی‌کند؛ فقط توسط fetch/pull خوانده می‌شود</td>
                <td className='border px-4 py-2'>
                  مستقیماً تغییری نمی‌کند؛ فقط در صورتی که از لوکال push شود، تحت تاثیر قرار می‌گیرد
                </td>
              </tr>
            </tbody>
          </table>
        </LI>
        <LI simple={false} title='git branch -a'>
          برنچ های ریموت رو هم نشون میده.
        </LI>
        <LI simple={false} title='force push'>
          وقتی HEAD برنچ لوکال رو ریست کردیم و میخوایم برنچ ریموت رو باهاش سینک کنیم.
        </LI>
        <LI simple={false} title='ORIG_HEAD'>
          video 44
        </LI>
        <LI simple={false} title='alias'>
          <Code>
            {`
git config --global alias.arash "git reset --hard ORIG_HARD"
git arash
            `}
          </Code>
        </LI>
        <LI simple={false} title='submodule'>
          video 49-50
        </LI>

        <LI simple={false} title='interactive rebase'>
          video 49-50
        </LI>
      </UL>
    </PageTitle>
  )
}
