<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Responses\NoticeFindRes;

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
        return new NoticeFindRes(
            $board->id,
            $board->title,
            $notice->content,
            $board->is_published,
            ($main != null),
            $board->created_at,
        );
    }
}
