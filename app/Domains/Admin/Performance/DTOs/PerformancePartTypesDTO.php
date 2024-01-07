<?php

namespace App\Domains\Admin\Performance\DTOs;

use Spatie\LaravelData\Data;


class PerformancePartTypesDTO extends Data
{
    public function __construct(
        public int $id,
        public string $name
    ) {
    }

    public static function fromPartTypes(array $partType): self
    {
        return new self(
          $partType['id'],
          $partType['name'],
        );
    }
}