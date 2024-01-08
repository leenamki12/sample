<?php

namespace App\Domains\Admin\Performance\DTOs;

use App\Domains\Admin\Performance\Models\PerformanceImage;
use Carbon\Carbon;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class PerformanceShowDTO extends Data
{
    public function __construct(
        public int $id,
        public string $title,
        public bool $visible,
        public string $location,
        public string $date_time,
        /**
         * @var DataCollection|PerformancePartTypesDTO[]
        */
        public DataCollection $part_types,
        /**
         * @var DataCollection|PerformanceImageDTO[]
        */
        public DataCollection $images,
    ) {
    }

    public static function fromPerformance(array $performance): self
    {
        return new self(
            $performance['id'],
            $performance['title'],
            $performance['visible'],
            $performance['location'],
            Carbon::parse($performance['date_time'])->format('Y-m-d H:i:s'),
            PerformancePartTypesDTO::collection($performance['part_types']),
            PerformanceImageDTO::collection($performance['images']),
        );
    }
}