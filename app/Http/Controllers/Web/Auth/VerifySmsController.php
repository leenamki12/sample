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
        UserVerifysService::verifyChecked($request);

        return redirect()->back()->with([
            'userVerifyStatus' => true,
            'userVerifyCode' => (string) $request->code
        ]);

    }


    public function store(VerifyPhoneRequest $request)
    {

        $verifySms = new UserVerifys();
        $randomNumber = random_int(100000, 999999);

        $validatedData = $request->validate([
            'phone' => 'required|string|min:11|max:11',
        ]);

        $verifySms->phone = $validatedData['phone'];
        $verifySms->code =  $randomNumber;
        $verifySms->status = true;
        $verifySms->expiration_at  = now()->addMinutes(10);

        $resultSendTalk = UserVerifysService::sendSms($verifySms->phone, '[위드닥] 인증코드 '.$verifySms->code, '{}');

        if($resultSendTalk[1]->code !== '0000'){
            return '';
        }

        $verifySms->save();

        return redirect()->back()->with('userVerifyCode', (string) $verifySms->code);
    }
}