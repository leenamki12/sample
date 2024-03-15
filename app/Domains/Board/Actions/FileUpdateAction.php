<?php

namespace App\Domains\Board\Actions;


class FileUpdateAction
{
    public function __construct(
        private FileFindAction $action,
    ){

    }

    public function handle(int $fileId, int|null $boardId)
    {
        $file = $this->action->handle($fileId)->getModel();
        $file->board_id = $boardId;
        $file->save();
    }
}
