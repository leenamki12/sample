<?php

namespace App\Domains\Board\Actions;

class DeleteAction
{
    public function __construct(
        private FindAction $findAction
    )
    {

    }
    public function handle(int $id): void
    {
        $dto = $this->findAction->handle($id);
        $model = $dto->getModel();
        $model->main()->delete();
        // file delete action
        $model->notice()->delete();
        $model->faq()->delete();
        $model->gallery()->delete();
        $model->delete();
    }
}
