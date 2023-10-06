<?php

namespace App\Http\Requests\Hospital;

use Illuminate\Foundation\Http\FormRequest;

class ReservationRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'hospitalId' => 'required',
            'companyName' => 'required',
            'reservationDate' => 'required',
            'name' => 'required',
            'phone' => ['required', 'string', 'regex:/^(?!-)[0-9-]+$/', 'max:11', 'min:11'],
        ];
    }

    public function messages(): array
    {
        return[
            'name' => __('messages.required.name'),
            'reservationDate' => __('messages.required.reservation_date'),
            'phone' => __('messages.required.phone'),
            'phone.min' => __('messages.verify.min'),
            'phone.max' => __('messages.verify.max')
        ];
    }
}