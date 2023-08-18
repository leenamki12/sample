<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class VerifyPhoneRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'phone' => ['required', 'string', 'min:11', 'max:11'],
        ];
    }

    public function messages()
    {
        return [
            'phone.min' => __('messages.verify.min'),
            'phone.max' => __('messages.verify.max')
        ];
    }
}