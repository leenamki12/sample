<?php

namespace App\Domains\Admin\Performance\Actions;

use App\Common\DTOs\PaginatedDTO;
use App\Domains\Admin\Performance\DTOs\PerformanceQueryDTO;
use App\Domains\Admin\Performance\Performance;

class PerformanceQueryAction
{
    public function handle(): array
    {
        $performances = Performance::orderBy('id', 'desc')->paginate(10);

        $currentPage = $performances->currentPage();
        $totalItems = $performances->total();
        $perPage = $performances->perPage();

        $performances->each(function ($performance, $key) use ($currentPage, $perPage, $totalItems) {
            $mainImage = $performance->images()->where('main_image', true)->first();
            if ($mainImage) {
                $performance->main_image_url = $mainImage->file_path;
            }
            $performance->part_types = $performance['part_types'];
            $performance->order_sequence = ($totalItems + 1) - ($key + 1) - (($currentPage - 1) * $perPage);
        });

        $dtoData = PaginatedDTO::fromPaginator($performances, PerformanceQueryDTO::class);

        return [
            'performances' => $dtoData
        ];
    }
}
