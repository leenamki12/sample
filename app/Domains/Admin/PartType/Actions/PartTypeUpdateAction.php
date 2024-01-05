<?php

namespace App\Domains\Admin\PartType\Actions;

use App\Domains\Admin\PartType\DTOs\PartTypeUpdateDTO;
use App\Domains\Admin\PartType\Models\PartType;

class PartTypeUpdateAction
{
    public function handle(PartTypeUpdateDTO $dto): PartType
    {

        $part = PartType::find($dto->id);

        $part->fill($dto->toArray());

        $part->save();

        return $part;
    }
}
