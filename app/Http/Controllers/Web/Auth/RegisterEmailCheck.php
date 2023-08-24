<?php

namespace App\Http\Controllers\Web\Auth;

use App\Domains\User\UserService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class RegisterEmailCheck extends Controller
{
    protected $userService;

    public function __construct(UserService $userService) {
        $this->userService = $userService;
    }

    public function __invoke(Request $request)
    {
        $isEmailValid = $this->userService->userEmailDuplicateValid($request->email);

        if(!$isEmailValid){
            throw ValidationException::withMessages([
                'email' => __('해당 이메일은 이미 사용 중입니다.'),
            ]);
        }
    }
}