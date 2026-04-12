<?php

class UserController extends Controller
{
    // کنترلر تعیین می کند که به چه چیزی نیاز دارد. منظور میل سرویس
    public function __construct(private MailService $mail) {}
}


// DIP
class UserController extends Controller
{

    // به کنترلر می گوییم یک پیاده سازی از قرار داد میل سرویس دریافت میکنی
    public function __construct(private MailServiceInterface $mail) {}
}
$app->bind(MailServiceInterface::class, MailChimpService::class);
