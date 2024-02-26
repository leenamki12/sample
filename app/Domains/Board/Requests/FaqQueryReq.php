<?php

namespace App\Domains\Board\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FaqQueryReq extends FormRequest
{

    public function filters(): array
    {
        return [
            'startDate' => 'date',
            'endDate' => 'date',
            'category' => 'string',
            'is_published' => 'boolean',
            'is_main_published' => 'boolean',
            'title' => 'string',
        ];
    }
}
