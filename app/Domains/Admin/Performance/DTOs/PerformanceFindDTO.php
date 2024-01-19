<?php

namespace App\Domains\Admin\Performance\DTOs;

use Carbon\Carbon;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class PerformanceFindDTO extends Data
{
    public function __construct(
        public int $id,
        public string $title,
        public bool $visible,
        public bool $main_visible,
        public string $location,
        public string $date_time,
        public string $end_date_time,
        /**
         * @var DataCollection|PerformancePartTypesDTO[]
        */
        public DataCollection $part_types,
        /**
         * @var DataCollection|PerformanceWorkTypesDTO[]
        */
        public DataCollection $work_types,
        /**
         * @var DataCollection|PerformanceImageDTO[]
        */
        public DataCollection $images,
    ) {
    }

    public static function fromArray(array $performance): self
    {
        return new self(
            $performance['id'],
            $performance['title'],
            $performance['visible'],
            $performance['main_visible'],
            $performance['location'],
            Carbon::parse($performance['date_time'])->format('Y-m-d H:i:s'),
            Carbon::parse($performance['end_date_time'])->format('Y-m-d H:i:s'),
            PerformancePartTypesDTO::collection($performance['part_types']),
            PerformancePartTypesDTO::collection($performance['work_types']),
            PerformanceImageDTO::collection($performance['images']),
        );
    }
}