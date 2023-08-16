<?php

namespace App\Domains\Hospital;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'hospital_id',
        'company_name',
        'reservation_date',
        'name',
        'phone',
    ];
}
