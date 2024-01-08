<?php

namespace App\Domains\Admin\PartType\Actions;

use App\Domains\Admin\PartType\DTOs\PartTypeDTO;
use App\Domains\Admin\PartType\Models\PartType;
use App\Http\Controllers\Web\Admin\Requests\PartTypeRequest;

class PartTypeStoreAction
{
    public function handle(PartTypeRequest $request): PartType
    {
        $dto = PartTypeDTO::from($request);

        $part = PartType::create($dto->toArray());

        return $part;
    }
}