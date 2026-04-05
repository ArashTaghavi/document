<?php

class Comment
{
    private int $commentsCount;

    public function removeComments(): void
    {
        // remove comment
        $this->commentsCount--;
    }
}

$comment = new Comment();

// safe
$comment->removeComments();

// wrong
$comment->commentsCount = 100;
