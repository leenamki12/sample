<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name'              => 'required|string|max:20',
            'companiesName'     => 'required|string|max:100',
            'employees'         => 'required|min:1',
            'address'           => 'required|string|max:100',
            'postalCode'        => 'string|max:5',
            'addressDetail'     => 'max:100',
        ];
    }


    public function messages()
    {
        return [
            'name.required' => __('messages.required.name'),
            'companiesName.required' => __('messages.required.companiesName'),
            'employees.required' => __('messages.required.employees'),
            'address.required' => __('messages.required.address'),
        ];
    }
}