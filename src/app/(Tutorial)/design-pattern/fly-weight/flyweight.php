<?php
// بدون flyweight
class Tree
{
    public function __construct(
        public string $model,
        public string $texture,
        public int $x,
        public int $y
    ) {}
}

$trees = [];

// تکرار مدل و تکسچر
for ($i = 0; $i < 10000; $i++) {
    $trees[] = new Tree('oak_model', 'oak_texture', rand(0, 100), rand(0, 100));
}

// با flyweight

class TreeType
{
    public function __construct(
        public string $model,
        public string $texture
    ) {}
}

class TreeFactory
{
    private array $types = [];

    public function getTreeType(string $model, string $texture): TreeType
    {
        $key = $model . '_' . $texture;

        if (!isset($this->types[$key])) {
            $this->types[$key] = new TreeType($model, $texture);
        }

        return $this->types[$key];
    }
}

class Tree
{
    public function __construct(
        public int $x,
        public int $y,
        public TreeType $type
    ) {}
}

$factory = new TreeFactory();
$trees = [];

for ($i = 0; $i < 10000; $i++) {
    $type = $factory->getTreeType('oak_model', 'oak_texture');
    $trees[] = new Tree(rand(0, 100), rand(0, 100), $type);
}
