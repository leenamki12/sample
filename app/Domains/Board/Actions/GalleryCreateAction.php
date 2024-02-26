<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Dtos\BoardDTO;
use App\Domains\Board\Dtos\BoardMainDTO;
use App\Domains\Board\Dtos\BoardGalleryDTO;
use App\Domains\Board\Requests\GalleryReq;

class GalleryCreateAction
{
    public function __construct(
        private BoardCreateAction $createAction,
        private FileUpdateAction $updateAction,
    )
    {

    }
    public function handleRequest(GalleryReq $request)
    {
        $boardDTO = BoardDTO::from($request->toArray());
        $galleryDTO = BoardGalleryDTO::from($request->toArray());
        $fileId = $request['file_id'];
        $this->handle($boardDTO, $galleryDTO, $request->is_main_published, $fileId);
    }

    public function handle(BoardDTO $boardDTO, BoardGalleryDTO $galleryDTO, bool $isMainPublished, int $fileId): void
    {
        $dto = $this->createAction->handle($boardDTO);
        $model = $dto->getModel();
        $model->gallery()->create($galleryDTO->toArray());

        if ($isMainPublished) {
            $model->main()->create((new BoardMainDTO($dto->id))->toArray());
        }

        $this->updateAction->handle($fileId, $dto->id);
    }
}
