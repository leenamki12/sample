<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardDTO;
use App\Domains\Board\Dtos\BoardMainDTO;
use App\Domains\Board\Dtos\BoardNoticeDTO;
use App\Domains\Board\Requests\NoticeReq;

class NoticeCreateAction
{
    public function __construct(
        private BoardCreateAction $createAction,
        private FileUpdateAction $updateAction,
    )
    {

    }
    public function handleRequest(NoticeReq $request)
    {
        $boardDTO = BoardDTO::from($request->toArray());
        $noticeDTO = BoardNoticeDTO::from($request->toArray());
        $fileIds = $request['file_ids'];
        $this->handle($boardDTO, $noticeDTO, $request->is_main_published, $fileIds);
    }

    public function handle(BoardDTO $boardDTO, BoardNoticeDTO $noticeDTO, bool $isMainPublished, array $fileIds): void
    {
        $dto = $this->createAction->handle($boardDTO);
        $model = $dto->getModel();
        $model->notice()->create($noticeDTO->toArray());

        if ($isMainPublished) {
            $model->main()->create((new BoardMainDTO($dto->id))->toArray());
        }

        foreach($fileIds as $fileId) {
            $this->updateAction->handle($fileId, $dto->id);
        }
    }
}
