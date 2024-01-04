<?php

namespace App\Domains\Admin\Performance;

use App\Domains\Admin\PartType\PartType;
use Illuminate\Database\Eloquent\Model;

class Performance extends Model
{
    protected $table = 'performances';
    protected $fillable = [
        'title',
        'date_time',
        'location',
        'visible',
        'parts'
    ];

    public function parts()
    {
        return $this->belongsToMany(PartType::class, 'performance_part_type');
    }

    public function images()
    {
        return $this->hasMany(PerformanceImage::class, 'performance_id');
    }
}
