<?php
//سناریو: بدون تغییر در کلاس یوزر، میخوایم یک متدل فول نیم داشته باشیم
class User
{
    public function __construct(private string $firstName, private string $lastName) {}

    public function getFirstName()
    {
        //
    }

    public function getLastName()
    {
        //
    }
}

class UserPresenter
{
    public function __construct(private User $user) {}

    public function fullName()
    {
        return $this->user->getFirstName() + ' ' + $this->user->getLastName();
    }
}

$user = new UserPresenter(new User('Arash', 'Taghavi'));

$user->fullName();
