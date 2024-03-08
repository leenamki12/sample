<?php

namespace App\Domains\Board\Actions;

use App\Domains\Board\Requests\DeleteReq;

class MultipleDeleteAction
{
    public function __construct(
        private DeleteAction $action,
    )
    {

    }
    public function handleRequest(DeleteReq $request) {
        $this->handle($request['board_ids']);
    }
    public function handle(array $ids): void
    {
        foreach($ids as $id) {
            $this->action->handle($id);
        }
    }
}
