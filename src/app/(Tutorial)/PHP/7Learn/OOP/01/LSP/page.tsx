/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle
      title='Liskov Substitution Principle'
      subTitle='Derived classes must be substituable fo ther base classes (کلاس‌های فرزند (Derived) باید بتوانند جایگزین کلاس‌های والد (Base) بشوند بدون اینکه رفتار برنامه تغییر کند یا
          خراب شود.)'>
      <UL title='موارد نقض LSP'>
        <LI simple={false} title='رفتار متد عوض بشه (Changed Method Behavior)'>
          مثلا در والد متدی داریم withdraw(amount) که همیشه پول رو از حساب کم می‌کنه. ولی در کلاس فرزند بیاییم همون متد
          رو طوری override کنیم که بعضی وقت‌ها پول کم نشه یا منطقش تغییر کنه. برنامه‌ای که انتظار داره متد withdraw
          همیشه پول کم کنه، دیگه درست کار نمی‌کنه.
        </LI>
        <LI simple={false} title='ایجاد استثنا (Exception) غیرمنتظره (Unexpected Exceptions)'>
          مثلا کلاس والد متدی داره draw() برای رسم شکل. اگر در کلاس فرزند بیاییم draw() رو override کنیم و بعضی وقت‌ها
          Exception بندازیم (مثلا چون شکل خاصی پشتیبانی نمی‌شه)، جایگزینی دیگه امن نیست.
        </LI>
        <LI simple={false} title='محدودتر کردن قرارداد متد (Contract Violation)'>
          اگر در والد متدی setSpeed(int speed) داریم و انتظار می‌ره هر سرعت مثبت قابل قبول باشه، ولی در فرزند بگیم فقط
          speed {'<= '}200 معتبره وگرنه ارور بده. → این هم نقض LSP هست، چون "قرارداد رفتاری" محدودتر شده.
        </LI>
        <LI simple={false} title='بازگرداندن مقدار نادرست یا ناسازگار (Stronger Preconditions)'>
          والد متدی داره که همیشه یک عدد مثبت برمی‌گردونه. ولی فرزند متد رو override می‌کنه و مقدار منفی یا null
          برمی‌گردونه. → برنامه‌ای که بر اساس قرارداد والد نوشته شده، خراب می‌شه.
        </LI>
        <LI simple={false} title='استفاده از متدی که در والد معنایی نداره (Invalid Semantic Inheritance)'>
          <Code>
            {`
کلاس Bird → متد fly()
کلاس Penguin extends Bird
    `}
          </Code>
          پنگوئن پرواز نمی‌کنه، پس وقتی جایگزین Bird بشه، کدی که از fly() استفاده می‌کنه می‌ترکه یا رفتار غیرمنطقی داره.
        </LI>
        <LI simple={false} title='مثال نقض LSP'>
          <Code>
            {`
interface FileInterface
{
    public function rename();
    public function move();
    public function copy();
    public function download();
}


class GoogleDriveFile implements FileInterface
{
    public function rename()
    {
        // implementation
    }
    public function move()
    {
        // implementation
    }
    public function copy()
    {
        // implementation
    }
    public function download()
    {
        // implementation
    }
}

class DropBoxFile implements FileInterface
{
    public function rename()
    {
        // implementation
    }
    public function move()
    {
        // implementation
    }
    public function copy()
    {
        // implementation
    }
    public function download()
    {
        // implementation
    }
}

class LocalFile implements FileInterface
{
    public function rename()
    {
        // implementation
    }
    public function move()
    {
        // implementation
    }
    public function copy()
    {
        // implementation
    }
    public function download()
    {
        // nothing
    }
}
            `}
          </Code>
          توی این حالت LocalFile متد دانلود براش معنی نداره. ولی ما بخاطر FileInterface مجبور شدیم پیاده تعریفش کنیم. و
          نهایتا متدش رو خالی بزاریم اما خالی گذاشتنش اشتباهه. چون ممکنه توی فایل سرویس توی کد زیر به مشکل بخوریم.
          <Code>
            {`

class FileService
{
    public function __construct(public FileInterface $file) {}

    public function dowloadFile()
    {
        $this->file->download(); // اگه LocalFile رو بهش پاس بدیم خطا میده
    }
}
            `}
          </Code>
          حالا واسه راه حل میتونیم این کار رو بکنیم
          <Code>
            {`
interface FileInterface
{
    public function rename();
    public function move();
    public function copy();
}

interface DownloadableFileInterface extends FileInterface
{
    public function download();
}

class GoogleDriveFile implements DownloadableFileInterface
{
    public function rename()
    {
        // implementation
    }
    public function move()
    {
        // implementation
    }
    public function copy()
    {
        // implementation
    }
    public function download()
    {
        // implementation
    }
}

class DropBoxFile implements DownloadableFileInterface
{
    public function rename()
    {
        // implementation
    }
    public function move()
    {
        // implementation
    }
    public function copy()
    {
        // implementation
    }
    public function download()
    {
        // implementation
    }
}

class LocalFile implements FileInterface
{
    public function rename()
    {
        // implementation
    }
    public function move()
    {
        // implementation
    }
    public function copy()
    {
        // implementation
    }
}

class FileService
{
    public function __construct(public DownloadableFileInterface $file) {}

    public function dowloadFile()
    {
        $this->file->download(); // اگه LocalFile رو بهش پاس بدیم خطا میده
    }
}
            `}
          </Code>
        </LI>
        <LI simple={false} title='مثال نقض LSP'>
          <Code>
            {`
class FileService
{
    public function __construct(public FileInterface $file) {}

    public function dowloadFile()
    {
        if (!$this->file instanceof LocalFile)
            $this->file->download();
    }
}
            `}
          </Code>
          برای حلش باید بیایم اینترفیس جدا درست کنیم و اونو بجاش پاس بدیم. مثلا اینترفیس DownloadableFileInterface
        </LI>
        <LI simple={false} title='مثال نقض LSP'>
          {' '}
          مثلا بیایم توی LocalFile یه متدی اضافه تر بنویسیم به اسم فرضا changePermission. بعد بیایم توی FileService ازش
          استفاده کنیم. چون بقیه کلاس ها این متد رو ندارن به خطا میخوریم توی FileService.چرا؟ چون توی FileService ما
          داریم اینترفیس FileInterface رو اینجکت میکنیم. برای حلش باید اینترفیس جدا پیاده سازی کنیم که changePermisson
          رو داشته باشه و اونو پاس بدیم به FileService.
        </LI>
      </UL>
    </PageTitle>
  )
}
