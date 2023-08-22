<?php

namespace App\Domains\Company;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'address_detail',
        'postal_code',
        'employees',
        'business_license'
    ];
}