<?php

namespace App\Domains\Board\Dtos;

use App\Domains\Common\Dtos\BaseDTO;

class BoardDTO extends BaseDTO
{
    public function __construct(
        public ?int $id,
        public ?string $type,
        public string $title,
        public bool $is_published,
    ){

    }
}
