
<?php
// بدون observer
class Order
{

    public function createOrder($data)
    {
        // order created...
        // send email
        // stock process
        // log process
    }
}



// با observer
class EmailObserver
{
    public function handle($order)
    {
        echo "Email sent for order {$order['id']}";
    }
}

class StockObserver
{
    public function handle($order)
    {
        echo "Stock reduced for order {$order['id']}";
    }
}

class LogObserver
{
    public function handle($order)
    {
        echo "Order logged {$order['id']}";
    }
}

class Order
{
    private array $observers = [];

    public function attach($observer)
    {
        $this->observers[] = $observer;
    }

    public function notify($orderData)
    {
        foreach ($this->observers as $observer) {
            $observer->handle($orderData);
        }
    }

    public function createOrder($data)
    {
        // order created...
        $this->notify($data);
    }
}


// Usage

$order = new Order();

$order->attach(new EmailObserver());
$order->attach(new StockObserver());
$order->attach(new LogObserver());

$order->createOrder(['id' => 1]);
