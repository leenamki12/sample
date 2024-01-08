<?php

namespace App\Domains\Admin\PartType\Actions;

use App\Domains\Admin\PartType\Models\PartType;

class PartTypeDeleteAction
{
    public function handle(int $id): PartType
    {
        $part = PartType::find($id);

        $part->delete();

        return $part;
    }
}