<?php

namespace App\Domains\Admin\Part;

use App\Domains\Admin\Performance\Performance;
use Illuminate\Database\Eloquent\Model;

class Part extends Model
{
    protected $table = 'parts';
    protected $fillable = [
        'name',
        'now_num',
        'item_count'
    ];

    public function performances()
    {
        return $this->belongsToMany(Performance::class, 'part_performance');
    }
}