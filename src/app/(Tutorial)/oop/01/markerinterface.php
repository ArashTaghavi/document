<?php

interface Logger {}

class Login implements Logger {}

$login = new Login();


if ($login instanceof Logger) { // condition is true
    // do something
}



class User {}

$user = new User();

if ($user instanceof Logger) { // condition is false
    // do something
}
