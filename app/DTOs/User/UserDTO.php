<?php

namespace App\DTOs\User;

use App\Domains\Company\Company;
use App\Domains\User\User;
use App\DTOs\Company\CompanyDTO;
use Spatie\LaravelData\Data;
use Illuminate\Support\Collection;
use Mockery\Undefined;

class UserDTO extends Data
{
    public function __construct(
      public int $id,
      public string $name,
      public string $email,
      public $marketing_consent,
      public ?Collection $roles,
      public ?Collection $permissions,
      public $auth_company,
    ) {
    }

    public static function fromUser(User $user): self
    {
        return new self(
          $user->id,
          $user->name,
          $user->email,
          $user->marketing_consent,
          $user->getRoleNames(),
          $user->getPermissionNames(),
          $user->getAuthCompany(),
      );
    }
}