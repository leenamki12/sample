<?php

namespace App\Domains\Admin\Performance\Actions;

use App\Domains\Admin\PartType\Models\PartType;
use App\Domains\Admin\Performance\DTOs\PerformancePartTypesDTO;

class PerformanceCreateAction
{
    public function handle(): array
    {
        $partTypes = PartType::orderBy('id', 'asc')->get();

        $dtoPartTypes =  PerformancePartTypesDTO::collection($partTypes);

        return [
          'categories' => ['part_types' => $dtoPartTypes]
        ];
    }
}