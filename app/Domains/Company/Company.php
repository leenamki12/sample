<?php

namespace App\Domains\Company;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'detail_id',
        'approval_status',
        'auth_code'
    ];
}
