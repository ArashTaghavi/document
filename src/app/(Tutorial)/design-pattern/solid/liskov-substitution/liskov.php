<?php

interface UserRepository
{
    public function find(int $id);
    public function all();
    public function delete(int $id);
    public function store(array $data);
}

class DbUserRepository implements UserRepository
{
    public function find(int $id)
    {
        return User::find($id);
    }

    public function all()
    {
        return User::all();
    }

    public function delete(int $id): int
    {
        return User::delete($id);
    }

    public function store(array $data): int
    {
        return User::create($data);
    }
}

class CacheUserRepository implements UserRepository
{
    public function find(int $id)
    {
        return Cache::get("user:$id");
    }

    //different behavior
    public function all()
    {
        // nothing
    }
}

// ok
function listUsers(UserRepository $repo)
{
    return $repo->all();
}

// failed (different behavior)
function listUsers(CacheUserRepository $repo)
{
    return $repo->all();
}

// failed (different behavior)
function delete(CacheUserRepository $repo, int $id)
{
    $repo->delete($id);
    // different return type
    return true;
}

// failed (different behavior)
function store(CacheUserRepository $repo, array $data)
{
    if ($condition) {
        $repo->store($data);
    } else {
        // do something
    }
}
