<?php
class SSD_250Gig_Samsung
{
    public function save($data)
    {
        file_put_contents('disk', $data);
    }
}
