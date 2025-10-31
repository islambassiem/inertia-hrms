<?php

declare(strict_types=1);

namespace App\Http\Requests\Hr;

use App\Enums\Gender;
use App\Enums\MaritalStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Enum;

final class UpdateBasicInfoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->hasRole('hr');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'employee_id' => ['required', 'exists:employees,id'],
            'first_name_ar' => ['required', 'string', 'max:255'],
            'first_name_en' => ['required', 'string', 'max:255'],
            'middle_name_ar' => ['nullable', 'string', 'max:255'],
            'middle_name_en' => ['nullable', 'string', 'max:255'],
            'third_name_ar' => ['nullable', 'string', 'max:255'],
            'third_name_en' => ['nullable', 'string', 'max:255'],
            'family_name_ar' => ['required', 'string', 'max:255'],
            'family_name_en' => ['required', 'string', 'max:255'],
            'date_of_birth' => ['required', 'date'],
            'nationality' => ['required', 'exists:_countries,id'],
            'gender' => ['required', new Enum(Gender::class)],
            'marital_status' => ['required', new Enum(MaritalStatus::class)],
            'mobile' => ['required', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'official_email' => ['required', 'string', 'max:255'],
        ];
    }
}
