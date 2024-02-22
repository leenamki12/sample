<?php

namespace App\Domains\Board\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BoardMain extends Model
{
    protected $fillable = ['board_id'];
    public $timestamps = false;
    public function board(): BelongsTo
    {
        return $this->belongsTo(Board::class);
    }
}
