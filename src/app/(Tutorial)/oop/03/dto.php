<?php
class UserDTO
{
    public string $name;
    public string $email;

    public function __construct(string $name, string $email)
    {
        $this->name = $name;
        $this->email = $email;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }
}


$dto = new UserDTO('Arash', 'a@example.com');
$dto->setEmail('new@example.com'); // این حالت فقط روی همین دی تی او بصورت لوکال تاثیر دارد، پس ساید افکت ندارد.
$dto->setEmail('new1@example.com'); // این حالت فقط روی همین دی تی او بصورت لوکال تاثیر دارد، پس ساید افکت ندارد.
$dto->setEmail('new2@example.com'); // این حالت فقط روی همین دی تی او بصورت لوکال تاثیر دارد، پس ساید افکت ندارد.
$dto->setEmail('new3@example.com'); // این حالت فقط روی همین دی تی او بصورت لوکال تاثیر دارد، پس ساید افکت ندارد.
$dto->setEmail('new4@example.com'); // این حالت فقط روی همین دی تی او بصورت لوکال تاثیر دارد، پس ساید افکت ندارد.
// کار همینجا تمام می شود. متدی نداریم که بخواهد از این مقدار استفاده کند در دی تی او


// Mutable Service
class PriceService
{
    private float $tax = 0.1;

    public function setTax(float $tax): void
    {
        $this->tax = $tax;
    }

    public function calculate(float $price): float
    {
        return $price + ($price * $this->tax);
    }
}

// ثبت singleton در service container
app()->singleton(PriceService::class);

$service1 = app(PriceService::class);
$service2 = app(PriceService::class);

// هر دو به یک instance اشاره می کنند
$service1->setTax(0.2);

echo $service2->calculate(100); // 120 

// در کد بالا به دلیل وجود ستر برای سرویس، با تغییر سرویس۱، سرویس۲ هم تغییر می کند.