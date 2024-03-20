<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Responses\FaqFindRes;

class FaqFindAction
{
    public function __construct(
        private FindAction $action
    )
    {

    }
    public function handle(int $id): FaqFindRes
    {
        $dto = $this->action->handle($id);
        $board = $dto->getModel();
        $faq = $board->faq;
        $main = $board->main;

        return new FaqFindRes(
            $board->id,
            $board->title,
            $faq->content,
            $faq->category,
            $board->is_published,
            ($main != null),
            $board->created_at
        );
    }
}