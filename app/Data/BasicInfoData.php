<?php

declare(strict_types=1);

namespace App\Data;

use App\Enums\Gender;
use App\Http\Requests\Hr\UpdateBasicInfoRequest;
use Carbon\CarbonImmutable;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Support\Validation\ValidationContext;

final class BasicInfoData extends Data
{
    public function __construct(
        public int $employee_id,
        public string $first_name_ar,
        public string $first_name_en,
        public ?string $middle_name_ar,
        public ?string $middle_name_en,
        public ?string $third_name_ar,
        public ?string $third_name_en,
        public string $family_name_ar,
        public string $family_name_en,
        public CarbonImmutable $date_of_birth,
        public int $nationality,
        public Gender $gender,
        public int $marital_status,
        public string $mobile,
        public ?string $phone,
        public string $email,
        public string $official_email,
    ) {}

    /**
     * @param  array<string, mixed>  $data
     */
    public static function fromArray(array $data): self
    {
        return new self(
            employee_id: $data['employee_id'],
            first_name_ar: $data['first_name_ar'],
            first_name_en: $data['first_name_en'],
            middle_name_ar: $data['middle_name_ar'],
            middle_name_en: $data['middle_name_en'],
            third_name_ar: $data['third_name_ar'],
            third_name_en: $data['third_name_en'],
            family_name_ar: $data['family_name_ar'],
            family_name_en: $data['family_name_en'],
            date_of_birth: CarbonImmutable::parse($data['date_of_birth']),
            nationality: $data['nationality'],
            gender: Gender::from((int) $data['gender']),
            marital_status: $data['marital_status'],
            mobile: $data['mobile'],
            phone: $data['phone'],
            email: $data['email'],
            official_email: $data['official_email'],
        );
    }

    /**
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public static function rules(?ValidationContext $context = null): array
    {
        return (new UpdateBasicInfoRequest())->rules();
    }
}
