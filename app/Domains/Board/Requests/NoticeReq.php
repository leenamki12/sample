<?php

namespace App\Domains\Board\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NoticeReq extends FormRequest
{
    public function rules()
    {
        return [
            'type' => 'required|string',
            'title' => 'required|string|max:100',
            'content' => 'required|string',
            'is_published' => 'required|boolean',
            'is_main_published' => 'required|boolean',
            'file_ids' => 'nullable|array',
        ];
    }
}
