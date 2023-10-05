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
        return $this->user->where('email', $email)->first();
    }

    public function getByPhone($phone)
    {
        return $this->user->where('phone', $phone)->first();
    }

    public function store($request)
    {

        $user = $this->user->create([
            'email'             => $request->email,
            'password'          => Hash::make($request->password),
            'name'              => $request->name,
            'phone'             => $request->phone,
            'marketing_consent' => $request->marketingConsent,
        ])->assignRole('company');

        return $user;
    }

}