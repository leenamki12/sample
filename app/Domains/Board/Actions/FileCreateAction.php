<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardFileDTO;
use App\Domains\Board\Models\BoardFile;

class FileCreateAction
{

    public function handle(BoardFileDTO $dto): BoardFileDTO
    {
        $file = new BoardFile();
        $file->fill($dto->toArray());
        $file->save();

        return BoardFileDTO::from($file);
    }
}
