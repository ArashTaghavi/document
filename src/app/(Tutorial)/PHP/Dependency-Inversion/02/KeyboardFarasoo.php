<?php
class KeyboardFarasoo implements KeyboardInterface
{
    public function type(): int
    {
        return rand(0, 9);
    }
}
