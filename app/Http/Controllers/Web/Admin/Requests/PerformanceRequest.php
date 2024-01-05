<?php

namespace App\Http\Controllers\Web\Admin\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PerformanceRequest extends FormRequest
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
            'parts' => 'array',
            'parts.*' => 'exists:part_types,id', // 예: parts 테이블의 id와 연결된지 확인
            'fileItems' => 'array',
            'fileItems.file' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // 예: 이미지 파일만 허용
            'parts_required' => 'required_without_all:parts',
            'files_required' => 'required_without_all:files',
        ];
    }

    public function messages()
    {
        return [
            'parts.*.exists' => '부적절한 부분이 포함되어 있습니다.',
            'fileItems.file.image' => '이미지 파일이 아닙니다.',
            'fileItems.file.mimes' => '지원하지 않는 이미지 형식입니다.',
            'fileItems.file.max' => '이미지 파일은 2MB를 초과할 수 없습니다.',
            'parts_required.required_without_all' => 'Part는 최소 1개를 선택해야합니다.',
            'files_required.required_without_all' => '이미지 최소 1개를 업로드해야합니다.',
        ];
    }
}
