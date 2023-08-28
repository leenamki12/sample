<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use App\Domains\User\User;

class RegisterRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'email'             => 'required|string|email|max:255|unique:'.User::class,
            'password'          => ['required', 'confirmed', 'string', 'min:8', 'regex:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/'],
            'name'              => 'required|string|max:20',
            'phone'             => 'required|string|max:16',
            'companiesName'     => 'required|string|max:100',
            'employees'         => 'required|min:1',
            'address'           => 'required|string|max:100',
            'postalCode'        => 'string|max:5',
            'addressDetail'     => 'max:100',
            'businessLicense'   => 'required|image|mimes:jpeg,png|max:2048',
            'marketing_consent' => 'boolean'
        ];
    }

    public function messages()
    {
        return [
            'email.required' => __('messages.required.email'),
            'name.required' => __('messages.required.name'),
            'phone.required' => __('messages.required.phone'),
            'companiesName.required' => __('messages.required.companiesName'),
            'employees.required' => __('messages.required.employees'),
            'address.required' => __('messages.required.address'),
            'businessLicense.required' => __('messages.required.businessLicense'),
            'password.required' => __('messages.required.password'),
            'password.regex' => __('messages.password.regex'),
            'password.min' => __('messages.password.min'),
            'password.confirmed' => __('messages.password.confirmed'),
        ];
    }
}