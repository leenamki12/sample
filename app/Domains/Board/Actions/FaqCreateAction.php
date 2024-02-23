<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardDTO;
use App\Domains\Board\Dtos\BoardFaqDTO;
use App\Domains\Board\Dtos\BoardMainDTO;
use App\Domains\Board\Requests\FaqReq;

class FaqCreateAction
{
    public function __construct(
        private BoardCreateAction $action,
    )
    {

    }
    public function handleRequest(FaqReq $request)
    {
        $boardDTO = BoardDTO::from($request->toArray());
        $faqDTO = BoardFaqDTO::from($request->toArray());
        $this->handle($boardDTO, $faqDTO, $request->is_main_published);
    }

    public function handle(BoardDTO $boardDTO, BoardFaqDTO $faqDTO, bool $isMainPublished): void
    {
        $dto = $this->action->handle($boardDTO);
        $model = $dto->getModel();
        $model->faq()->create($faqDTO->toArray());

        if ($isMainPublished) {
            $model->main()->create((new BoardMainDTO($dto->id))->toArray());
        }
    }
}
