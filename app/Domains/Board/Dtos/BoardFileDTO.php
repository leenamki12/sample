<?php

namespace App\Domains\Board\Dtos;

use App\Domains\Common\Dtos\BaseDTO;

class BoardFileDTO extends BaseDTO
{
    public function __construct(
        public ?int $id,
        public ?int $board_id,
        public string $file_path,
    ){

    }
}
