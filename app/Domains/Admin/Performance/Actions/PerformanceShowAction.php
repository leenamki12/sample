<?php

namespace App\Domains\Admin\Performance\Actions;

use App\Domains\Admin\PartType\Models\PartType;
use App\Domains\Admin\Performance\DTOs\PerformancePartTypesDTO;
use App\Domains\Admin\Performance\DTOs\PerformanceShowDTO;
use App\Domains\Admin\Performance\Performance;

class PerformanceShowAction
{
    public function handle(int $id): array
    {
        $performance = Performance::with(['part_types', 'images' => function ($query) {
            $query->orderBy('order_sequence', 'asc');
        }])->findOrFail($id);

        $dtoPerformance = PerformanceShowDTO::fromPerformance($performance->toArray());


        $partTypes = PartType::orderBy('id', 'asc')->get();
        $dtoPartTypes =  PerformancePartTypesDTO::collection($partTypes);

        return [
          'performance' => $dtoPerformance,
          'categories' => ['part_types' => $dtoPartTypes]
        ];
    }
}
