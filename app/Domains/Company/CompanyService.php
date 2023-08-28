<?php

namespace App\Domains\Company;

class CompanyService
{

    protected $company;

    public function __construct(CompanyRepository $company) {
        $this->company = $company;
    }

    function companyCreate($request)
    {
        $company = $this->company->store([
            'user_id'   => $request->user_id,
            'detail_id' => $request->detail_id,
            'approval_status' => 'waiting',
            'auth_code'       => '123456',
        ]);

        return $company;
    }

}
