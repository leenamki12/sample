<?php

namespace App\DTOs\User;

use App\Domains\User\User;
use Spatie\LaravelData\Data;
use Illuminate\Support\Collection;

class UserDTO extends Data
{
    public function __construct(
      public int $id,
      public string $name,
      public string $email,
      public $marketingConsent,
      public ?Collection $roles,
      public ?Collection $permissions,
      public $authCompany,
      public $companyName,
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
          $user->getCompany()->detail->name
      );
    }
}