<?php

namespace App\Http\Controllers\Web\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;

class CompanyAuthController extends Controller
{
    public function store(Request $request)
    {
        $authCode = $request->input('auth_code');

        if (Auth::guard('company')->attempt(['auth_code' => $authCode])) {

            $request->session()->regenerate();

            return redirect()->intended(RouteServiceProvider::HOME);
        }
    }


    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('company')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}