<?php
class Coffee
{
    public function cost()
    {
        return 5;
    }
}

// بدون دکوراتور
class CoffeeWithMilk extends Coffee
{
    public function cost()
    {
        return parent::cost() + 2;
    }
}

class CoffeeWithMilkAndSugar extends CoffeeWithMilk
{
    public function cost()
    {
        return parent::cost() + 1;
    }
}

class CoffeeWithMilkSugarCaramel extends CoffeeWithMilkAndSugar
{
    public function cost()
    {
        return parent::cost() + 3;
    }
}

$coffee = new CoffeeWithMilkSugarCaramel();
echo $coffee->cost(); // 11

// با استفاده از دکوراتور
interface CoffeeInterface
{
    public function cost();
}

class Coffee implements CoffeeInterface
{
    public function cost()
    {
        return 5;
    }
}

class CoffeeDecorator implements CoffeeInterface
{
    protected CoffeeInterface $coffee;

    public function __construct(CoffeeInterface $coffee)
    {
        $this->coffee = $coffee;
    }

    public function cost()
    {
        return $this->coffee->cost();
    }
}

class MilkDecorator extends CoffeeDecorator
{
    public function cost()
    {
        return parent::cost() + 2;
    }
}

class SugarDecorator extends CoffeeDecorator
{
    public function cost()
    {
        return parent::cost() + 1;
    }
}

class CaramelDecorator extends CoffeeDecorator
{
    public function cost()
    {
        return parent::cost() + 3;
    }
}

$coffee = new SimpleCoffee();          // 5
$coffee = new MilkDecorator($coffee);  // 7
$coffee = new SugarDecorator($coffee); // 8
$coffee = new CaramelDecorator($coffee); // 11

echo $coffee->cost();
