<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardDTO;
use App\Domains\Board\Dtos\BoardGalleryDTO;
use App\Domains\Board\Requests\GalleryReq;

class GalleryUpdateAction
{
    public function __construct(
        private FindAction $findAction,
        private FileUpdateAction $updateAction,
    ){

    }
    public function handleRequest(GalleryReq $request, int $id)
    {
        $boardDTO = BoardDTO::from($request->toArray());
        $boardDTO->id = $id;
        $galleryDTO = BoardGalleryDTO::from($request->toArray());
        $galleryDTO->board_id = $id;
        $fileId = $request['file_id'];
        $this->handle(
            $boardDTO,
            $galleryDTO,
            $id,
            $request->is_main_published,
            $fileId);
    }

    public function handle(
        BoardDTO $boardDTO,
        BoardGalleryDTO $galleryDTO,
        int $id,
        bool $isMainPublished,
        int $fileId): void
    {
        $dto = $this->findAction->handle($id);
        $model = $dto->getModel();
        $model->gallery()->update($galleryDTO->toArray());
        $model->update($boardDTO->toArray());

        if ($isMainPublished) {
            $model->main()->createOrFirst(['board_id' => $id]);
        } else {
            $model->main()->delete();
        }

        $this->updateAction->handle($fileId, $dto->id);
    }
}
