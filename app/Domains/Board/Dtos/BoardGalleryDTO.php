<?php

namespace App\Domains\Board\Dtos;

use App\Domains\Common\Dtos\BaseDTO;

class BoardGalleryDTO extends BaseDTO
{
    public function __construct(
        public ?int $board_id,
        public int $year,
    ){

    }
}
