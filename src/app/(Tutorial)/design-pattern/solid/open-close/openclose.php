<?php
// نقض OCP
// در صورتی که بخواهیم فرمت اچ تی ام ال اضافه کنیم باید یک شرط به کلاس اضافه کنیم و عملا کلاس را تغییر دهیم.
class Report
{
    public function generate(string $type)
    {
        if ($type === 'pdf') {
            return "Generating PDF report";
        }

        if ($type === 'excel') {
            return "Generating Excel report";
        }
    }
}


// ===============================================
// OCP

interface ReportGeneratorInterface
{
    public function generate(): string;
}

class PdfReport implements ReportGeneratorInterface
{
    public function generate(): string
    {
        return "Generating PDF report";
    }
}

class ExcelReport implements ReportGeneratorInterface
{
    public function generate(): string
    {
        return "Generating Excel report";
    }
}

class Report
{
    public function generate(ReportGeneratorInterface $report)
    {
        return $report->generate();
    }
}

// =================================== Example 2 ===================================

// نقض OCP
// در صورت اضافه شدن مشتری جدید، باید یک حالت دیگر به کد اضافه کنیم
class DiscountCalculator
{
    public function calculate(string $customerType, float $price): float
    {
        if ($customerType === 'regular') {
            return $price * 0.9;
        }

        if ($customerType === 'vip') {
            return $price * 0.8;
        }
    }
}

// ============

interface DiscountInterface
{
    public function apply(float $price): float;
}

class RegularDiscount implements DiscountInterface
{
    public function apply(float $price): float
    {
        return $price * 0.9;
    }
}

class VipDiscount implements DiscountInterface
{
    public function apply(float $price): float
    {
        return $price * 0.8;
    }
}

class PriceCalculator
{
    public function calculate(DiscountInterface $discount, float $price): float
    {
        return $discount->apply($price);
    }
}
// ==================== Laravel ====================

interface Discount
{
    public function apply(float $price): float;
}


class RegularDiscount implements Discount
{
    public function apply(float $price): float
    {
        return $price * 0.9;
    }
}

class VipDiscount implements Discount
{
    public function apply(float $price): float
    {
        return $price * 0.8;
    }
}


class DiscountService
{
    public function calculate(Discount $discount, float $price): float
    {
        return $discount->apply($price);
    }
}

class OrderController extends Controller
{
    public function checkout(DiscountService $service)
    {
        $discount = app(\App\Services\Discounts\VipDiscount::class);

        $finalPrice = $service->calculate($discount, 1000);

        return $finalPrice;
    }
}
// or
$this->app->bind(
    \App\Contracts\Discount::class,
    \App\Services\Discounts\VipDiscount::class
);

public function checkout(DiscountService $service, Discount $discount)
{
    return $service->calculate($discount, 1000);
}