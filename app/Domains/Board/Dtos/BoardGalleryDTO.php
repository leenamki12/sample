<?php

use Spatie\LaravelData\Data;

class BoardGalleryDTO extends Data
{
    public function __construct(
        public int $board_id,
        public int $year,
        public string $title,
    ){

    }
}
