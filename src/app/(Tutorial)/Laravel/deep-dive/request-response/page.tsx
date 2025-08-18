/** @format */

import { Code, PageTitle } from '@/app/Components/common'
import { LI, UL } from '@/app/Components/List'

export default function Page() {
  return (
    <PageTitle title='Deep Dive into Laravel ( request-response )'>
      <UL title=''>
        <LI simple={false} title='تغییر مسیر فایل .env'>
          توی مسیر /bootstrap/app.php قبل از return شدن $app میتونیم این کد رو بنویسیم
          <Code>{`$app->loadEnvironmentFrom('.arash');`}</Code>
          توو این حالت بجای .env دنبال .arash میگیرده
          <br />
          اگه بخوام فولدرشم عوض کنم:
          <Code>{`$app->useEnvironmentPath('path/to/file')`}</Code>
          حالا توی /path/to/file/.arash دنبالش می گرده
          <Code>{`$app->useEnvironmentPath($app->basePath().'/path/to/file')
$app->loadEnvironmentFrom('.arash');`}</Code>
        </LI>
        <LI simple={false} title='Why config cache'>
          وقتی کانفیگ رو کش نمیکنیم لاراول هر سری مجبوره دستورات مربوط به ترک کردن فایل های کانفیگ برای رسیدن به ایندکس
          مورد نظر رو اجرا کنه. ولی وقتی کش میکنیم همه کانفیگ ها میره توو یه فایل ک لاراول از روی اون یک فایل ایندکس
          کانفیگ مورد نظر رو پیدا میکنه.
        </LI>
        <LI simple={false} title='installed.json'>
          این فایل توی مسیر /vender/composer/installed.json وجود داره که composer.json همه پکیج هایی که توی پروژه نصب
          شده رو داره.
          <br />
          لاراول میره اینو میخونه و از روی این میاد اتوماتیک سرویس پروایدر های پکیج هارو توی اپ اصلی رجیستر میکنه. همون
          موضوع auto discovery که قبلا توی لاراول های ورژن پایین تر گاها مجبور بودیم بریم فایل سرویس پروایدر یا alias یک
          پکیجی که نصب می کردیم رو توی فایل app.php لاراول توو بخش های providers و aliases ست کنیم.
          <Code>
            {`{
            "name": "laravel/sail",
            "version": "v1.38.0",
            "version_normalized": "1.38.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/laravel/sail.git",
                "reference": "d17abae06661dd6c46d13627b1683a2924259145"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/laravel/sail/zipball/d17abae06661dd6c46d13627b1683a2924259145",
                "reference": "d17abae06661dd6c46d13627b1683a2924259145",
                "shasum": ""
            },
            "require": {
                "illuminate/console": "^9.52.16|^10.0|^11.0",
                "illuminate/contracts": "^9.52.16|^10.0|^11.0",
                "illuminate/support": "^9.52.16|^10.0|^11.0",
                "php": "^8.0",
                "symfony/console": "^6.0|^7.0",
                "symfony/yaml": "^6.0|^7.0"
            },
            "require-dev": {
                "orchestra/testbench": "^7.0|^8.0|^9.0",
                "phpstan/phpstan": "^1.10"
            },
            "time": "2024-11-11T20:16:51+00:00",
            "bin": [
                "bin/sail"
            ],
            "type": "library",
            "extra": {
                "laravel": {
                    "providers": [
                        "Laravel\\Sail\\SailServiceProvider"
                    ]
                }
            },
            "installation-source": "dist",
            "autoload": {
                "psr-4": {
                    "Laravel\\Sail\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Taylor Otwell",
                    "email": "taylor@laravel.com"
                }
            ],
            "description": "Docker files for running a basic Laravel application.",
            "keywords": [
                "docker",
                "laravel"
            ],
            "support": {
                "issues": "https://github.com/laravel/sail/issues",
                "source": "https://github.com/laravel/sail"
            },
            "install-path": "../laravel/sail"
}            
            `}
          </Code>
          کد بالا یه تیکه از installed.json که مربوط به پکیج laravel/sail هست که سرویس پروایدرش توو بخش extra laravel
          providers تعریف شده.
        </LI>
        <LI simple={false} title='ترتیب لود سرویس پروایدر ها'>
          لاراول اینو مدیریت میکنه و ما با هر ترتیبی اونارو بزاریم توی providers بازم در نهایت اول اونایی لود میشن که با
          Illuminate شروع شدن و بعد اونایی که از پکیج های نصب شده discovery شدن و بعد اونایی که مستقیما توی اپلیکیشن
          لاراولیمون تعریف شدن.
        </LI>
        <LI simple={false} title='غیر فعال کردن میدلور ها برای تست'>
          <Code>{`app()['middleware.disable] = true;`}</Code>
          اگه ایرنو مثلا توی web.php بزاریم کلا میدلورهایی که ست کردیم روی روت ها کنسل میشن. این موضوع میدلورهای گلوبال
          رو کنسل نمیکنه.
        </LI>
      </UL>
    </PageTitle>
  )
}
