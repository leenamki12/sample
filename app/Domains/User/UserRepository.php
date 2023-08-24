<?php

namespace App\Domains\User;

class UserRepository
{

    protected $user;

    public function __construct() {
        $this->user = new User;
    }

    public function getByEmail($email)
    {
        return $this->user->where('email', $email)->first();
    }

    public function getByPhone($phone)
    {
        return $this->user->where('phone', $phone)->first();
    }

}