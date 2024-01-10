<?php

namespace App\Http\Controllers\Web\Admin\Requests;

use App\Domains\Admin\PartType\DTOs\PartTypeDTO;
use Illuminate\Foundation\Http\FormRequest;

class WorkTypeRequest extends FormRequest
{

    public function rules()
    {
        return [
            'name' => 'required|string|unique:work_types|max:50',
        ];
    }

    public function messages()
    {
        return [
            'name' => __('해당 이름은 현재 사용중입니다.'),
        ];
    }

    protected function dataClass(): string
    {
        return PartTypeDTO::class;
    }
}
