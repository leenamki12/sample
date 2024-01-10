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
        foreach ($ids as $performanceId) {
            // 성능 레코드 삭제
            Performance::destroy($performanceId);
        }
    }
}
