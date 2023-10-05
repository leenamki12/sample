<?php

namespace App\Domains\Company;

use App\Domains\User\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Company extends Authenticatable
{
    use HasFactory;

    protected $guard = 'company';

    protected $fillable = [
        'user_id',
        'detail_id',
        'approval_status',
        'auth_code'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function detail()
    {
        return $this->hasOne(CompanyDetail::class, 'id', 'detail_id');
    }
}