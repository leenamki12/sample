<?php

namespace App\Domains\Admin\WorkType\Actions;

use App\Domains\Admin\WorkType\Models\WorkType;

class WorkTypeDeleteAction
{
    public function handle(int $id): WorkType
    {
        $part = WorkType::find($id);

        $part->delete();

        return $part;
    }
}