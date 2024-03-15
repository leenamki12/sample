<?php

namespace App\Domains\Board\Responses;
use Spatie\LaravelData\Resource;

class GalleryFindRes extends Resource
{
    public function __construct(
        public int $id,
        public string $title,
        public int $year,
        public int $file_id,
        public string $file_path,
        public bool $is_published,
        public bool $is_main_published,
        public string $created_at,
    )
    {

    }
}
