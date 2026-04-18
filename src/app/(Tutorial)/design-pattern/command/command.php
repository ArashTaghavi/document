<?php
// بدون کامند

class SmsButton
{
    public function click()
    {
        $sms = new SmsService();
        $sms->send("Hello");
    }
}

class EmailButton
{
    public function click()
    {
        $sms = new EmailService();
        $sms->send("Hello");
    }
}

// با کامند

interface NotifyInterface
{
    public function execute();
}

class SendSmsCommand implements NotifyInterface
{
    public function execute()
    {
        $sms = new SmsService();
        $sms->send("Hello");
    }
}
class SendEmailCommand implements NotifyInterface
{
    public function execute()
    {
        $sms = new EmailService();
        $sms->send("Hello");
    }
}

class Button
{
    private $command;

    public function setCommand($command)
    {
        $this->command = $command;
    }

    public function click()
    {
        $this->command->execute();
    }
}
// Usage

$button = new Button();

$button->setCommand(new SendSmsCommand());
$button->click(); // Send SMS

$button->setCommand(new SendEmailCommand());
$button->click(); // Send Email