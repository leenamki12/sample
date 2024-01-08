<?php

namespace App\Domains\Admin\PartType\Actions;

use App\Domains\Admin\PartType\DTOs\PartTypeUpdateDTO;
use App\Domains\Admin\PartType\Models\PartType;
use App\Http\Controllers\Web\Admin\Requests\PartTypeRequest;

class PartTypeUpdateAction
{
    public function handle(PartTypeRequest $request, int $id): PartType
    {
        $dto = PartTypeUpdateDTO::from($request);
        $part = PartType::find($id);

        $part->update($dto->toArray());

        return $part;
    }
}