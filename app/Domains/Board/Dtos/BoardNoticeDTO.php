<?php

namespace App\Domains\Board\Dtos;

use App\Domains\Common\Dtos\BaseDTO;

class BoardNoticeDTO extends BaseDTO
{
    public function __construct(
        public int $board_id,
        public string $title,
        public string $content,
    ){

    }
}
