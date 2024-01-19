<?php

namespace App\Domains\Admin\Performance\DTOs;

use Carbon\Carbon;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class PerformanceQueryDTO extends Data
{

    public int $id;
    public string $title;
    public int $order_sequence;
    /**
     * @var DataCollection|PerformancePartTypesDTO[]
    */
    public DataCollection $part_types;
    /**
     * @var DataCollection|PerformanceWorkTypesDTO[]
    */
    public DataCollection $work_types;
    /**
     * @var DataCollection|PerformanceImageDTO[]
    */
    public DataCollection $images;
    public string $date_time;
    public string $location;
    public string $main_image_url;
    public string $created_at;
    public bool $visible;
    public bool $main_visible;
    public string $end_date_time;

    public function __construct(array $performance) {
        $this->id = $performance['id'];
        $this->title = $performance['title'];
        $this->order_sequence = $performance['order_sequence'];
        $this->location = $performance['location'];
        $this->main_image_url = $performance['main_image_url'];
        $this->visible = (bool) $performance['visible'];
        $this->main_visible = (bool) $performance['main_visible'];
        $this->images = PerformanceImageDTO::collection($performance['images']);
        $this->part_types = PerformancePartTypesDTO::collection($performance['part_types']);
        $this->work_types = PerformanceWorkTypesDTO::collection($performance['work_types']);
        $this->date_time = Carbon::parse($performance['date_time'])->format('Y-m-d H:i:s');
        $this->end_date_time = Carbon::parse($performance['end_date_time'])->format('Y-m-d H:i:s');
        $this->created_at = Carbon::parse($performance['created_at'])->format('Y-m-d H:i:s');
    }
}
