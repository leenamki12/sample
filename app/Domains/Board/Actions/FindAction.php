<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardDTO;
use App\Domains\Board\Models\Board;

class FindAction
{
    public function handle(int $id): BoardDTO
    {
        return BoardDTO::from(Board::findOrFail($id));
    }
}
