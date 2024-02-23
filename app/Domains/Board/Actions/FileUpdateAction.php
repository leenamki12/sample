<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardFileDTO;
use App\Domains\Board\Models\BoardFile;

class FileUpdateAction
{
    public function __construct(
        private FileFindAction $action,
    ){

    }

    public function handle(int $fileId, int $boardId)
    {
        $file = $this->action->handle($fileId)->getModel();
        $file->board_id = $boardId;
        $file->save();
    }
}
