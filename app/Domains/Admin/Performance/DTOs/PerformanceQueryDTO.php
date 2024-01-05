<?php

namespace App\Domains\Admin\Performance\DTOs;

use Carbon\Carbon;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class PerformanceQueryDTO extends Data
{
    public int $id;
    public string $title;
    public int $orderSequence;
    /**
     * @var DataCollection|PerformancePartTypesDTO[]
    */
    public DataCollection $partTypes;
    public Carbon $dateTime;
    public string $location;
    public string $mainImageUrl;
    public Carbon $createdAt;
    public bool $visible;

    public function __construct($performance) {
        $this->id = $performance['id'];
        $this->title = $performance['title'];
        $this->orderSequence = $performance['order_sequence'];
        $this->dateTime = Carbon::parse($performance['date_time']);
        $this->location = $performance['location'];
        $this->mainImageUrl = $performance['main_image_url'];
        $this->partTypes = PerformancePartTypesDTO::collection($performance['partTypes']);
        $this->visible = (bool) $performance['visible'];
        $this->createdAt = Carbon::parse($performance['created_at']);
    }
}