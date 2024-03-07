<?php

namespace App\Domains\Board\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeleteReq extends FormRequest
{
    public function rules()
    {
        return [
            'board_ids' => 'required|array',
        ];
    }
}
