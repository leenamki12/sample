<?php

namespace App\Domains\Admin\Performance\Actions;

use App\Domains\Admin\PartType\Models\PartType;
use App\Domains\Admin\Performance\DTOs\PerformancePartTypesDTO;
use App\Domains\Admin\Performance\DTOs\PerformanceWorkTypesDTO;
use App\Domains\Admin\WorkType\Models\WorkType;

class PerformanceCreateAction
{
    public function handle(): array
    {
        $partTypes = PartType::orderBy('id', 'asc')->get();

        $dtoPartTypes =  PerformancePartTypesDTO::collection($partTypes);

        $workTypes = WorkType::orderBy('id', 'asc')->get();

        $dtoWorkTypes =  PerformanceWorkTypesDTO::collection($workTypes);

        return [
          'categories' => ['part_types' => $dtoPartTypes, 'work_types' => $dtoWorkTypes]
        ];
    }
}