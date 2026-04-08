

<?php
class Money
{
    private float $amount;

    public function __construct(float $amount)
    {
        // اعتبار سنجی داده که از مزایای ولیو آبجکت می باشد.
        if ($amount <= 0) {
            throw new Exception('مقدار نمی تواند کمتر از صفر باشد.');
        }


        $this->amount = $amount;
    }

    public function getAmount(): float
    {
        return $this->amount;
    }

    public function add(Money $other): Money
    {
        return new Money($this->amount + $other->amount);
    }
}
