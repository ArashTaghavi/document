<?php

interface NotifierInterface
{
    public function send();
}

class Email implements NotifierInterface
{
    public function send()
    {
        // send email
    }
}

class Sms implements NotifierInterface
{
    public function send()
    {
        // send sms
    }
}

class UserNotification
{
    public function __construct(private NotifierInterface $notifier) {}

    public function sendNotification()
    {
        $this->notifier->send();
    }
}

// Send sms
$sms = new Sms();
$userNotification = new UserNotification($sms);
$userNotification->sendNotification();

// Send Email

$email = new Email();
$userNotification = new UserNotification($email);
$userNotification->sendNotification();

// ================================================ بدون پولی مورفیسم ================================================

class UserNotify
{
    public function sendNotification($type)
    {
        if ($type === 'sms') {
            // send sms
        }
        if ($type == 'email') {
            // send email
        }
    }
}

$userNotify = new UserNotify();
$userNotify->sendNotification('email');
