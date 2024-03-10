<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Responses\NoticeFindRes;
use Illuminate\Support\Facades\Log;

class NoticeFindAction
{
    public function __construct(
        private FindAction $action
    )
    {

    }
    public function handle(int $id): NoticeFindRes
    {
        $dto = $this->action->handle($id);
        $board = $dto->getModel();
        $notice = $board->notice;
        $main = $board->main;
        $file_ids = [];
        foreach($board->file as $file) {
            array_push($file_ids, $file->id);
        }

        return new NoticeFindRes(
            $board->id,
            $board->title,
            $notice->content,
            $board->is_published,
            ($main != null),
            $file_ids
        );
    }
}
