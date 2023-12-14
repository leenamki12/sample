<?php

namespace App\Domains\Admin\Performance;

use Illuminate\Database\Eloquent\Model;

class Performance extends Model
{
    protected $table = 'performances';
    protected $fillable = [
        'title',
        'date_and_time',
        'address',
        'image_id',
        'hidden'
    ];
}