<?php

namespace App\Domains\Admin\Performance\Models;

use App\Domains\Admin\PartType\Models\PartType;
use App\Domains\Admin\WorkType\Models\WorkType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

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

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($performance) {
            // 성능과 연관된 이미지 파일 삭제
            foreach ($performance->images as $image) {
                $filePath = $image->file_path;

                // 이미지 파일을 storage에서 삭제
                if (Storage::disk('public')->exists($filePath)) {
                    Storage::disk('public')->delete($filePath);
                }

                // 이미지 레코드를 데이터베이스에서 삭제
                $image->delete();
            }
        });
    }
}
