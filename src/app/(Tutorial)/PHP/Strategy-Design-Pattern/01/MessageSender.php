<?php

class MessageSender extends Manager
{

    public function getDefaultDriver()
    {

        return 'smsKaveh';
    }
    // این متد باعث میشه استرینگ smsKaveh بهش وصل بشه.
    // روش ۱
    // روش دوم توی سرویس پروایدر
    public function createSmsKavehDriver()
    {
        return new KaveNegar();
    }
}
