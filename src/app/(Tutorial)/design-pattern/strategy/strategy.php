
<?php
// Strategies
interface PaymentStrategy
{
    public function pay(int $amount);
}

class CardPayment implements PaymentStrategy
{
    public function pay(int $amount)
    {
        return "Paid $amount with Card";
    }
}
class PaypalPayment implements PaymentStrategy
{
    public function pay(int $amount)
    {
        return "Paid $amount with Paypal";
    }
}
class CryptoPayment implements PaymentStrategy
{
    public function pay(int $amount)
    {
        return "Paid $amount with Crypto";
    }
}

// Builders

class Payment
{
    public function __construct(
        public PaymentStrategy $strategy,
        public int $amount,
        public bool $saveReceipt = false
    ) {}
}

class PaymentBuilder
{
    private PaymentStrategy $strategy;
    private int $amount;
    private bool $saveReceipt = false;

    public function setStrategy(PaymentStrategy $strategy)
    {
        $this->strategy = $strategy;
        return $this;
    }

    public function setAmount(int $amount)
    {
        $this->amount = $amount;
        return $this;
    }

    public function saveReceipt(bool $value)
    {
        $this->saveReceipt = $value;
        return $this;
    }

    public function build()
    {
        return new Payment(
            $this->strategy,
            $this->amount,
            $this->saveReceipt
        );
    }
}

// Usage

// Card
$payment = (new PaymentBuilder())
    ->setStrategy(new CardPayment())
    ->setAmount(100)
    ->build();

// Paypal
$payment = (new PaymentBuilder())
    ->setStrategy(new PaypalPayment())
    ->setAmount(250)
    ->saveReceipt(true)
    ->build();

// Crypto
$payment = (new PaymentBuilder())
    ->setStrategy(new CryptoPayment())
    ->setAmount(1000)
    ->saveReceipt(false)
    ->build();
// بیلدر مسئول ساخت آبجکت پیمنت و استراتژی مسئول تعیین رفتار پرداخت
//Builder = ساختن object
//Strategy = رفتار داخل object