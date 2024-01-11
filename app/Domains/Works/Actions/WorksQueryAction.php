<?php

namespace App\Domains\Works\Actions;

use App\Domains\Admin\PartType\Models\PartType;
use App\Domains\Admin\Performance\Actions\PerformanceQueryAction;
use App\Domains\Admin\Performance\DTOs\PerformancePartTypesDTO;
use App\Domains\Admin\Performance\DTOs\PerformanceWorkTypesDTO;
use App\Domains\Admin\WorkType\Models\WorkType;

class WorksQueryAction
{

    private $performanceAction;

    public function __construct(PerformanceQueryAction $performanceAction) {
        $this->performanceAction = $performanceAction;
    }

    public function handle(int $perPage): array
    {
        $arrayData = $this->performanceAction->handle($perPage, true);

        $partTypes = PartType::orderBy('id', 'asc')->get();
        $dtoPartTypes =  PerformancePartTypesDTO::collection($partTypes);

        $workTypes = WorkType::orderBy('id', 'asc')->get();
        $dtoWorkTypes =  PerformanceWorkTypesDTO::collection($workTypes);

        return [
            'performances' => $arrayData['performances'],
            'partTypes' => $dtoPartTypes,
            'workTypes' => $dtoWorkTypes
        ];
    }
}