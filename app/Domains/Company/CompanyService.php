<?php

namespace App\Domains\Company;

class CompanyService
{

    protected $company;

    public function __construct(CompanyRepository $company) {
        $this->company = $company;
    }

    public function companyCreate($request)
    {

        $randomNumber = random_int(100000, 999999);

        $hasAuthCode = $this->company->getByCode($randomNumber);
        if($hasAuthCode) {
            return $this->companyCreate($request);
        }

        $company = $this->company->store([
            'user_id'         => $request['user_id'],
            'detail_id'       => $request['detail_id'],
            'approval_status' => 'waiting',
            'auth_code'       => $randomNumber,
        ]);

        return $company;
    }

    public function companyCodeUpdate($request)
    {
        $randomNumber = random_int(100000, 999999);

        $hasAuthCode = $this->company->getByCode($randomNumber);

        if($hasAuthCode) {
            return $this->companyCodeUpdate($request);
        }

        $company = $request->user()->company;
        $company->auth_code = $randomNumber;
        $company->save();

        return $company;
    }

}