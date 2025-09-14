<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\Extention;
use Illuminate\Database\Seeder;

final class ExtentionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 100; $i <= 120; $i++) {
            Extention::create([
                'number' => $i,
                'is_active' => fake()->boolean(),
                'owner' => fake()->randomElement([null, fake()->name()]),
            ]);
        }

        $employees = Employee::active()->get(['id']);
        foreach ($employees as $employee) {
            $employee->extentions()->attach(Extention::all(['id'])->random(1)->pluck('id'));
        }
    }
}
