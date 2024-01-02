<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PerformanceUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title' => 'required|string',
            'date_and_time' => 'required|date',
            'address' => 'required|string',
            'hidden' => 'boolean',
            'parts' => 'array',
            'parts.*' => 'exists:parts,id', // 예: parts 테이블의 id와 연결된지 확인
            'files' => 'array',
            'parts_required' => 'required_without_all:parts',
        ];
    }

    public function messages()
    {
        return [
            'parts.*.exists' => '부적절한 부분이 포함되어 있습니다.',
            'parts_required.required_without_all' => 'Part는 최소 1개를 선택해야합니다.',
        ];
    }
}
