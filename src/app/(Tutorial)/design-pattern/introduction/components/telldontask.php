<?php

class UserController
{
    // نقض tell dont ask
    public function updateWallet()
    {
        // procedural
        $user = User::find(1);

        // decision making
        if ($user->is_active == 1) {
            $user->walltet->balance += 1000;
            $user->wallet->save();
        } else {
            // do something
        }
    }
}

// ========================================================================
// Tell Don't Ask

class User
{

    public function updateWallet()
    {
        if ($this->isActive()) {
            $this->walltet->balance += 1000;
            $this->wallet->save();
        } else {
            // do something
        }
    }
}

class UserController
{
    // tell dont ask
    public function updateWallet()
    {
        // procedural
        $user = User::find(1);

        $user->updateWallet();
    }
}
