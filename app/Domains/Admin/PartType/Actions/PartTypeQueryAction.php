<?php

namespace App\Domains\Admin\PartType\Actions;

use App\Domains\Admin\PartType\Models\PartType;
use Illuminate\Support\Facades\Log;

class PartTypeQueryAction
{
    public function handle()
    {
        $parts = PartType::orderBy('id', 'desc')->paginate(24);
        $parts->each(function ($part, $key) use ($parts) {
            $newPart = $part::withCount('performances')->find($part->id);
            $part->use_count = $newPart->performances_count;
            $part->row_number = ($parts->total() + 1) - ($key + 1) - (($parts->currentPage() - 1) * $parts->perPage());
        });

        return $parts;
    }
}
