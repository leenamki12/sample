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
      public $authCompany = false,
      public $companyName = '',
    ) {
    }

    public static function fromUser(User $user): self
    {
        if($user->roles->first()->name === 'admin'){
            return new self(
                $user->id,
                $user->name,
                $user->email,
                $user->marketing_consent,
                $user->getRoleNames(),
                $user->getPermissionNames(),
            );
        }

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

    public static function adminfromUser(User $user)
    {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'marketing_consent' => $user->marketing_consent,
            'roles' => $user->getRoleNames(),
            'permissions' => $user->getPermissionNames(),
        ];
    }
}