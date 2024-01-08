<?php

namespace App\Domains\Admin\PartType\Actions;

use App\Common\DTOs\PaginatedDTO;
use App\Domains\Admin\PartType\DTOs\PartTypeQueryDTO;
use App\Domains\Admin\PartType\Models\PartType;

class PartTypeQueryAction
{
    public function handle()
    {
        $partTypes = PartType::withCount('performances')
            ->orderBy('id', 'desc')
            ->paginate(24);

        $currentPage = $partTypes->currentPage();
        $totalItems = $partTypes->total();
        $perPage = $partTypes->perPage();

        $partTypes->each(function ($partType, $key) use ($currentPage, $perPage, $totalItems) {
            $partType->order_sequence = ($totalItems + 1) - ($key + 1) - (($currentPage - 1) * $perPage);
        });

        $dtoData = PaginatedDTO::fromPaginator($partTypes, PartTypeQueryDTO::class);

        return [
            'adminPartTypes' => $dtoData
        ];
    }
}