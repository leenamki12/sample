<?php

use Spatie\LaravelData\Data;

class BoardDTO extends Data
{
    public function __construct(
        public int $id,
        public string $type,
        public bool $is_published,
    ){

    }
}
