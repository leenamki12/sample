<?php

namespace App\Domains\Board\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NoticeQueryReq extends FormRequest
{
    public function rules()
    {
        return [
            'start_date' => 'string',
            'end_date' => 'string',
            'title' => 'string|max:100',
            'is_published' => 'boolean',
            'is_main_published' => 'boolean',
        ];
    }
}
