
<?php
// بدون فساد
// مشکلات: کاربر باید همه مراحل را بداند، وابستکی کد ها به هم، تکرار زیاد کد در بخش های مختلف
$order = new Order();
$payment = new PaymentService();
$inventory = new InventoryService();
$shipping = new ShippingService();

$payment->charge($order);
$inventory->reserve($order);
$shipping->send($order);

// با فساد

class OrderFacade
{
    public function placeOrder(Order $order)
    {
        $payment = new PaymentService();
        $inventory = new InventoryService();
        $shipping = new ShippingService();

        $payment->charge($order);
        $inventory->reserve($order);
        $shipping->send($order);
    }
}

$facade = new OrderFacade();
$facade->placeOrder($order);

// نقض اس ار پی در فساد؟
// فساد مالک بیزینس نیست. ارکستریتور هست
// زمانی نقض می شود که اتفاق زیر بیافتد

class OrderFacade
{
    public function placeOrder()
    {
        // محاسبه مالیات
        // محاسبه تخفیف
        // ذخیره سفارش
        // ارسال ایمیل
        // مدیریت inventory
    }
}