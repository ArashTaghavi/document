
<?php
// بدون proxy
// لود شدن عکس تحت هر شرایطی، مثلا حتی اگر عکس وجود نداشته باشد
class Image
{
    public function __construct(private string $filename)
    {
        echo "Loading image from disk...\n";
    }

    public function display()
    {
        echo "Displaying {$this->filename}\n";
    }
}

$image = new Image('photo.jpg');
$image->display();


// با پروکسی (اعمال لیزی لودینگ)
// لود شدن عکس در صورت وجود داشتن
class Image
{
    public function __construct(private string $filename)
    {
        echo "Loading image from disk...\n";
    }

    public function display()
    {
        echo "Displaying {$this->filename}\n";
    }
}

class ImageProxy
{
    private ?Image $realImage = null;

    public function __construct(private string $filename) {}

    public function display()
    {
        if ($this->realImage === null) {
            $this->realImage = new Image($this->filename);
        }

        $this->realImage->display();
    }
}

// ========== Example 2 ==========
// Access Control

class SecureServiceProxy
{
    public function __construct(private $user, private $service) {}

    public function execute()
    {
        if (!$this->user->isAdmin()) {
            throw new Exception("Access denied");
        }

        return $this->service->execute();
    }
}
