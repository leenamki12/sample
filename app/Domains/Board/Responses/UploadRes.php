<?php

namespace App\Domains\Board\Responses;
use Spatie\LaravelData\Resource;

class UploadRes extends Resource
{
    public function __construct(
        public int $file_id,
        public string $url,
    )
    {

    }
}
