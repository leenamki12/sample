<?php

namespace App\DTOs\Company;

use App\Domains\Company\Company;
use Spatie\LaravelData\Data;

class CompanyDTO extends Data
{
    public function __construct(
      public int $id,
      public $approval_status,
      public $auth_code,
      public $detail,
    ) {
    }

    public static function fromCompany(Company $company): self
    {
        return new self(
          $company->id,
          $company->approval_status,
          $company->auth_code,
          CompanyDetailDTO::fromCompanyDetail($company->detail)
        );
    }
}