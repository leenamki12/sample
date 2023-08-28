<?php

namespace App\Http\Controllers\Web\Auth;

use App\Domains\Company\Company;
use App\Domains\Company\CompanyDetail;
use App\Domains\Company\CompanyDetailService;
use App\Domains\Company\CompanyService;
use App\Domains\User\User;
use App\Domains\User\UserService;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{

    protected $user;
    protected $companyDetail;
    protected $company;

    public function __construct(
        UserService $user,
        CompanyDetailService $detail,
        CompanyService $company
    ) {
        $this->user = $user;
        $this->companyDetail = $detail;
        $this->company = $company;
    }

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

        $user = $this->user->userCreate($request);
        $companyDetail = $this->companyDetail->detailCreate($request);

         $this->company->companyCreate([
            'user_id'   => $user->id,
            'detail_id' => $companyDetail->id
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}