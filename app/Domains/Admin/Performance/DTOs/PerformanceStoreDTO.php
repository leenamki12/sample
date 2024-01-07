<?php

namespace App\Domains\Admin\Performance\DTOs;

use App\Domains\Admin\Performance\Performance;
use Carbon\Carbon;
use Spatie\LaravelData\Data;


class PerformanceStoreDTO extends Data
{
    public function __construct(
        public string $title,
        public bool $visible,
        public string $location,
        public Carbon $dateTime,
    ) {
    }

    public static function fromPerformance(array $performance): self
    {
        return new self(
        $performance['title'],
        $performance['visible'],
        $performance['location'],
        Carbon::parse($performance['dateTime']),
      );
    }
}