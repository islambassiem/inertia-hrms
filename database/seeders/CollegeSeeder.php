<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\College;
use App\Models\Employee;
use Illuminate\Database\Seeder;

final class CollegeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        College::create([
            'code' => 'AMS',
            'college_en' => 'College of Applied Medical Sciences',
            'college_ar' => 'كلية العلوم الطبية التطبيقية',
            'created_by' => 1,
        ]);

        College::create([
            'code' => 'HIS',
            'college_en' => 'College of Health Information Systems',
            'college_ar' => 'كلية نظم المعلومات الصحية',
            'created_by' => 1,
        ]);

        College::create([
            'code' => 'NUR',
            'college_en' => 'College of Nursing Sciences',
            'college_ar' => 'كلية التمريض',
            'created_by' => 1,
        ]);

        $employees = Employee::all(['id']);
        foreach ($employees as $employee) {
            $employee->colleges()->attach(
                College::inRandomOrder()->take(1)->pluck('id')->toArray(), [
                    'start_date' => fake()->date(),
                    'end_date' => fake()->randomElement([null, fake()->date()]),
                ]
            );
        }
    }
}
