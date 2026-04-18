<?php
// کاپلینگ ذهنی کم
// فقط همین کلاس رو میبینیم
// هیچ وابستگی پنهانی ندارد
// ساده و قابل پیش بینی
class PriceCalculator
{
    public function calculate(int $price)
    {
        return $price * 1.2;
    }
}

// کاپلینگ ذهنی بالا
// برای فهمیدن کد باید بدانیم مقدار تکس خوانده شده از کانفیگ جند است
// ایا کانفیگ جای دیگر تغییر کرده یا نه؟
// ترتیب اجرای کد ها به چه شکله؟
// در حالت کلی رفتار کلاس وابسته به بیرون است

class PriceCalculator
{
    public function calculate(int $price)
    {
        $tax = config('app.tax');
        return $price * $tax;
    }
}

config(['app.tax' => 2]);

$calc->calculate(100); // 200

config(['app.tax' => 1.1]);

$calc->calculate(100); // 110
