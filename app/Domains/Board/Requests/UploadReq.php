<?php

namespace App\Domains\Board\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadReq extends FormRequest
{
    public function rules()
    {
        return [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:5120',
        ];
    }
}
