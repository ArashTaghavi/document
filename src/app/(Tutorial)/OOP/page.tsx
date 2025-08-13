/** @format */

import { Code, PageTitle, TextNote } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='OOP'>
      <UL>
        <LI title=' :: ' simple={false}>
          <p dir='ltr' className='text-left'>
            Class::method
          </p>
          :: به نام Scope resolutaion operator شناخته میشه.
          <div className='flex justify-center'>
            <TextNote important>
              وقتی میخوایم یه متد توی یک کلاس بنویسیم که واسمون آبجکت بسازه باید متد رو استاتیک کنیم. چون متد استاتیک
              بدون نیاز به ساخت آبجکت کار میکنه. و اگه متد استاتیک نباشه واسه کال کردنش باید آبجکت بسازیم. یعنی عملا
              باید یک آبجکت new کنیم و بعد متد ساخت آبجکت رو باهاش کال کنیم!!
            </TextNote>
          </div>
          <div className='flex justify-center'>
            <TextNote important>
              پراپرتی های استاتیک واسه زمانیه که میخوایم یه دیتایی رو بصورت ثابت به آبجکت هایی که از کلاس new شده به
              اشتراک بزاریم.
            </TextNote>
          </div>
        </LI>
        <LI simple={false} title='abstract'>
          کلاس های abstract قابل نمونه سازی نیستند. خب به چه دردی میخوره؟ چه کلاسی رو abstract کنیم؟
          <br />
          کلاس هایی رو abstract تعریف میکنیم که یه سری متد مشترک از یه سری Sub Class رو ریختم توش و ما قراره فقط از Sub
          Class ها استفاده کنیم. نه مستقیما از کلاس abstract.
          <br />
          <Code>
            {`
interface I
{
    public function hello();
}
------------------------------

class Message
{
    public function __construct(public I $i) {}

    public function sayHello()
    {
        $this->i->hello();
    }
}
------------------------------
class Ali implements I
{
    protected $message = 'Hello from Ali';

    public function hello()
    {
        echo $this->message;
    }
}
------------------------------

class Arash implements I
{
    protected $message = 'Hello from Arash';

    public function hello()
    {
        echo $this->message;
    }
}
------------------------------

$ali = new Ali();
$arash = new Arash();

(new Message($ali))->sayHello();
(new Message($arash))->sayHello();

              `}
          </Code>
          <p>
            الان کلاس های Arash و Ali یه متد دارن به اسم hello. واسه اینکه از تکرار این متد توی این کلاس جلوگیری کتیم کد
            زیر رو می نویسیم
          </p>
          <Code>
            {`
abstract class Helloer
{
    public function hello()
    {
        echo $this->message;
    }
}

class Ali extends Helloer implements I
{
    protected $message = "Hello from Ali\n";
}

class Arash extends Helloer implements I
{
    protected $message = "Hello from Arash\n";
}
              `}
          </Code>
          <p>
            متد hello توی کلاس Helloer فقط باید توسط Sub Class هاش کال بشه که معنی داشته باشه. چون پراپرتی message توی
            Sub Class هاشه. اینجا ما نباید اجازه بدیم کسی از کلاس Helloer آبجکت بسازه. پس میایم اون کلاس رو abstract
            میکنیم.
          </p>
          <div className='flex justify-center'>
            <TextNote>
              اگه توی abstract class ها بیایم abstract method تعریف کنیم Sub Class ها ملزم به پیاده سازیش هستند.
            </TextNote>
          </div>
        </LI>
        <LI title='final class' simple={false}>
          اگر یک Class رو بصورت final class تعریف کنیم دیگه نمیشه از اون کلاس ارث بری کرد.
        </LI>
        <LI title='final method' simple={false}>
          اگه به متد رو توی یک کلاس بصورت final تعریف کنیم دیگه Sub Class ها نمیتونن override ش کنن.
        </LI>
        <LI title='is_a' simple={false}>
          مثه instanceof عمل میکنه. چک میکنه ببینه یه متغیر از جنس یه کلاس هست یا نه
          <Code>
            {`
$object = new Person();
if( is_a($object, Person::class) ) {} ==> true
            `}
          </Code>
        </LI>
        <LI title='__invoke' simple={false}>
          وقتی مجیک متد __invoke رو تعریف کنیم توی کلاس میتونیم شبیه کد زیر کالش کنیم.
          <Code>
            {`
class Message
{
    public function __invoke()
    {
        echo 'Hello!';
    }
}
$message = new Message();
$message(); // ==>  Hello
is_callable($message) // ==> true
            `}
          </Code>
        </LI>
        <LI title='__call و __callStatic, __get,__set,__serialize, __unserialize (__sleep, __wakeup)' simple={false}>
          مطالعه شود. توی مجیک متد __get فقط پراپرتی هایی کار میکنند که صراحتا توی کلاس تعریف شده باشن. اگه داینامیک
          مقدار بدیم به پراپرتی و بعد مقدارشو بخونیم __get مثدار اونو نشون نمیده. اگر هم توی کلاس باشه ولی مقدارش null
          باشه همین رفتار قبلی تکرار میشه. قسمت ۱۱ ویدیو OOP 2 ویدیو ۱۳ oop 2
        </LI>
        <LI title='serialize for Deep Copy' simple={false}>
          <Code>
            {`
$object1 = new Person();
$object2 = clone $object1; // or ==> $object2 = unserialize( serialize($object1) ) 
            `}
          </Code>
          <div className='flex justify-center'>
            <TextNote>پکیج myclabs/DeepCopy مطالعه شود.</TextNote>
          </div>
        </LI>
        <LI title='__destruct (refrece counting)' simple={false}>
          <Code>
            {`
class Person
{
    public function __destruct()
    {
        echo "Person object died.";
    }
}
--------------------------------------------------
1)
$person = new Person(); // Person object died.
--------------------------------------------------
2)
$person = new Person();
echo "Hello";

// Hello
// Person object died.
--------------------------------------------------
3)
$person = new Person();
unset($person);
echo "Hello";

// Person object died.
// Hello
            `}
          </Code>
        </LI>
        <LI
          title='`Coutable` interface for class, `ArrayAccess`, `video 24,25,26,27,28,29,30,31,32,33,34` '
          simple={false}>
          مطالعه شود.
        </LI>
        <LI title='`self` and `static` video 35,36' simple={false}>
          Late Static Binding
        </LI>
        <LI simple={false} title='38,39'>
          هدف اینه مقدار name رو از بیرون کلاس بخونیم:
          <Code>
            {`
<?php
<?php
class Person
{
    private $name = 'Arash';
}

$person = new Person;

$fn = function () {
    return $this->name;
};

$fn2 = function ($value) {
    return $this->name = $value;
};

echo $fn->call($person); // Arash
echo $fn2->call($person, 'Ali'); // Ali 

`}
          </Code>
        </LI>
        <LI title='video 40,41,42' simple={false}>
          -
        </LI>
      </UL>
    </PageTitle>
  )
}
