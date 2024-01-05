<?php

namespace App\Domains\Admin\PartType\Actions;

use App\Domains\Admin\PartType\Models\PartType;

class PartTypeDeleteAction
{
    public function handle(int $partId): PartType
    {
        $part = PartType::find($partId);

        $part->delete();

        return $part;
    }
}
