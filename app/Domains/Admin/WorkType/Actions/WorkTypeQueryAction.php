<?php

namespace App\Domains\Admin\WorkType\Actions;

use App\Common\DTOs\PaginatedDTO;
use App\Domains\Admin\WorkType\DTOs\WorkTypeQueryDTO;
use App\Domains\Admin\WorkType\Models\WorkType;

class WorkTypeQueryAction
{
    public function handle()
    {
        $partTypes = WorkType::withCount('performances')
            ->orderBy('id', 'desc')
            ->paginate(24);

        $currentPage = $partTypes->currentPage();
        $totalItems = $partTypes->total();
        $perPage = $partTypes->perPage();

        $partTypes->each(function ($partType, $key) use ($currentPage, $perPage, $totalItems) {
            $partType->order_sequence = ($totalItems + 1) - ($key + 1) - (($currentPage - 1) * $perPage);
        });

        $dtoData = PaginatedDTO::fromPaginator($partTypes, WorkTypeQueryDTO::class);

        return [
            'adminPartTypes' => $dtoData
        ];
    }
}
