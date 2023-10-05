<?php

namespace App\Http\Controllers\Web\Profile;

use App\Domains\Company\CompanyService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CompanyCodeController extends Controller
{
    protected $companyService;

    public function __construct(
        CompanyService $companyService
    ) {
        $this->companyService = $companyService;
    }

    public function update(Request $request)
    {
        $this->companyService->companyCodeUpdate($request);
    }
}