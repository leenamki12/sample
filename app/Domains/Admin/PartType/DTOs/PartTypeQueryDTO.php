<?php

namespace App\Domains\Admin\PartType\DTOs;

use Carbon\Carbon;
use Spatie\LaravelData\Data;


class PartTypeQueryDTO extends Data
{
    public int $id;
    public string $name;
    public int $orderSequence;
    public int $performanceCount;
    public Carbon $createdAt;
    public Carbon $updatedAt;

    public function __construct($partType) {
        $this->id = $partType['id'];
        $this->name = $partType['name'];
        $this->orderSequence = $partType['order_sequence'];
        $this->performanceCount = $partType['performances_count'];
        $this->createdAt = Carbon::parse($partType['created_at']);
        $this->updatedAt = Carbon::parse($partType['updated_at']);
    }
}