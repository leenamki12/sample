<?php

namespace App\Domains\Admin\PartType\DTOs;

use Carbon\Carbon;
use Spatie\LaravelData\Data;


class PartTypeQueryDTO extends Data
{
    public int $id;
    public string $name;
    public int $order_sequence;
    public int $performance_count;
    public Carbon $created_at;
    public Carbon $updated_at;

    public function __construct(array $partType) {
        $this->id = $partType['id'];
        $this->name = $partType['name'];
        $this->order_sequence = $partType['order_sequence'];
        $this->performance_count = $partType['performances_count'];
        $this->created_at = Carbon::parse($partType['created_at']);
        $this->updated_at = Carbon::parse($partType['updated_at']);
    }
}