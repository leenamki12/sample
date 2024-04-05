<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Responses\GalleryFindRes;

class GalleryFindAction
{
    public function __construct(
        private FindAction $action
    )
    {

    }
    public function handle(int $id): GalleryFindRes
    {
        $dto = $this->action->handle($id);
        $board = $dto->getModel();
        $gallery = $board->gallery;
        $main = $board->main;
        $file = $board->file()->first();
        return new GalleryFindRes(
            $board->id,
            $board->title,
            $gallery->year,
            $gallery->category,
            $file->id,
            $file->file_path,
            $board->is_published,
            ($main != null),
            $board->created_at,
        );
    }
}
