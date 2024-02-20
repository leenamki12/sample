<?php

namespace App\Domains\Board\Dtos;

use App\Domains\Common\Dtos\BaseDTO;

class BoardMainDTO extends BaseDTO
{
    public function __construct(
        public int $board_id,
    ){

    }
}
