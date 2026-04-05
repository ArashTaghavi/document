<?php

// Inheritance

class User extends Model {}


class Payment
{
    public function pay(Order $order) {}
}

class Notification
{
    public function notify(Order $order) {}
}



// Composition
class Order
{
    public function __construct(private Payment $payment, private Notification $notification) {}

    public function order()
    {
        // save order
        $this->payment->pay($order);
        $this->notification->notify($order);
    }
}
