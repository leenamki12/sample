<?php

namespace App\Domains\Board\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GalleryQueryReq extends FormRequest
{

    public function filters(): array
    {
        return [
            'startDate' => 'date',
            'endDate' => 'date',
            'is_published' => 'boolean',
            'is_main_published' => 'boolean',
            'title' => 'string',
        ];
    }
}
