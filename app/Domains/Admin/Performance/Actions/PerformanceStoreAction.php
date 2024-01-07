<?php

namespace App\Domains\Admin\Performance\Actions;

use App\Common\DTOs\PaginatedDTO;
use App\Domains\Admin\Performance\DTOs\PerformanceQueryDTO;
use App\Domains\Admin\Performance\DTOs\PerformanceStoreDTO;
use App\Domains\Admin\Performance\Performance;

class PerformanceStoreAction
{
    public function handle(PerformanceStoreDTO $dto)
    {
        // 공연 정보 저장
        $performance = Performance::create([
            'title' => $dto->title,
            'date_time'=> $dto->dateTime,
            'location'=> $dto->location,
            'visible'=> $dto->visible,
        ]);

        return $performance;
    }
}