<?php

use Spatie\LaravelData\Data;

class BoardMainDTO extends Data
{
    public function __construct(
        public int $board_id,
    ){

    }
}
