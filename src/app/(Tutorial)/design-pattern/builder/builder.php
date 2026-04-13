<?php

// بدون بیلدر
class User
{
    public function __construct(
        public string $name,
        public string $email,
        public ?string $phone,
        public ?string $address,
        public ?int $age,
    ) {}
}

$user = new User(
    'Arash',
    'arash@test.com',
    null,
    'Tehran',
    25
);

// با بیلدر
class User
{
    public function __construct(
        public string $name,
        public string $email,
        public ?string $phone,
        public ?string $address,
        public ?int $age,
    ) {}
}

class UserBuilder
{
    private string $name;
    private string $email;
    private ?string $phone = null;
    private ?string $address = null;
    private ?int $age = null;


    public static function new()
    {
        return new self();
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;
        return $this;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;
        return $this;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;
        return $this;
    }

    public function setAge(int $age): self
    {
        $this->age = $age;
        return $this;
    }

    public function build(): User
    {
        return new User(
            $this->name,
            $this->email,
            $this->phone,
            $this->address,
            $this->age
        );
    }
}

$user = (new UserBuilder())
    ->setName('Arash')
    ->setEmail('arash@test.com')
    ->setAddress('Tehran')
    ->setAge(25)
    ->build();

$user = UserBuilder::new()
    ->setName('Arash')
    ->setEmail('arash@test.com')
    ->setAddress('Tehran')
    ->setAge(25)
    ->build();
