<?php

namespace App\Domains\Admin\Performance\DTOs;

use App\Domains\Admin\Performance\Models\Performance;
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
    public string $date_time;
    public string $location;
    public string $main_image_url;
    public string $created_at;
    public bool $visible;

    public function __construct(array $performance) {
        $this->id = $performance['id'];
        $this->title = $performance['title'];
        $this->order_sequence = $performance['order_sequence'];
        $this->location = $performance['location'];
        $this->main_image_url = $performance['main_image_url'];
        $this->visible = (bool) $performance['visible'];
        $this->part_types = PerformancePartTypesDTO::collection($performance['part_types']);
        $this->date_time = Carbon::parse($performance['date_time'])->format('Y-m-d H:i:s');
        $this->created_at = Carbon::parse($performance['created_at'])->format('Y-m-d H:i:s');
    }
}
