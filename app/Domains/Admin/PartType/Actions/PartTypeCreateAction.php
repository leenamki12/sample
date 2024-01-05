<?php

namespace App\Domains\Admin\PartType\Actions;

use App\Domains\Admin\PartType\DTOs\PartTypeDTO;
use App\Domains\Admin\PartType\Models\PartType;

class PartTypeCreateAction
{
    public function handle(PartTypeDTO $dto): PartType
    {
        $part = new PartType();
        $part->fill($dto->toArray());

        $part->save();

        return $part;
    }
}
