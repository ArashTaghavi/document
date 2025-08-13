<?php
class Person
{
    private $name = 'Arash';
}

$person = new Person;

$fn = function () {
    return $this->name;
};

$fn2 = function ($value) {
    return $this->name = $value;
};

echo $fn->call($person); // Arash
echo $fn2->call($person, 'Ali'); // Ali 
