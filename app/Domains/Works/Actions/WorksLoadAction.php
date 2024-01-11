<?php

namespace App\Domains\Works\Actions;

use App\Domains\Admin\Performance\Actions\PerformanceQueryAction;
use Illuminate\Http\JsonResponse;

class WorksLoadAction
{

    private $performanceAction;

    public function __construct(PerformanceQueryAction $performanceAction) {
        $this->performanceAction = $performanceAction;
    }

    public function handle(int $perPage): JsonResponse
    {
        $arrayData = $this->performanceAction->handle($perPage, true);

        return response()->json($arrayData);
    }
}