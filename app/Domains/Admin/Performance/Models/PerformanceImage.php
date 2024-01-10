<?php

namespace App\Domains\Admin\Performance\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class PerformanceImage extends Model
{
    protected $table = 'performance_image';
    protected $fillable = ['performance_id', 'file_path', 'order_sequence', 'main_image'];

     protected static function boot()
    {
        parent::boot();

        static::deleting(function ($image) {
            // 이미지 파일을 storage에서 삭제
            $filePath = $image->file_path;
            if (Storage::disk('public')->exists($filePath)) {
                Storage::disk('public')->delete($filePath);
            }
        });
    }
}