<?php
// ==================== Example 1 (Laravel) ====================
interface Publisher
{
    public function publish(string $message);
}

abstract class MessagePublisher
{
    public function publish(string $message)
    {
        $publisher = $this->createPublisher();
        $publisher->publish($message);
    }

    abstract protected function createPublisher(): Publisher;
}

class InstagramPublisher implements Publisher
{
    public function publish(string $message)
    {
        return 'Instagram Publisher';
    }
}

class InstagramPublisherFactory extends MessagePublisher
{
    public function createPublisher(): Publisher
    {
        return new InstagramPublisher();
    }
}


class TelegramPublisher implements Publisher
{
    public function publish(string $message)
    {
        return 'Telegram Publisher';
    }
}

class TelegramPublisherFactory extends MessagePublisher
{
    public function createPublisher(): Publisher
    {
        return new TelegramPublisher();
    }
}


class UserController extends Controller
{
    public function __construct(private MessagePublisher $publisher) {}

    public function publishMessage()
    {
        $this->publisher->publish("Hello");
    }
}

$this->app->bind(MessagePublisher::class, InstagramPublisher::class);

