<?php
interface Notifier
{
    public function sendSms();
    public function sendEmail();
    public function sendWebSocket();
}

class KaveNegarProvider implements Notifier
{
    public function sendSms()
    {
        // implement ...
    }

    // بدون استفاده
    public function sendEmail()
    {
        // nothing
    }

    // بدون استفاده
    public function sendWebSocket()
    {
        // nothing
    }
}

class MailChimpProvider implements Notifier
{


    // بدون استفاده
    public function sendSms()
    {
        // nothing
    }

    public function sendEmail()
    {
        // implement ...
    }

    // بدون استفاده
    public function sendWebSocket()
    {
        // nothing
    }
}
