
<?php
// بدون state
// بزرگ شدن کلا، نقض او سی پی، ایف و الس زیاد
class Order
{
    public string $state;

    public function process()
    {
        if ($this->state === 'pending') {
            return 'Pay allowed';
        }

        if ($this->state === 'paid') {
            return 'Shipping allowed';
        }

        if ($this->state === 'shipped') {
            return 'Tracking only';
        }
    }
}


// با state

interface OrderState
{
    public function handle();
}
class PendingState implements OrderState
{
    public function handle()
    {
        return "Payment allowed";
    }
}

class PaidState implements OrderState
{
    public function handle()
    {
        return "Shipping allowed";
    }
}

class ShippedState implements OrderState
{
    public function handle()
    {
        return "Tracking only";
    }
}

class Order
{
    private OrderState $state;

    public function setState(OrderState $state)
    {
        $this->state = $state;
    }

    public function process()
    {
        return $this->state->handle();
    }
}

// Usage

$order = new Order();

$order->setState(new PendingState());
echo $order->process(); // Payment allowed

// تغییر رفتار آبجکت، بدون تغییر خود آبجکت
$order->setState(new PaidState());
echo $order->process(); // Shipping allowed
