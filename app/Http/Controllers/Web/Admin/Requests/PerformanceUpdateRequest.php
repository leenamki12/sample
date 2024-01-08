<?php

namespace App\Http\Controllers\Web\Admin\Requests;

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
            'date_time' => 'required|date',
            'location' => 'required|string',
            'visible' => 'boolean',
            'part_type_ids' => 'array',
            'part_type_ids.*' => 'exists:part_types,id', // 예: parts 테이블의 id와 연결된지 확인
            'file_items' => 'array',
            'part_type_ids_required' => 'required_without_all:part_type_ids',
        ];
    }

    public function messages()
    {
        return [
            'part_type_ids.*.exists' => '부적절한 부분이 포함되어 있습니다.',
            'part_type_ids_required.required_without_all' => 'Part는 최소 1개를 선택해야합니다.',
        ];
    }
}