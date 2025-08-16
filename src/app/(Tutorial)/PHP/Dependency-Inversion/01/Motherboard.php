<?php
class Motherboard
{
    public function __construct(public $keyboard, public $disk, public $cpu) {}

    public function turnOn()
    {
        $key1 = $this->keyboard->type();
        $key2 = $this->keyboard->type();

        $result = $this->cpu->add($key1, $key2);

        $this->disk->save($result);
    }
}

$keyboard = new KeyboardFarasoo();
$cpu = new CPU_CoreI3_2025();
$disk = new SSD_250Gig_Samsung();

$motherboard = new Motherboard($keyboard, $dick, $cpu);
