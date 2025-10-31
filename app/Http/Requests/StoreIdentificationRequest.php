<?php

declare(strict_types=1);

namespace App\Http\Requests;

use App\Enums\IdentificationType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

final class StoreIdentificationRequest extends FormRequest
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
            'id_number' => ['required', 'string', 'regex:/^[0-9]{10}$/'],
            'type' => ['required', 'in:'.IdentificationType::NID->value],
            'place_of_issue' => ['nullable', 'string', 'max:255'],
            'date_of_issue' => ['nullable', 'date'],
            'date_of_expiry' => ['required', 'date'],
        ];
    }

    protected function prepareForValidation(): void
    {
        request()->merge([
            'type' => IdentificationType::NID->value,
        ]);
    }
}
