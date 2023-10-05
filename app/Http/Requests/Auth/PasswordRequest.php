<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class PasswordRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'current_password' => ['required', 'current_password'],
            'password' => ['required', Password::defaults(), 'confirmed', 'string', 'min:8', 'regex:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/'],

        ];
    }

    public function messages()
    {
        return [
            'current_password' => '비밀번호를 다시 확인해주세요.',
            'current_password.required' => '현재 '.__('messages.required.password'),
            'password.required' => '새로운 '.__('messages.required.password'),
            'password.regex' => __('messages.password.regex'),
            'password.min' => __('messages.password.min'),
            'password.confirmed' => __('messages.password.confirmed'),
        ];
    }
}
