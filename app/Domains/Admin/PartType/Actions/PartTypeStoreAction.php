<?php

namespace App\Domains\Admin\PartType\Actions;

use App\Domains\Admin\PartType\DTOs\PartTypeDTO;
use App\Domains\Admin\PartType\Models\PartType;

class PartTypeStoreAction
{
    public function handle(PartTypeDTO $dto): PartType
    {
        $part = PartType::create($dto->toArray());

        return $part;
    }
}