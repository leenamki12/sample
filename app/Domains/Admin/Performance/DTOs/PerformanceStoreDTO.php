<?php

namespace App\Domains\Admin\Performance\DTOs;

use Carbon\Carbon;
use Spatie\LaravelData\Data;


class PerformanceStoreDTO extends Data
{
    public function __construct(
        public string $title,
        public bool $visible,
        public string $location,
        public string $date_time,
    ) {
    }

    public static function fromArray(array $performance): self
    {
        return new self(
            $performance['title'],
            $performance['visible'],
            $performance['location'],
            Carbon::parse($performance['date_time'])->format('Y-m-d H:i:s'),
        );
    }
}