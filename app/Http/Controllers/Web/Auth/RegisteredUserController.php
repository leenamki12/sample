<?php

namespace App\Http\Controllers\Web\Auth;

use App\Domains\Auth\UserVerifys;
use App\Domains\Auth\UserVerifysService;
use App\Domains\User\User;
use App\DTOs\Register\VerifySmsDTO;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;


use App\Http\Requests\Auth\VerifySmsRequest;
use Illuminate\Support\Facades\Log;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('auth/pages/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }

    public function verifySmsStore(VerifySmsRequest $request)
    {

        $verifySms = new UserVerifys();
        $randomNumber = random_int(100000, 999999);

        $validatedData = $request->validate([
            'phone' => 'required|string|min:11|max:11',
        ]);

        $verifySms->phone = $validatedData['phone'];
        $verifySms->code =  $randomNumber;
        $verifySms->status = 'effective';

        $resultSendTalk = UserVerifysService::sendSms($verifySms->phone, '[위드닥] 인증코드 '.$verifySms->code, '{}');

        if($resultSendTalk[1]->code !== '0000'){
            return '';
        }

        $verifySms->save();

        return Inertia::render('auth/pages/Register', [
            'UserVerifySmsCode' => (string) $verifySms->code
        ]);

    }
}
