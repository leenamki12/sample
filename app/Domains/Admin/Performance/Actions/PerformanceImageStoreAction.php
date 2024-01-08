<?php

namespace App\Domains\Admin\Performance\Actions;

use App\Domains\Admin\Performance\DTOs\PerformanceImageDTO;
use App\Domains\Admin\Performance\Models\PerformanceImage;

class PerformanceImageStoreAction
{
    /**
     * @param PerformanceImageDTO $dto
     */    public function handle(PerformanceImageDTO $dto)
    {
        // 이미지 저장
        $performance = PerformanceImage::create($dto->toArray());

        return $performance;
    }
}