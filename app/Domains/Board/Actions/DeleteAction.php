<?php

namespace App\Domains\Board\Actions;

use App\Services\File\FileService;

class DeleteAction
{
    public function __construct(
        private FindAction $findAction,
        private FileService $fileService
    )
    {

    }
    public function handle(int $id): void
    {
        $dto = $this->findAction->handle($id);
        $model = $dto->getModel();
        $model->main()->delete();

        foreach($model->file()->get() as $file) {
            $this->fileService->delete($file->file_path);
            $file->delete();
        }

        $model->notice()->delete();
        $model->faq()->delete();
        $model->gallery()->delete();

        $model->delete();
    }
}
