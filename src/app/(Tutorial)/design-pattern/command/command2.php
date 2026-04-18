<?php
// ------------------- Commands -------------------
interface Command
{
    public function execute();
}

class PayOrderCommand implements Command
{
    public function __construct(
        private Order $order,
        private PaymentStrategy $strategy
    ) {}

    public function execute()
    {
        $this->strategy->pay($this->order);
    }
}

class CancelOrderCommand implements Command
{
    public function __construct(private Order $order) {}

    public function execute()
    {
        $this->order->status = 'cancelled';
    }
}
// ------------------- Commands -------------------

// ------------------- Strategy -------------------
interface PaymentStrategy
{
    public function pay(Order $order);
}

class CardPayment implements PaymentStrategy
{
    public function pay(Order $order)
    {
        echo "Paid with Card for order {$order->id}";
    }
}

class WalletPayment implements PaymentStrategy
{
    public function pay(Order $order)
    {
        echo "Paid with Wallet for order {$order->id}";
    }
}
// ------------------- Strategy -------------------

// Pay Usage
$command = new PayOrderCommand(
    $order,
    new CardPayment()
);

$command->execute();

$command = new PayOrderCommand(
    $order,
    new WalletPayment()
);

$command->execute();


// Cancel Usage
$command = new CancelOrderCommand($order);
$command->execute();

