<?php

namespace App\Domains\Admin\PartType\Models;

use App\Domains\Admin\Performance\Performance;
use Illuminate\Database\Eloquent\Model;

class PartType extends Model
{
    protected $table = 'part_types';
    protected $fillable = [
        'name',
        'now_num',
        'item_count'
    ];

    public function performances()
    {
        return $this->belongsToMany(Performance::class, 'performance_part_type');
    }
}
