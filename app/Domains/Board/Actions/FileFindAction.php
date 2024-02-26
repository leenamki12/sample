<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardFileDTO;
use App\Domains\Board\Models\BoardFile;

class FileFindAction
{
    public function handle(int $id): BoardFileDTO
    {
        $file = BoardFile::findOrFail($id);
        return BoardFileDTO::from($file);
    }
}
