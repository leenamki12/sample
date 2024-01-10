<?php

namespace App\Domains\Admin\WorkType\DTOs;

use Carbon\Carbon;
use Spatie\LaravelData\Data;


class WorkTypeQueryDTO extends Data
{
    public int $id;
    public string $name;
    public int $order_sequence;
    public int $performance_count;
    public Carbon $created_at;
    public Carbon $updated_at;

    public function __construct(array $workType) {
        $this->id = $workType['id'];
        $this->name = $workType['name'];
        $this->order_sequence = $workType['order_sequence'];
        $this->performance_count = $workType['performances_count'];
        $this->created_at = Carbon::parse($workType['created_at']);
        $this->updated_at = Carbon::parse($workType['updated_at']);
    }
}