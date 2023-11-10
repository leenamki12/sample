<?php

namespace App\Http\Controllers\Web;

use App\Domains\Company\CompanyService;
use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\ProfilePhotoUpdateRequest;
use App\Http\Requests\Profile\ProfileUpdateRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProfileController extends Controller
{
    protected $companyService;

    public function __construct(
        CompanyService $companyService,
    ) {
        $this->companyService = $companyService;
    }

    public function edit(Request $request)
    {

        return Inertia::render('profile/pages/ProfileEdit', [
            'profile' => $request->user()->getCompany()
        ]);
    }

    public function update(ProfileUpdateRequest $request)
    {

        $request->user()->fill($request->validated());
        $request->user()->save();

        $request->user()->company->detail->update([
            'name'             => $request->companiesName,
            'address'          => $request->address,
            'address_detail'   => $request->addressDetail,
            'postal_code'      => $request->postalCode,
            'employees'        => $request->employees,
        ]);

        return Redirect::route('profile.edit');
    }


    public function photoUpdate(ProfilePhotoUpdateRequest $request)
    {
        if ($request->hasFile('businessLicense')) {

            $businessLicensePath = $request->file('businessLicense')
                ->store('images/businessLicense', 'public');

            $request->user()->company->detail->update([
                'business_license' => $businessLicensePath,
            ]);
        }
    }
    public function delete(Request $request)
    {
        $company = $request->user()->company;
        $user = $request->user();
        $companyDetail = $request->user()->company->detail;

        $company->delete();
        $user->delete();
        $companyDetail->delete();

        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}