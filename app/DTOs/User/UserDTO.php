<?php

namespace App\DTOs\User;

use App\Domains\User\User;
use Spatie\LaravelData\Data;
use Illuminate\Support\Collection;

class UserDTO extends Data
{
    public function __construct(
      public int $id,
      //public string $name,
      //public string $email,
      //public string $phone,
      public $marketing_consent,
      public ?Collection $roles,
      public ?Collection $permissions,
      public $auth_company,
      public $company_detail,
    ) {
    }

    public static function fromUser(User $user): self
    {
        return new self(
          $user->id,
          //$user->name,
          //$user->email,
          //$user->phone,
          $user->marketing_consent,
          $user->getRoleNames(),
          $user->getPermissionNames(),
          $user->getAuthCompany(),
          $user->getCompanyDetail()
      );
    }
}
