<?php

namespace App\Domains\Admin\Performance;

use App\Domains\Admin\Part\Part;
use App\Domains\Image\Image;
use Illuminate\Database\Eloquent\Model;

class Performance extends Model
{
    protected $table = 'performances';
    protected $fillable = [
        'title',
        'date_and_time',
        'address',
        'image_id',
        'image_url',
        'hidden',
        'parts'
    ];

    public function parts()
    {
        return $this->belongsToMany(Part::class, 'part_performance');
    }

    public function images()
    {
        return $this->belongsToMany(Image::class, 'performance_image');
    }
}