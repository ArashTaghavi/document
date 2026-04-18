
<?php


abstract class PostStatus
{
    protected Post $post;

    public function setPost(Post $post)
    {
        $this->post = $post;
    }

    abstract public function draft();
    abstract public function moderation();
    abstract public function published();
}


// Concrete Statuses

class DraftStatus extends PostStatus
{
    public function draft()
    {
        $this->post->forwardTo(new DraftStatus());
    }

    public function moderation()
    {
        $this->post->forwardTo(new ModerationtStatus());
    }

    public function published()
    {
        throw new Exception('');
    }
}

class ModerationtStatus extends PostStatus
{
    public function draft()
    {
        $this->post->forwardTo(new DraftStatus());
    }

    public function moderation()
    {
        throw new Exception('');
    }

    public function published()
    {
        $this->post->forwardTo(new PublishedStatus());
    }
}

class PublishedStatus extends PostStatus
{
    public function draft()
    {
        $this->post->forwardTo(new DraftStatus());
    }

    public function moderation()
    {
        $this->post->forwardTo(new ModerationtStatus());
    }

    public function published()
    {
        throw new Exception('');
    }
}



class Post
{
    private PostStatus $postStatus;

    public function __construct(private string $title, private string $content)
    {
        $this->forwardTo(new DraftStatus());
    }

    public function forwardTo(PostStatus $postStatus)
    {
        $this->postStatus = $postStatus;
        $this->postStatus->setPost($this);
    }

    public function draft()
    {
        $this->postStatus->draft();
    }
    public function moderation()
    {
        $this->postStatus->moderation();
    }
    public function published()
    {
        $this->postStatus->published();
    }
}

// Usage

class PostController
{
    public function publishPost()
    {
        $post = new Post('Title', 'Body');
        // status: draft
        // $post->published(); ==> (new DraftStatus())->published() ==> exeception

        $post->moderation(); // new ModerationStatus())->published() ==> OK
    }
}
