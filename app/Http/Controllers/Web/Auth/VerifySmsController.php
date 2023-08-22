<?php

namespace App\Http\Controllers\Web\Auth;

use App\Domains\Auth\UserVerifys;
use App\Domains\Auth\UserVerifysService;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\VerifyPhoneRequest;
use Illuminate\Http\Request;

class VerifySmsController extends Controller
{

    public function check(Request $request)
    {
        $verifyChecked = UserVerifysService::verifyChecked($request);

        return redirect()->back()->with([
            'userVerifyStatus' => !$verifyChecked ? 'success' : 'fail',
            'userVerifyCode' => (string) $request->code
        ]);

    }


    public function store(VerifyPhoneRequest $request)
    {

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