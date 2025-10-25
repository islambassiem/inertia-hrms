<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin \App\Models\Employee
 */
final class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        /** @var \App\Enums\Gender $gender */
        $gender = $this->gender;

        /** @var \App\Enums\MaritalStatus $marital_status */
        $marital_status = $this->marital_status;

        /** @var \App\Enums\InsuranceClass $insurance_class */
        $insurance_class = $this->insurance_class;

        return [
            'id' => $this->id,
            'empid' => $this->code,
            'image' => $this->profileImage(),
            'first_name_ar' => $this->first_name_ar,
            'first_name_en' => $this->first_name_en,
            'family_name_ar' => $this->family_name_ar,
            'family_name_en' => $this->family_name_en,
            'middle_name_ar' => $this->middle_name_ar,
            'middle_name_en' => $this->middle_name_en,
            'third_name_ar' => $this->third_name_ar,
            'third_name_en' => $this->third_name_en,
            'name_ar' => $this->resource->arabic_name,
            'name_en' => $this->resource->english_name,
            'official_email' => $this->whenLoaded('user', $this->user->email),
            'email' => $this->whenLoaded('email', $this->email->first()?->value),
            'phone' => $this->whenLoaded('phone', function () {
                return $this->phone->first()?->value;
            }, null),
            'mobile' => $this->whenLoaded('mobile', function () {
                return $this->mobile->first()?->value;
            }, null),
            'personal_email' => $this->whenLoaded('email', function () {
                return $this->email->first()?->value;
            }, null),
            'gender' => $gender->label(),
            // @phpstan-ignore nullsafe.neverNull
            'marital_status' => $marital_status?->label(),
            'vacation_class' => $this->vacation_class,
            'date_of_birth' => $this->date_of_birth,
            'identification' => new IdentificationResource($this->whenLoaded('nationalId')),
            'passport' => IdentificationResource::make($this->whenLoaded('passport')),
            'bank' => BankResource::make($this->whenLoaded('bank')),
            'address' => NationalAddressResource::make($this->whenLoaded('address')),
            'emergency_contacts' => EmergencyContactResource::collection($this->whenLoaded('contacts', fn () => $this->contacts)),
            'is_active' => $this->is_active,
            'head' => self::make($this->whenLoaded('head')),
            'works_on_saturday' => $this->works_on_saturday,
            'joining_date' => $this->joining_date,
            'resignation_date' => $this->resignation_date,
            'nationality' => CountryResource::make($this->whenLoaded('nationality')),
            'categories' => CategoryResource::collection($this->whenLoaded('categories')),
            'positions' => PositionResource::collection($this->whenLoaded('positions')),
            'departments' => DepartmentResource::collection($this->whenLoaded('departments')),
            'entities' => EntityResource::collection($this->whenLoaded('entities')),
            'colleges' => CollegeResource::collection($this->whenLoaded('colleges')),
            // @phpstan-ignore nullsafe.neverNull
            'insurance_class' => $insurance_class?->label(),
        ];
    }
}
