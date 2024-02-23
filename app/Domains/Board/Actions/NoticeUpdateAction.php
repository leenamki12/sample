<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardDTO;
use App\Domains\Board\Dtos\BoardNoticeDTO;
use App\Domains\Board\Requests\NoticeReq;

class NoticeUpdateAction
{
    public function __construct(
        private FindAction $findAction,
        private FileUpdateAction $updateAction,
    ){

    }
    public function handleRequest(NoticeReq $request, int $id)
    {
        $boardDTO = BoardDTO::from($request->toArray());
        $boardDTO->id = $id;
        $noticeDTO = BoardNoticeDTO::from($request->toArray());
        $noticeDTO->board_id = $id;
        $fileIds = $request['file_ids'];
        $this->handle(
            $boardDTO,
            $noticeDTO,
            $id,
            $request->is_main_published,
            $fileIds);
    }

    public function handle(
        BoardDTO $boardDTO,
        BoardNoticeDTO $noticeDTO,
        int $id,
        bool $isMainPublished,
        array $fileIds): void
    {
        $dto = $this->findAction->handle($id);
        $model = $dto->getModel();
        $model->notice()->update($noticeDTO->toArray());
        $model->update($boardDTO->toArray());

        if ($isMainPublished) {
            $model->main()->createOrFirst(['board_id' => $id]);
        } else {
            $model->main()->delete();
        }

        foreach($fileIds as $fileId) {
            $this->updateAction->handle($fileId, $dto->id);
        }
    }
}
