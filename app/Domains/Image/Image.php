<?php

namespace App\Domains\Image;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{

    protected $fillable = ['file_path', 'row_number'];
}