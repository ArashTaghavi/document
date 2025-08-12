/** @format */

import { Code, Item, PageTitle, TextNote } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='IOC Features'>
      <UL title='Recursive Dependency Resolution'>
        <LI simple={false}>این بخش یعنی IOC Container در اصل پیاده سازی Factory Design Pattern می باشد.</LI>
        <LI title='resolve'>
          این متد Namespace یک کلاس رو میگیره و یه آبجکت ازش میسازه. در واقع عمون کار new کردن از یک کلاس رو انجام میده.
          <br />
          اگر بخوایم به کانستراکتور یک کلاسی که با resolve ساخته شده مقدار پاس بدیم توی آرگومان دومش یه آرایه بصورت key
          value میدیم که key میشه اسم پراپرتی و value میشه مقدارش.
        </LI>
        <LI title='Reflection' simple={false}>
          توی موضوع قبلی اگر کلاس ما یه تابع توی کانستراکتور بگیره به شرطی که type hint مشخص شده باشه لاراول موقع
          resolve خودش اون تابع رو می سازه و به کلاسی که ازش resolve کردیم پاس میده. یعنی:
          <Code>
            {`class Animal{
                public function __construct(string $color, Brain $brain){
                  $this->color = $color;
                  $this->brain = $brain;
                }
}

$snake1 = new Animan('gray', new Brain)
$snake2 = resolve('/App/Animal',['color' => 'gray'])
`}
          </Code>
          البته می تونیم مقدار ‌Brain رو هم دستی توی resolve پاس بدیم.
          <div className='flex justify-center'>
            <TextNote important size='text-md'>
              وقتی دو تا آبجکت از یک کلاس می سازیم با == مقدار true و با === مقدار false بر میگردونه
            </TextNote>
          </div>
          <div className='flex justify-center mt-2'>
            <TextNote important size='text-md'>
              اگر کلاس Brain هم کانستراکتور داشته باشه و type hint ش مشخص باشه لاراول توی resolve این مورد رو هم هندل
              میکنه. مثلا:
            </TextNote>
          </div>
          <Code>
            {`
$snake1 = new Animal('gray',new Brain( new Cell() ))
$snale2 = resolve(Animal::class,['color' => 'gray'])
                `}
          </Code>
        </LI>
      </UL>

      <UL title='Binding interfaces on IOC'>
        <LI simple={false}>
          <p dir='rlt' className='text-right'>
            این حالت سنتی هست که ما اومدیم کلاس رو بجای اینترفیس دادیم به ورودی کلاس Cage:
          </p>
          <Code>
            {`
interface Animal {
  public function eat();
}
--------------------------------------------------
class Cage{
  public function __construct(public Animal $animal){}
}
--------------------------------------------------
$c1 = new Cage( new Lion );
$c1 = new Cage( new Bear );

`}
          </Code>
        </LI>

        <LI simple={false}>
          <p>این حالتی هست که با IOC میخوایم دپندنسی رو مدیریت کنیم: </p>
          <Code>
            {`
interface Animal {
  public function eat();
}
--------------------------------------------------
class Cage{
  public function __construct(public Animal $animal){}
}
--------------------------------------------------
app()->bind(Animal::class, Bear::class);
$c1 = resolve(Cage::class);

app()->bind(Animal::class, Lion::class);
$c2 = resolve(Cage::class);

`}
          </Code>
          <p>
            توو این حالت اول اومدیم اینترفیس Animal رو بایند کردیم به کلاس Bear. این کار باعث میشه وقتی resolve اجرا
            میشه بجای اینکه لاراول بخواد بره از Animal ابجکت بسازه بره از مقداری که براش بایند شده آبجکت بسازه.
          </p>
        </LI>

        <LI title='bindIf' simple={false}>
          <Code>
            {`
interface Animal {
  public function eat();
}
--------------------------------------------------
class Cage{
  public function __construct(public Animal $animal){}
}
--------------------------------------------------
app()->bind(Animal::class, Bear::class);
$c1 = resolve(Cage::class);

app()->bindIf(Animal::class, Lion::class);
$c2 = resolve(Cage::class);

`}
          </Code>
          <p>
            توو این حالت bind روی کلاس Lion اتفاق نمیافته. یعنی bindIf چک میکنه که اگر قبلا برای اینترفیس Animal هیچ
            bind ای وجود نداشت بیاد کلاس Lion رو به اینترفیس Animal بایند کنه.
          </p>
        </LI>

        <LI title='Shared Objects' simple={false}>
          <Code>
            {`
interface Animal {
  public function eat();
}
--------------------------------------------------
class Cage{
  public function __construct(public Animal $animal){
  echo 'It is Cage class';
  }
}
--------------------------------------------------
class Bear implements Animal{
  public function __construct(){
  echo 'It is Bear class';
  }
}
--------------------------------------------------
1)
app()->bind(Animal::class, Bear::class);

$c1 = resolve(Cage::class);
$c2 = resolve(Cage::class);
$c3 = resolve(Cage::class);
---------
2)
app()->bind(Animal::class, Bear::class, true);

$c1 = resolve(Cage::class);
$c2 = resolve(Cage::class);
$c3 = resolve(Cage::class);
---------

3)
app()->bind(Animal::class, Bear::class, true);
app()->bind(Cage::class, Cage::class, true); ==> app()->singleton(Cage::class);

$c1 = resolve(Cage::class);
$c2 = resolve(Cage::class);
$c3 = resolve(Cage::class);
---------
`}
          </Code>
          <p>توو حالت 1 مقدار It is Bear class و مقدار It is Cage class سه بار چاپ میشه.</p>
          <p>توو حالت 2 مقدار It is Cage class سه بار و مقدار It is Bear class یکبار چاپ میشه</p>
          <p>
            توو حالت 3 مقدار It is Bear class و مقدار It is Cage class یکبار بار چاپ میشه. در واقع این حالت داره
            Singleton Design Pattern رو پیاده سازی میکنه.
          </p>
        </LI>
        <LI simple={false} title='مثال مهم'>
          <Code>
            {`
app()->bind('arash', Bear::class);
$a = resolve('arash'); ==> new Bear()
-----------------------------------------
app()->bind('arash', Bear::class);
app()->bind('my-case, Case::class);
app()->bind(Animal::class,'arash');
$a = resolve('my-case);
              `}
          </Code>
          <p>
            مقدار پارامتر ورودی bind دلخواهه و موقع resolve میشه با همون نام دلخواه مقدار کلاسی که بهش بایند شده رو
            گرفت.
          </p>
        </LI>
        <LI title='Passing closure to bind' simple={false}>
          این موضوع زمانی به درد میخوره که میخوایم یه عملیات دنگ و فنگ دار رو به بعنوان یک ابجکت برگردونیم.
          <Code>
            {`
app()->singleton('send-sms', function(){
    // config
    // new class
    // logic
    // return result
});

$sms = resolve('send-sms');
              `}
          </Code>
        </LI>
        <LI title='Alias' simple={false}>
          با این کار میتونیم یه اسم مستعار واسه کلاسامون انتخاب کنیم.
          <Code>
            {`
1)
$bear = new Bear();
app()->alias($bear, 'Khers');

resolve('Khers') == new Bear ==> true
new Khers == new Bear ==> Error
-----------------------------------------
2)
$bear = new Bear();

config()->set('app.aliases.Khers',Bear::class);
new Khers == new Bear ==> Error
-----------------------------------------
3)
AliasLoader::getInstance()->alais('Khers', Bear::class);
new \Khers == new Bear ==> OK

              `}
          </Code>
          <p>توو حالت 1 فقط با resolve میتونیم از alias ابجکت بسازیم و با new کردن به خطا می خوریم.</p>
          <p>
            توو حالت دوم هم خطا میده چون وقتی لاراول بوت میشه میره alias هارو از /config/app.php میخونه و alias ی که ما
            اینجا با {`config()->set()`} تعریف کردیم رو پیدا نمیکنه.
            <br />
            حالا اگه این alias رو بریم دستی توی /config/app.php تعریف کنیم کدمون کار میکنه.
          </p>
          <p>حالت سوم کار میکنه.</p>
          <table className='table-auto border w-full text-sm text-center mt-2'>
            <thead>
              <tr>
                <th className='border px-4 py-2'>اسم متد</th>
                <th className='border px-4 py-2'>توضیح</th>
                <th className='border px-4 py-2'>کاربرد</th>
                <th className='border px-4 py-2'>تفاوت اصلی</th>
                <th className='border px-4 py-2'>تاثیر روی new کردن</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border px-4 py-2'>app().alias()</td>
                <td className='border px-4 py-2'>تعریف نام مستعار برای سرویسی که در کانتینر لاراول ثبت شده است.</td>
                <td className='border px-4 py-2'>
                  استفاده برای دسترسی به سرویس‌ها با نام‌های مختلف در Service Container.
                </td>
                <td className='border px-4 py-2'>
                  نام مستعار فقط در کانتینر لاراول شناخته می‌شود و تاثیری بر فضای نام PHP ندارد.
                </td>
                <td className='border px-4 py-2 text-center'>
                  ❌ امکان ساخت مستقیم شیء با <span className='font-mono'>new \\AliasName</span> وجود ندارد.
                </td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>AliasLoader.alias()</td>
                <td className='border px-4 py-2'>
                  تعریف alias واقعی کلاس در PHP با استفاده از تابع native{' '}
                  <span className='font-mono'>class_alias()</span>.
                </td>
                <td className='border px-4 py-2'>
                  ایجاد نام مستعار کلاس برای استفاده مستقیم در کد با <span className='font-mono'>new \\AliasName</span>.
                </td>
                <td className='border px-4 py-2'>
                  alias روی سطح PHP تعریف می‌شود و کلاس با نام جدید در کل برنامه قابل استفاده است.
                </td>
                <td className='border px-4 py-2 text-center'>
                  ✔️ امکان ساخت مستقیم شیء با <span className='font-mono'>new \\AliasName</span> وجود دارد.
                </td>
              </tr>
            </tbody>
          </table>
        </LI>
        <LI simple={false} title='tag'>
          <Code>
            {`
app()->tag(Bear::class,['omnivore','dangerous','mammal']);
app()->tag(Lio::class,['carnivore','dangerous','mammal']);
app()->tag(Wolf::class,['x','y','z']);
$objects = app()->tagged('dangerous');
              `}
          </Code>
          <p>
            مقدار results برابر کلاس هایی هست که تگ dangerous داره. بصورت lazy عمل میکنه. یعنی تا زمانی که ایجکت رو کال
            نکنیم نمونه ای از کلاس ساخته نمیشه.
          </p>
        </LI>

        <LI simple={false} title='call'>
          <Code>
            {`
class Bear implements Animal{
  public function __construct(){
  echo 'It is Bear class';
  }

  public function eat($food, CustomService $service){}
}

app()->call(Bear::class.'@eat',['food'=>'meet']);
              `}
          </Code>
          <p>
            متد call با این سینتکس میاد متد eat رو از کلاس Bear کال میکنه. ورودی هایی که type hint دارن رو لاراول خودش
            هندل میکنه
          </p>
        </LI>
        <LI title='Container events and callbacks' simple={false}>
          <Code>
            {`
$app = Container::getInstance();
$app[Bear::class] = resolve(Bear::class) = app(Bear::class) = \App::make(Bear::class);
              `}
          </Code>
          <table className='table-auto border w-full text-sm text-center'>
            <thead>
              <tr>
                <th className='border px-4 py-2'>سینتکس</th>
                <th className='border px-4 py-2'>توضیح</th>
                <th className='border px-4 py-2'>رفتار داخلی</th>
                <th className='border px-4 py-2'>ویژگی خاص</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border px-4 py-2'>
                  <span className='font-mono'>$app[Bear::class]</span>
                </td>
                <td className='border px-4 py-2'>Resolve کردن از طریق ArrayAccess روی Container.</td>
                <td className='border px-4 py-2'>
                  معادل <span className='font-mono'>$app.make()</span>.
                </td>
                <td className='border px-4 py-2'>مناسب وقتی قبلاً instance container رو داری.</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>
                  <span className='font-mono'>resolve(Bear::class)</span>
                </td>
                <td className='border px-4 py-2'>Helper سراسری برای گرفتن سرویس از container.</td>
                <td className='border px-4 py-2'>
                  در نهایت صدا زدن <span className='font-mono'>Container::getInstance().make()</span>.
                </td>
                <td className='border px-4 py-2'>ساده‌ترین روش برای resolve کردن.</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>
                  <span className='font-mono'>app(Bear::class)</span>
                </td>
                <td className='border px-4 py-2'>
                  Helper چندمنظوره: بدون آرگومان container را برمی‌گرداند، با آرگومان resolve می‌کند.
                </td>
                <td className='border px-4 py-2'>
                  باز هم از <span className='font-mono'>make()</span> روی container استفاده می‌کند.
                </td>
                <td className='border px-4 py-2'>قابلیت گرفتن خود container.</td>
              </tr>
              <tr>
                <td className='border px-4 py-2'>
                  <span className='font-mono'>App::make(Bear::class)</span>
                </td>
                <td className='border px-4 py-2'>
                  استفاده از Facade <span className='font-mono'>App</span> برای resolve کردن.
                </td>
                <td className='border px-4 py-2'>پشت صحنه به container اصلی وصل می‌شود.</td>
                <td className='border px-4 py-2'>مناسب برای پروژه‌هایی که شدیداً از Facade استفاده می‌کنند.</td>
              </tr>
            </tbody>
          </table>
        </LI>

        <LI title='app()->resolving' simple={false}>
          <Code>
            {`
$app = Container::getInstance();
$app->resolving(Bear::class,function($obj, $app){
              $obj->color = 'green'
})
$app->resolved(Bear::class,function($obj, $app){
$obj->age = '25'
})
$bear = resolved(Bear::class); ==> color = 'green', age = 25
-----------------------------------------------------
$app = Container::getInstance();
$app->resolving(Animal::class,function($obj, $app){
              $obj->color = 'green'
})
$app->resolved(Bear::class,function($obj, $app){
$obj->age = '25'
})
$bear = resolved(Bear::class); ==> color = 'green', age = 25
              `}
          </Code>
          <p>متد های resolved و resolving بعد از ساخته شدن ابجکت کال میشن.</p>
          <p>توی بخش دوم اگه یه اینترفیس رو به متد resolving پاس بدی بعدش بگی $app[Bear::class] بازم کار میکنه.</p>
          <p>
            سناریو: مثلا میتونیم یه کلاس کیف پول بسازیم و توی کلوژر ها واسش ولیدیشن بنویسیم که مثلا مقدار پول منفی نشه.
          </p>
        </LI>
        <LI title='extend' simple={false}>
          <Code>
            {`
app->extend(Bear::class,function($obj, $app){
return 'hello';
})
                  `}
          </Code>
          <p>با متد extend میشه خروجی یک کلاس رو وقتی ازش آبجکت می سازیم تغییر بدیم. مثلا پراپرتی بهش اضافه کنیم.</p>
          <p>مثلا حالت قبلی اینترفیس روش کار نمی کنه.</p>
        </LI>
        <LI title='Contexual Binding' simple={false}>
          مطالعه
        </LI>
      </UL>
    </PageTitle>
  )
}
