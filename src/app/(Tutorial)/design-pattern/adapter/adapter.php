<?php

class MelliBank
{
    public function requestPayment($rialAmount)
    {
        return "melli-ok";
    }
}

class MellatBank
{
    public function makeTransaction($amount, $currency)
    {
        return true;
    }
}

class SamanBank
{
    public function payViaGateway($price, $currency, $mobile)
    {
        return ['status' => 'success'];
    }
}

// بدون آداپتر
// نقض OCP
if ($bankType === 'melli') {
}
if ($bankType === 'mellat') {
}
if ($bankType === 'saman') {
}


// با آداپتر

// چون ورودی توابع پرداخت بانک ها متفاوت است این کلاس را برای راحتی تعریف می کنیم
// Interface داخلی باید ثابت و ساده بماند
// داده های ثابت مثل کانفیگ ها در کانستراکتور اداپتر دریافت می شود که بتوانیم موقع بایند کردن ست کنیم. اما دیتایی شبیه موبایل که ران تایم است باید حتما در متد پی هندل شود
readonly class Money
{
    public function __construct(public string $amount) {}
}


readonly class PaymentContext
{
    public function __construct(public array $data = []) {}

    public function get(string $key): mixed
    {
        return $this->data[$key] ?? null;
    }

    public function require(string $key): mixed
    {
        return $this->data[$key] ?? throw new InvalidArgumentException("$key is required");
    }
}

interface PaymentGatewayInterface
{
    public function pay(Money $money, PaymentContext $context): bool;
}

class MelliAdapter implements PaymentGatewayInterface
{
    public function __construct(private MelliBank $bank) {}

    public function pay(Money $money, PaymentContext $context): bool
    {
        $result = $this->bank->requestPayment($money->amount);

        return $result === "melli-ok";
    }
}

class MellatAdapter implements PaymentGatewayInterface
{
    // کارنسی ثابت و از کانفیگ خوانده می شود پس در کانستراکتور قرار میگیرد که موقع بایند صراحتا مقدار دهی شود
    public function __construct(private MellatBank $bank, private string $currency) {}

    public function pay(Money $money, PaymentContext $context): bool
    {
        return $this->bank->makeTransaction(
            $money->amount,
            $this->currency
        );
    }
}

interface RequireMobileInterface {}

class SamanAdapter implements PaymentGatewayInterface, RequireMobileInterface
{
    public function __construct(private SamanBank $bank, private string $currency) {}

    public function pay(Money $money, PaymentContext $context): bool
    {
        $mobile = $context->require('mobile');

        $res = $this->bank->payViaGateway(
            $money->amount,
            $this->currency,
            $mobile
        );

        return $res['status'] === 'success';
    }
}
// Step 1
// استفاده
// رعایت DIP
// نکته: در این بخش باید کانتکست را متناسب با گیت وی بسازیم پس کد نهایی پایین تر نوشته می شود
function checkout(PaymentGatewayInterface $gateway, PaymentContext $paymentContext)
{
    return $gateway->pay(new Money(1000), $paymentContext);
}

class PaymentContextBuilder
{
    public function __construct(private array $input) {}

    public function build(PaymentGatewayInterface $gateway): PaymentContext
    {
        $data = [];

        // نقض OCP.
        if ($gateway instanceof RequireMobileInterface) {
            $data['mobile'] = $this->input['mobile'];
        }

        return new PaymentContext($data);
    }
}

function checkout(
    PaymentGatewayInterface $gateway,
    PaymentContextBuilder $builder,
    array $requestInput
) {
    $builder = new PaymentContextBuilder($requestInput);


    $context = $builder->build($gateway);

    return $gateway->pay(new Money(1000), $context);
}

// Step 2 اصلاح نقض OCP

interface ContextProviderInterface
{
    public function supports(PaymentGatewayInterface $gateway): bool;

    public function provide(array $input): array;
}

class MobileProvider implements ContextProviderInterface
{
    public function supports(PaymentGatewayInterface $gateway): bool
    {
        return $gateway instanceof RequireMobileInterface;
    }

    public function provide(array $input): array
    {
        return [
            'mobile' => $input['mobile']
                ?? throw new InvalidArgumentException('mobile required'),
        ];
    }
}

class PaymentContextBuilder
{
    public function __construct(
        private iterable $providers
    ) {}

    public function build(PaymentGatewayInterface $gateway, array $input): PaymentContext
    {
        $data = [];

        foreach ($this->providers as $provider) {
            if ($provider->supports($gateway)) {
                $data = array_merge($data, $provider->provide($input));
            }
        }

        return new PaymentContext($data);
    }
}

function checkout(
    PaymentGatewayInterface $gateway,
    PaymentContextBuilder $builder,
    array $requestInput
) {
    $builder = new PaymentContextBuilder($requestInput);


    $context = $builder->build($gateway);

    return $gateway->pay(new Money(1000), $context);
}