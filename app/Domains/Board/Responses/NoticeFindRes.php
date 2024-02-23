<?php

namespace App\Domains\Board\Responses;
use Spatie\LaravelData\Resource;

class NoticeFindRes extends Resource
{
    public function __construct(
        public int $id,
        public string $title,
        public string $content,
        public bool $is_published,
        public bool $is_main_published,
        public string $created_at,
    )
    {

    }
}
