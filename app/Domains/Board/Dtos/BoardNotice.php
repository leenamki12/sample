<?php

use Spatie\LaravelData\Data;

class BoardNoticeDTO extends Data
{
    public function __construct(
        public int $board_id,
        public string $title,
        public string $content,
    ){

    }
}
