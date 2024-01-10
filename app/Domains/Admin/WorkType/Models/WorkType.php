<?php

namespace App\Domains\Admin\WorkType\Models;

use App\Domains\Admin\Performance\Models\Performance;
use Illuminate\Database\Eloquent\Model;

class WorkType extends Model
{
    protected $table = 'work_types';
    protected $fillable = [
        'name',
    ];

    public function performances()
    {
        return $this->belongsToMany(Performance::class, 'performance_work_type');
    }
}