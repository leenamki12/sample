<?php

namespace App\Domains\Admin\Performance\Models;

use Illuminate\Database\Eloquent\Model;

class PerformanceImage extends Model
{
    protected $table = 'performance_image';
    protected $fillable = ['performance_id', 'file_path', 'order_sequence', 'main_image'];
}