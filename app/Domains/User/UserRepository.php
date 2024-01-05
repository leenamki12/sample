<?php

namespace App\Domains\User;
use Illuminate\Support\Facades\Hash;
class UserRepository
{

    protected $user;

    public function __construct() {
        $this->user = new User;
    }

    public function getByEmail($email)
    {
        return $this->user->where('identification', $email)->first();
    }

    public function store($request)
    {

        $user = $this->user->create([
            'identification'             => $request->email,
            'password'          => Hash::make($request->password),
            'name'              => $request->name,
        ])->assignRole('company');

        return $user;
    }

}