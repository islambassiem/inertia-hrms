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

        return [
            'id' => $this->id,
            'empid' => $this->code,
            'image' => $this->profileImage(),
            'name_ar' => $this->resource->arabic_name,
            'name_en' => $this->resource->english_name,
            'email' => $this->whenLoaded('user', $this->user->email),
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
            'date_of_birth' => $this->date_of_birth,
            'identification' => IdentificationResource::make($this->whenLoaded('nationalId')),
            'passport' => IdentificationResource::make($this->whenLoaded('passport')),
            'bank' => BankResource::make($this->whenLoaded('bank')),
            'address' => AddressResource::make($this->whenLoaded('address')),
            'emergency_contacts' => EmergencyContactResource::collection($this->whenLoaded('contacts', fn () => $this->contacts)),
            'is_active' => $this->is_active,
            'has_salary' => $this->has_salary,
            'has_biometric' => $this->has_biometric,
            'works_on_saturday' => $this->works_on_saturday,
            'joining_date' => $this->joining_date,
            'resignation_date' => $this->resignation_date,
            'has_married_contract' => $this->has_married_contract,
            'vacation_class' => $this->vacation_class,
            'special_needs' => $this->special_needs,
            'nationality' => $this->whenLoaded('nationality', app()->getLocale() === 'ar' ? $this->nationality->country_ar : $this->nationality->country_en),
            'sponsorship' => $this->whenLoaded('sponsorship', app()->getLocale() === 'ar' ? $this->sponsorship->sponsorship_ar : $this->sponsorship->sponsorship_en),
            'categories' => CategoryResource::collection($this->whenLoaded('categories')),
            'positions' => PositionResource::collection($this->whenLoaded('positions')),
            'departments' => DepartmentResource::collection($this->whenLoaded('departments')),
            'entities' => EntityResource::collection($this->whenLoaded('entities')),
            'colleges' => CollegeResource::collection($this->whenLoaded('colleges')),
            'qualifications' => EmployeeQualificationResource::collection($this->whenLoaded('qualifications')),
            'academic_experiences' => AcademicExperienceResource::collection($this->whenLoaded('academicExperience')),
            'experiences' => ExperienceResource::collection($this->whenLoaded('experiences')),
        ];
    }
}
