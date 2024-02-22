<?php

namespace App\Domains\Board\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BoardNotice extends Model
{
    protected $fillable = [
        "content",
    ];
    public function board(): BelongsTo
    {
        return $this->belongsTo(Board::class);
    }
}
