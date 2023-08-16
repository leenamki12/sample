<?php

namespace App\DTOs\Register;

use App\Domains\Auth\UserVerifys;
use Spatie\LaravelData\Data;
use Illuminate\Support\Collection;

class VerifySmsDTO extends Data
{
    public function __construct(
      public int $phone,
      public string $code,
      public string $status,
    ) {
    }

    public static function fromVerify(UserVerifys $userVerifys): self
    {
        return new self(
          $userVerifys->phone,
          $userVerifys->code,
          $userVerifys->status,
      );
    }
}