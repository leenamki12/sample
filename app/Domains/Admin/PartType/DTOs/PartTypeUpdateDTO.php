<?php

namespace App\Domains\Admin\PartType\DTOs;
use Spatie\LaravelData\Data;


class PartTypeUpdateDTO extends Data
{
    public function __construct(
        public string $name
    ) {
    }
}