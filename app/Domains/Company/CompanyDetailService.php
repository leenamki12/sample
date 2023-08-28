<?php

namespace App\Domains\Company;

class CompanyDetailService
{

    protected $detailRepository;

    public function __construct(CompanyDetailRepository $detail) {
        $this->detailRepository = $detail;
    }

    function detailCreate($request)
    {
        $detail = $this->detailRepository->store($request);

        return $detail;
    }

}