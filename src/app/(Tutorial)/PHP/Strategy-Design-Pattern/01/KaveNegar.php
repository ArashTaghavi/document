<?php

class KaveNegar
{
    public function send($phone, $text)
    {
        echo "$text is sending to: $phone";
    }
}


$sender = app(MessageSender::class)->driver('smsKaveh');
$sender->send('09190130120', 'salam');
