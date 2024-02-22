<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardDTO;
use App\Domains\Board\Models\Board;

class BoardCreateAction
{

    public function handle(BoardDTO $dto): BoardDTO
    {
        $board = new Board();
        $board->fill($dto->toArray());
        $board->save();

        return BoardDTO::from($board);
    }
}
