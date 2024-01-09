<?php

namespace App\Domains\Admin\Performance\DTOs;

use Spatie\LaravelData\Data;


class PerformancePartTypesDTO extends Data
{
    /** @typescript */
    public function __construct(
        public int $id,
        public string $name
    ) {
    }

    public static function fromArray(array $part_type): self
    {
        return new self(
          $part_type['id'],
          $part_type['name'],
        );
    }
}
