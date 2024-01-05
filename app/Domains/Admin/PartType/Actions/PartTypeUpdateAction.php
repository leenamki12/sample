<?php

namespace App\Domains\Admin\PartType\Actions;

use App\Domains\Admin\PartType\DTOs\PartTypeUpdateDTO;
use App\Domains\Admin\PartType\Models\PartType;

class PartTypeUpdateAction
{
    public function handle(PartTypeUpdateDTO $dto, int $id): PartType
    {

        $part = PartType::find($id);

        $part->update($dto->toArray());

        return $part;
    }
}