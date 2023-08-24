<?php

namespace App\Http\Controllers\Web\Auth;

use App\Domains\Auth\UserVerifys;
use App\Domains\Auth\UserVerifysService;
use App\Domains\User\UserService;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\VerifyPhoneRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class VerifySmsController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService) {
        $this->userService = $userService;
    }

    public function check(Request $request)
    {
        $isVerifyChecked = UserVerifysService::verifyValid($request);

        return redirect()->back()->with([
            'userVerifyStatus' => !$isVerifyChecked ? 'success' : 'fail',
            'userVerifyCode' => (string) $request->code
        ]);

    }


    public function store(VerifyPhoneRequest $request)
    {

        //휴대폰번호 중복체크
        $isPhoneValid = $this->userService->userPhoneDuplicateValid($request->phone);

        if(!$isPhoneValid){
            throw ValidationException::withMessages([
                'phone' => __('해당 휴대폰번호는 이미 사용 중입니다.'),
            ]);
        }

        $userVerifys = new UserVerifys();
        $randomNumber = random_int(100000, 999999);

        $validatedData = $request->validate([
            'phone' => 'required|string|min:11|max:11',
        ]);

        $userVerifys->phone = $validatedData['phone'];
        $userVerifys->code =  $randomNumber;
        $userVerifys->status = true;
        $userVerifys->expiration_at  = now()->addMinutes(10);

        $resultSendTalk = UserVerifysService::sendSms($userVerifys->phone, '[위드닥] 인증코드 '.$userVerifys->code, '{}');

        if($resultSendTalk[1]->code !== '0000'){
            return '';
        }

        $userVerifys->save();

        return redirect()->back()->with('userVerifyCode', (string) $userVerifys->code);
    }
}
