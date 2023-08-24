<?php

namespace App\Http\Controllers\Web\Auth;

use App\Domains\Company\Company;
use App\Domains\Company\CompanyDetail;
use App\Domains\User\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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
    public function store(RegisterRequest $request): RedirectResponse
    {

        $user = User::create([
            'email'             => $request->email,
            'password'          => Hash::make($request->password),
            'name'              => $request->name,
            'phone'             => $request->phone,
            'marketing_consent' => $request->marketingConsent,
        ])->assignRole('company');

        $companyDetail = CompanyDetail::create([
            'name'             => $request->companiesName,
            'address'          => $request->address,
            'address_detail'   => $request->addressDetail,
            'postal_code'      => $request->postalCode,
            'employees'        => $request->employees,
            'business_license' => $request->businessLicense->store('images/businessLicense', 'public')
        ]);

        Company::create([
            'user_id'         => $user->id,
            'detail_id'       => $companyDetail->id,
            'approval_status' => 'waiting',
            'auth_code'       => '123456',
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}