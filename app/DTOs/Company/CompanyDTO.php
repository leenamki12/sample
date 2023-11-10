<?php

namespace App\DTOs\Company;

use App\Domains\Company\Company;
use App\DTOs\User\UserDTO;
use Spatie\LaravelData\Data;

class CompanyDTO extends Data
{
    public function __construct(
      public int $id,
      public $approvalStatus,
      public $authCode,
      public $detail,
      public $user,
    ) {
    }

    public static function fromCompany(Company $company): self
    {
        return new self(
          $company->id,
          $company->approval_status,
          $company->auth_code,
          CompanyDetailDTO::fromCompanyDetail($company->detail),
          UserDTO::adminfromUser($company->user),
        );
    }
}