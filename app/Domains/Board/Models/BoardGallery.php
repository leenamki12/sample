<?php

namespace App\Domains\Board\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BoardGallery extends Model
{
    protected $fillable = [
        "year", "category"
    ];
    public function board(): BelongsTo
    {
        return $this->belongsTo(Board::class);
    }
}
