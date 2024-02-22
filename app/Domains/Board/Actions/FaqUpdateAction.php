<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardDTO;
use App\Domains\Board\Dtos\BoardFaqDTO;
use App\Domains\Board\Dtos\BoardMainDTO;
use App\Domains\Board\Requests\FaqReq;

class FaqUpdateAction
{
    public function __construct(
        private FindAction $action,
    ){

    }
    public function handleRequest(FaqReq $request, int $id)
    {
        $boardDTO = BoardDTO::from($request->toArray());
        $boardDTO->id = $id;
        $faqDTO = BoardFaqDTO::from($request->toArray());
        $faqDTO->board_id = $id;
        $this->handle($boardDTO, $faqDTO, $id, $request->is_main_published);
    }

    public function handle(BoardDTO $boardDTO, BoardFaqDTO $faqDTO, int $id, bool $isMainPublished): void
    {
        $dto = $this->action->handle($id);
        $model = $dto->getModel();
        $model->faq()->update($faqDTO->toArray());
        $model->update($boardDTO->toArray());

        if ($isMainPublished) {
            $model->main()->createOrFirst(['board_id' => $id]);
        } else {
            $model->main()->delete();
        }
    }
}
