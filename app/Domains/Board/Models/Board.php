<?php

namespace App\Domains\Board\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Board extends Model
{
    protected $fillable = [
        "type",
        "title",
        "is_published",
    ];

    public function main(): HasOne
    {
        return $this->hasOne(BoardMain::class);
    }

    public function file(): HasMany
    {
        return $this->hasMany(BoardFile::class);
    }

    public function notice(): HasOne
    {
        return $this->hasOne(BoardNotice::class);
    }

    public function faq(): HasOne
    {
        return $this->hasOne(BoardFaq::class);
    }

    public function gallery(): HasOne
    {
        return $this->hasOne(BoardGallery::class);
    }
}
