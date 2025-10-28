<?php

declare(strict_types=1);

namespace App\Actions\Hr;

use App\Data\BasicInfoData;
use App\Enums\ContactType;
use App\Models\Employee;
use Carbon\CarbonImmutable;

final class UpdateBasicInfoAction
{
    public function handle(Employee $employee, BasicInfoData $data): void
    {
        $employee->first_name_ar = $data->first_name_ar;
        $employee->first_name_en = $data->first_name_en;
        $employee->middle_name_ar = $data->middle_name_ar;
        $employee->middle_name_en = $data->middle_name_en;
        $employee->third_name_ar = $data->third_name_ar;
        $employee->third_name_en = $data->third_name_en;
        $employee->family_name_ar = $data->family_name_ar;
        $employee->family_name_en = $data->family_name_en;
        $employee->date_of_birth = CarbonImmutable::parse($data->date_of_birth);
        $employee->marital_status = (string) $data->marital_status;
        // @phpstan-ignore assign.propertyType
        $employee->gender = $data->gender;
        $employee->save();

        $employee->user()->update(['email' => $data->official_email]);

        if ($employee->email === null) {
            $employee->email()->create([
                'employee_id' => $employee->id,
                'value' => $data->email,
                'type' => ContactType::EMAIL->value,
            ]);
        } else {
            $employee->email->update(['value' => $data->email]);
        }

        if ($data->phone !== null) {
            if ($employee->phone === null) {
                $employee->mobile()->create([
                    'employee_id' => $employee->id,
                    'value' => $data->mobile,
                    'type' => ContactType::MOBILE->value,
                ]);
            } else {
                $employee->phone->update(['value' => $data->phone]);
            }
        }

        if ($employee->mobile === null) {
            $employee->mobile()->create([
                'employee_id' => $employee->id,
                'value' => $data->mobile,
                'type' => ContactType::MOBILE->value,
            ]);
        } else {
            $employee->mobile->update(['value' => $data->mobile]);
        }
    }
}
