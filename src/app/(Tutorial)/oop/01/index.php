<?php

class User
{
    public string $fullName;
    public string $phoneNumber;

    public function changeFullName(string $fullName): void
    {
        $this->fullName = $fullName;
    }
}

$ali = new User();
$ali->changeFullName('reza');

function createUser(string $fullName, string $phoneNumber): array
{
    return [
        'fullName' => $fullName,
        'phoneNumber' => $phoneNumber
    ];
}

function changeFullName(array $user, string $fullName): array
{
    $user['fullName'] = $fullName;
    return $user;
}

$ali = createUser('Ali', '09190130120');
changeFullName($ali, 'Reza');
