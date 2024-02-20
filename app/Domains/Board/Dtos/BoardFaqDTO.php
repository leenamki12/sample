<?php

use Spatie\LaravelData\Data;

class BoardFaqDTO extends Data
{
    public function __construct(
        public int $board_id,
        public string $category,
        public string $question,
        public string $answer,
    ){

    }
}
