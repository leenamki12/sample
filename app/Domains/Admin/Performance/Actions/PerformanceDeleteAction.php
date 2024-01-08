<?php

namespace App\Domains\Admin\Performance\Actions;

use App\Domains\Admin\Performance\Models\Performance;

class PerformanceDeleteAction
{
    /**
     * @param int[] $ids
     */
    public function handle(array $ids)
    {
        Performance::destroy($ids);
    }
}