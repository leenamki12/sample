<?php

namespace App\Domains\Company;

class CompanyRepository
{

    protected $company;

    public function __construct() {
        $this->company = new Company;
    }

    public function store($request)
    {
        $company = $this->company->create($request);

        return $company;
    }


    public function getByCode($code)
    {
        return $this->company->where('auth_code', $code)->first();
    }
}