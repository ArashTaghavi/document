<?php

// نقض srp
class ConfirmationMailMailer
{

    public function __construct(private TemplateEngine $templateEngine, private Translator $translator, private Mailer $mailer) {}

    public function sendTo(User $user)
    {
        $message = $this->createMessageFor($user);
        $this->sendMessage($message);
    }


    private function createMessageFor(User $user)
    {
        // 1) اینجا متن پیام به کلاس جاری ارتباطی ندارد. این یعنی دلیل اضافه برای تغییر
        $text = $this->translator->translate('Please confirm your email address');

        // 2) اینجا موتور رندر به کلاس جاری ارتباط ندارد. این یعنی دلیل اضافه برای تغییر
        return $this->templateEngine->render($text);
    }

    private function sendMessage(string $message)
    {
        $this->mailer->send($message);
    }
}

// ==================================================

// Refactor

class ConfirmationMailMailer
{

    public function __construct(private ConfirmationMailFactory $confirmationMailFactory, private Mailer $mailer) {}

    public function sendTo(User $user)
    {
        // عدم دانش کلاس جاری به ساخت مسیج. در نتیجه حذف دلیل تغییر
        // دقت کنید تغییر ساختار سینتکسی مثل ریترن تایپ و... در این متد نقض اس ار پی نیست. ماهیت همکاری بین ماژول هاست. در واقع تغییر در کانترکت متد ناقض اس ار پی نیست
        // نالجی بعنوان دلیل تغییر مربوط می شود که به آن کلاس مربوط نباشد
        $message = $this->createMessageFor($user);
        $this->sendMessage($message);
    }


    private function createMessageFor(User $user)
    {
        return $this->confirmationMailFactory->createMessageFor($user);
    }

    private function sendMessage(string $message)
    {
        $this->mailer->send($message);
    }
}

class ConfirmationMailFactory
{
    public function __construct(private TemplateEngine $templateEngine, private Translator $translator) {}

    public function createMessageFor(User $user)
    {
        $text = $this->translator->translate('Please confirm your email address');

        return $this->templateEngine->render($text);
    }
}
