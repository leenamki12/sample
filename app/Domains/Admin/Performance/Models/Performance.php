<?php

namespace App\Domains\Admin\Performance\Models;

use App\Domains\Admin\PartType\Models\PartType;
use App\Domains\Admin\WorkType\Models\WorkType;
use Illuminate\Database\Eloquent\Model;

class Performance extends Model
{
    protected $table = 'performances';
    protected $fillable = [
        'title',
        'date_time',
        'location',
        'visible',
    ];

    public function part_types()
    {
        return $this->belongsToMany(PartType::class, 'performance_part_type');
    }

    public function work_types()
    {
        return $this->belongsToMany(WorkType::class, 'performance_work_type');
    }

    public function images()
    {
        return $this->hasMany(PerformanceImage::class, 'performance_id');
    }
}
