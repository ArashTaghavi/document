
<?php

// بدون chain
if ($condition) { // email login 
} elseif ($condition) { // otp login
} elseif ($condition) { // oauth login
}

// با chain
abstract class AuthHandler
{
    protected ?AuthHandler $next = null;

    public function setNext(AuthHandler $handler): AuthHandler
    {
        $this->next = $handler;
        return $handler;
    }

    public function handle(array $request)
    {
        if ($this->next) {
            return $this->next->handle($request);
        }

        return "No authentication method matched.";
    }
}

class EmailPasswordAuth extends AuthHandler
{
    public function handle(array $request)
    {
        if (isset($request['email']) && isset($request['password'])) {
            return "Logged in with Email & Password: {$request['email']}";
        }

        return parent::handle($request);
    }
}

class OtpAuth extends AuthHandler
{
    public function handle(array $request)
    {
        if (isset($request['mobile']) && isset($request['otp'])) {
            return "Logged in with OTP: {$request['mobile']}";
        }

        return parent::handle($request);
    }
}

class OAuthAuth extends AuthHandler
{
    public function handle(array $request)
    {
        if (isset($request['oauth_token'])) {
            return "Logged in with OAuth provider";
        }

        return parent::handle($request);
    }
}

// =============== Usage =============== 

$email = new EmailPasswordAuth();
$otp = new OtpAuth();
$oauth = new OAuthAuth();

// Make Chain
$email // Email
    ->setNext($otp) // Email -> Otp
    ->setNext($oauth); // Email -> Otp -> OAuth

// Run

$request = [
    'mobile' => '09120000000',
    'otp' => '1234'
];
$email->handle($request);

// Step-1
// EmailPasswordAuth::handle() --> طبق شرط وارد این مرحله نمی شود و به مرحله بعد پاس داده می شود --> return $this->next->handle($request)

// Step-2
// OtpAuth::handle() -->  شرایط صدق می کند و وارد مرحله بعد نمی شود --> return "Logged in with OTP"

/*
Request: mobile + otp
EmailAuth
   ↓ (reject)
OtpAuth
   ↓ (accept → STOP)
OAuthAuth (never called)
*/