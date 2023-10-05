<?php

namespace App\Domains\User;

use App\Domains\Company\Company;
use App\DTOs\Company\CompanyDTO;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'marketing_consent'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'phone',
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function getAuthCompany()
    {

        return Auth::guard('company')->check();
    }

    public function company()
    {
        return $this->hasOne(Company::class);
    }

    public function getCompany()
    {
        $company = $this->company;

        return CompanyDTO::fromCompany($company);
    }

    public function getCompanyDetail()
    {
        $company = $this->company;

        return $company->companyDetail;
    }
}