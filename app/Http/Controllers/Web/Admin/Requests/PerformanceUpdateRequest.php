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
            'file_items' => 'array',
            'part_type_ids' => 'array',
            'part_type_ids.*' => 'exists:part_types,id', // 예: parts 테이블의 id와 연결된지 확인
            'part_type_ids' => 'required_without_all:part_type_ids',
            'work_type_ids' => 'array',
            'work_type_ids.*' => 'exists:work_types,id', // 예: works 테이블의 id와 연결된지 확인
            'work_type_ids' => 'required_without_all:work_type_ids',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => '제목을 입력해주세요.',
            'date_time.required' => '날짜 및 시간을 입력해주세요.',
            'location.required' => '장소를 입력해주세요.',
            'part_type_ids.*.exists' => '부적절한 부분이 포함되어 있습니다.',
            'part_type_ids.required_without_all' => 'Part는 최소 1개를 선택해야합니다.',
            'work_type_ids.*.exists' => '부적절한 부분이 포함되어 있습니다.',
            'work_type_ids.required_without_all' => 'Work는 최소 1개를 선택해야합니다.',
        ];
    }
}
