<?php
interface Mailer
{
    public function send();
}

class Mailchimp implements Mailer
{
    public function send()
    {
        // implementation
    }
}

class Gmail implements Mailer
{
    public function send()
    {
        // implementation
    }
}

class Notification
{
    public function __construct(public Gmail $mailer) {}
}
