<?php

namespace App\Domains\Board\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BoardFaq extends Model
{
    protected $fillable = [
        "category",
        "content",
    ];
    public function board(): BelongsTo
    {
        return $this->belongsTo(Board::class);
    }
}
