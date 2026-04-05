<?php

class Comment
{
    private const MIN_COMMENTS_COUNT = 0;
    private int $commentsCount;

    public function decreaseComments(): void
    {
        // what is 0 ?!!
        // if ($this->commentsCount === 0) {
        //     return;
        // }

        // better
        if ($this->commentsCount === self::MIN_COMMENTS_COUNT) {
            return;
        }

        $this->commentsCount--;
    }
}
