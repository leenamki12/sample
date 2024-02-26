<?php

namespace App\Domains\Board\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GalleryReq extends FormRequest
{
    public function rules()
    {
        return [
            'type' => 'required|string',
            'title' => 'required|string|max:100',
            'year' => 'required|integer',
            'is_published' => 'required|boolean',
            'is_main_published' => 'required|boolean',
            'file_id' => 'nullable|integer',
        ];
    }
}
