<?php

namespace App\Domains\Image;

use App\Domains\Admin\Performance\Performance;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = ['file_path'];

    // Image 모델과 Performance 모델 간의 다대다 관계
    public function performances()
    {
        return $this->belongsToMany(Performance::class);
    }
}