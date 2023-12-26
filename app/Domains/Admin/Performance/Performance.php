<?php

namespace App\Domains\Admin\Performance;

use App\Domains\Admin\Part\Part;
use Illuminate\Database\Eloquent\Model;

class Performance extends Model
{
    protected $table = 'performances';
    protected $fillable = [
        'title',
        'date_and_time',
        'address',
        'image_id',
        'hidden',
        'parts'
    ];

    public function parts()
    {
        return $this->belongsToMany(Part::class, 'part_performance');
    }
}