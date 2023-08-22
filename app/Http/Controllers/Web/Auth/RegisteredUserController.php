<?php

namespace App\Http\Controllers\Web\Auth;

use App\Domains\Company\Company;
use App\Domains\Company\CompanyDetail;
use App\Domains\User\User;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

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
    public function store(Request $request)//: RedirectResponse
    {
        $validatedData = $request->validate([
            'email'           => 'required|string|email|max:255|unique:'.User::class,
            'password'        => ['required', 'confirmed', Password::min(8)->numbers()->symbols()],
            'name'            => 'required|string|max:20',
            'phone'           => 'required|string|max:16',
            'companiesName'   => 'required|string|max:100',
            'employees'       => 'required|min:1',
            'address'         => 'required|string|max:100',
            'postalCode'      => 'string|max:5',
            'addressDetail'   => 'max:100',
            'businessLicense' => 'required|image|mimes:jpeg,png|max:2048',
        ]);

        $user = User::create([
            'email'     => $validatedData['email'],
            'password'  => Hash::make($validatedData['password']),
            'name'      => $validatedData['name'],
            'phone'     => $validatedData['phone'],
        ])->assignRole('company');

        $companyDetail = CompanyDetail::create([
            'name'             => $validatedData['companiesName'],
            'address'          => $validatedData['address'],
            'address_detail'   => $validatedData['addressDetail'],
            'postal_code'      => $validatedData['postalCode'],
            'employees'        => $validatedData['employees'],
            'business_license' => $validatedData['businessLicense']->store('images/businessLicense', 'public')
        ]);

        $company = Company::create([
            'user_id'         => $user->id,
            'detail_id'       => $companyDetail->id,
            'approval_status' => 'waiting',
            'auth_code'       => '123456',
        ]);

        log::debug($user);
        log::debug($company);

        // event(new Registered($user));

        // Auth::login($user);

        // return redirect(RouteServiceProvider::HOME);
    }
}