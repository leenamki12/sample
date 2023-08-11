<?php

namespace App\Domains\Auth;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserVerifys extends Model
{
    use HasFactory;

    protected $fillable = [
        'phone',
        'code',
        'status',
    ];
}