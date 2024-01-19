<?php

namespace App\Domains\Admin\Performance\Actions;

use App\Common\DTOs\PaginatedDTO;
use App\Domains\Admin\Performance\DTOs\PerformanceQueryDTO;
use App\Domains\Admin\Performance\Models\Performance;

class PerformanceQueryAction
{
    public function handle(int $perPage = 10, bool $isVisibleChecked = false, bool $isMainVisibleChecked = false): array
    {
        $performances = Performance::query();

        // $isMainVisibleChecked가 ture일 경우 메인 노출 컨텐츠만 불러오는 로직 추가
        if ($isMainVisibleChecked) {
            $performances->where('main_visible', true);
        }

        // $isVisibleChecked가 ture일 경우 노출 컨텐츠만 불러오는 로직 추가
        if ($isVisibleChecked) {
            $performances->where('visible', true);
        }

        // works 파라미터가 전달되면 해당하는 조건을 추가
        if ($worksFilter = request('works')) {
            $works = array_unique(explode(',', $worksFilter));
            $performances->whereHas('work_types', fn($query) => $query->whereIn('name', $works));
        }

        // parts 파라미터가 전달되면 해당하는 조건을 추가
        if ($partsFilter = request('parts')) {
            $parts = array_unique(explode(',', $partsFilter));
            $performances->whereHas('part_types', fn($query) => $query->whereIn('name', $parts));
        }

        // years 파라미터가 전달되면 해당하는 조건을 추가
        if ($yearsFilter = request('years')) {
            $years = array_unique(explode(',', $yearsFilter));
            $performances->where(function ($query) use ($years) {
                foreach ($years as $year) {
                    $query->orWhereYear('date_time', $year);
                }
            });
        }

        // 월별 파라미터가 전달되면 해당하는 조건을 추가
        if ($monthlyFilter = request('monthly')) {
            $months = array_unique(explode(',', $monthlyFilter));
            $performances->where(function ($query) use ($months) {
                foreach ($months as $month) {
                    $query->orWhere(function ($subquery) use ($month) {
                        $subquery->whereMonth('date_time', $month)
                                ->orWhereMonth('end_date_time', $month);
                    });
                }
            });
        }

        $performances = $performances->orderBy('id', 'desc')->paginate($perPage);

        $currentPage = $performances->currentPage();
        $totalItems = $performances->total();
        $perPage = $performances->perPage();

        $performances->each(function ($performance, $key) use ($currentPage, $perPage, $totalItems) {
            $mainImage = $performance->images()->where('main_image', true)->first();
            if ($mainImage) {
                $performance->main_image_url = $mainImage->file_path;
            }
            $performance->images = $performance->images()->get();
            $performance->part_types = $performance['part_types'];
            $performance->work_types = $performance['work_types'];
            $performance->order_sequence = ($totalItems + 1) - ($key + 1) - (($currentPage - 1) * $perPage);
        });

        $dtoData = PaginatedDTO::fromPaginator($performances, PerformanceQueryDTO::class);

        return [
            'performances' => $dtoData
        ];
    }
}
