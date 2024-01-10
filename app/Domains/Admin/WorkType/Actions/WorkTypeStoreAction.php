<?php

namespace App\Domains\Admin\WorkType\Actions;

use App\Domains\Admin\WorkType\DTOs\WorkTypeDTO;
use App\Domains\Admin\WorkType\Models\WorkType;
use App\Http\Controllers\Web\Admin\Requests\WorkTypeRequest;

class WorkTypeStoreAction
{
    public function handle(WorkTypeRequest $request): WorkType
    {
        $dto = WorkTypeDTO::from($request);

        $part = WorkType::create($dto->toArray());

        return $part;
    }
}