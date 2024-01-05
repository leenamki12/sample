<?php

namespace App\Domains\Admin\PartType\DTOs;
use Spatie\LaravelData\Data;


class PartTypeQueryDTO extends Data
{
    public function __construct(
        public int $page = 1,
        public int $per_page = 10,
    ) {
    }

    public static function rules(): array
    {
        return [
            'page' => ['sometimes', 'integer'],
            'per_page' => ['sometimes', 'integer'],
        ];
    }
}
