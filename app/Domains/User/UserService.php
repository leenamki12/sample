<?php

namespace App\Domains\User;

use App\DTOs\User\UserDTO;


class UserService
{

    protected $userRepository;

    public function __construct(UserRepository $user) {
        $this->userRepository = $user;
    }

    function userEmailDuplicateValid($email)
    {
        $user = $this->userRepository->getByEmail($email);
        if($user){
            return false;
        }

        return true;
    }

    function userPhoneDuplicateValid($phone)
    {
        $user = $this->userRepository->getByPhone($phone);
        if($user){
            return false;
        }

        return true;
    }

    function userCreate($request)
    {
        $user = $this->userRepository->store($request);

        return $user;
    }

}