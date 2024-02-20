<?php

use Spatie\LaravelData\Data;

class BoardFileDTO extends Data
{
    public function __construct(
        public int $id,
        public int $board_id,
        public string $file_path,
    ){

    }
}
