<?php

function boot()
{
    app()->singleton(MessageSender::class);

    app(MessageSender::class)->extend('smsKave', function () {
        return new KaveNegar();
    });
}
