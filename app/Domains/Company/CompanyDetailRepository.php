<?php

namespace App\Domains\Company;

class CompanyDetailRepository
{

    protected $detail;

    public function __construct() {
        $this->detail = new CompanyDetail;
    }

    public function store($request)
    {
        $detail = $this->detail->create([
            'name'             => $request->companiesName,
            'address'          => $request->address,
            'address_detail'   => $request->addressDetail,
            'postal_code'      => $request->postalCode,
            'employees'        => $request->employees,
            'business_license' => $request->businessLicense->store('images/businessLicense', 'public')
        ]);

        return $detail;
    }

    public function update($request)
    {
        $detail = $this->detail->update([
            'name'             => $request->companiesName,
            'address'          => $request->address,
            'address_detail'   => $request->addressDetail,
            'postal_code'      => $request->postalCode,
            'employees'        => $request->employees,
        ]);

        return $detail;
    }

}