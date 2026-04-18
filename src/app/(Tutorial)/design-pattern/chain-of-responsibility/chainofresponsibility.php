
<?php

abstract class Handler
{
    protected ?Handler $next = null;

    public function setNext(Handler $handler): Handler
    {
        $this->next = $handler;
        return $handler;
    }

    public function handle(string $level, string $message)
    {
        if ($this->next) {
            return $this->next->handle($level, $message);
        }

        return "No handler found for: $message";
    }
}

class LowLevelHandler extends Handler
{
    public function handle(string $level, string $message)
    {
        if ($level === 'low') {
            return "Handled by L1: $message";
        }

        return parent::handle($level, $message);
    }
}

class MediumLevelHandler extends Handler
{
    public function handle(string $level, string $message)
    {
        if ($level === 'medium') {
            return "Handled by L2: $message";
        }

        return parent::handle($level, $message);
    }
}

class HighLevelHandler extends Handler
{
    public function handle(string $level, string $message)
    {
        if ($level === 'high') {
            return "Handled by L3: $message";
        }

        return parent::handle($level, $message);
    }
}

// Usage

$low = new LowLevelHandler();
$medium = new MediumLevelHandler();
$high = new HighLevelHandler();

$low->setNext($medium)->setNext($high);

echo $low->handle('medium', 'Server is slow');