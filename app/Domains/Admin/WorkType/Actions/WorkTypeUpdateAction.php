<?php

namespace App\Domains\Admin\WorkType\Actions;

use App\Domains\Admin\WorkType\DTOs\WorkTypeUpdateDTO;
use App\Domains\Admin\WorkType\Models\WorkType;
use App\Http\Controllers\Web\Admin\Requests\WorkTypeRequest;

class WorkTypeUpdateAction
{
    public function handle(WorkTypeRequest $request, int $id): WorkType
    {
        $dto = WorkTypeUpdateDTO::from($request);
        $part = WorkType::find($id);

        $part->update($dto->toArray());

        return $part;
    }
}