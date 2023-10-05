<?php

namespace App\DTOs\Company;

use App\Domains\Company\CompanyDetail;
use Illuminate\Support\Facades\Storage;
use Spatie\LaravelData\Data;

class CompanyDetailDTO extends Data
{
    public function __construct(
      public int $id,
      public string $address,
      public string $addressDetail,
      public int $employees,
      public string $name,
      public string $postalCode,
      public string $businessLicense
    ) {
    }

    public static function fromCompanyDetail(CompanyDetail $detail): self
    {
        return new self(
          $detail->id,
          $detail->address,
          $detail->address_detail,
          $detail->employees,
          $detail->name,
          $detail->postal_code,
          Storage::url($detail->business_license),
        );
    }
}