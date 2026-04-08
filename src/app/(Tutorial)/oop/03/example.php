<?php

class User
{
    public int $id;
    public string $name;

    public function __construct(int $id, string $name)
    {
        $this->id = $id;
        $this->name = $name;
    }

    public function changeName(string $name)
    {
        $this->name = $name; // mutable منطقی
    }
}


class Money
{
    private float $amount;

    public function __construct(float $amount)
    {
        $this->amount = $amount;
    }

    public function add(Money $other): Money
    {
        return new Money($this->amount + $other->amount);
    }

    public function getAmount(): float
    {
        return $this->amount;
    }
}

class OrderData
{
    public int $userId;
    public Money $total;

    public function __construct(int $userId, Money $total)
    {
        $this->userId = $userId;
        $this->total = $total;
    }

    public function setTotal(Money $total)
    {
        $this->total = $total; // فقط روی همین DTO تغییر می کند
    }
}

// Usage
$user = new User(1, 'Arash');
$total = new Money(100);
$orderDto = new OrderData($user->id, $total);

// تغییر mutable DTO
$orderDto->setTotal(new Money(120));

// تغییر mutable Entity
$user->changeName('Ali');

// استفاده از Value Object (immutable)
$newTotal = $total->add(new Money(30)); // یک instance جدید ساخته شد
