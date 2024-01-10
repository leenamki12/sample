<?php

namespace App\Domains\Admin\WorkType\DTOs;
use Spatie\LaravelData\Data;


class WorkTypeDTO extends Data
{
    public function __construct(
        public string $name
    ) {
    }
}
