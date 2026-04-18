
<?php
// بدون استراتژی
class PaymentService
{
    public function pay($type, $amount)
    {
        if ($type === 'card') {
            return "Paying with card: $amount";
        }

        if ($type === 'paypal') {
            return "Paying with paypal: $amount";
        }
    }
}

// با استراتژی
interface PaymentStrategyInterface
{
    public function pay(int $amount);
}

class CardPayment implements PaymentStrategyInterface
{
    public function pay(int $amount)
    {
        return "Card payment: $amount";
    }
}
class PaypalPayment implements PaymentStrategyInterface
{
    public function pay(int $amount)
    {
        return "Paypal payment: $amount";
    }
}

class PaymentService
{
    public function __construct(private PaymentStrategyInterface $strategy) {}

    public function pay(int $amount)
    {
        return $this->strategy->pay($amount);
    }
}
// استفاده
$service = new PaymentService(new CardPayment());
echo $service->pay(100);

$service = new PaymentService(new PaypalPayment());
echo $service->pay(100);
