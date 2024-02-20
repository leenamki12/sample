<?php

namespace App\Domains\Board\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BoardFile extends Model
{
    protected $fillable = [
        "file_path",
    ];
    public function board(): BelongsTo
    {
        return $this->belongsTo(Board::class);
    }
}
