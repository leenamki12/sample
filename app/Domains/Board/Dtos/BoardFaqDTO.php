<?php

namespace App\Domains\Board\Dtos;

use App\Domains\Common\Dtos\BaseDTO;

class BoardFaqDTO extends BaseDTO
{
    public function __construct(
        public ?int $board_id,
        public string $category,
        public string $content,
    ){

    }
}
