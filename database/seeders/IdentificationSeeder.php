<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\Identification;
use Illuminate\Database\Seeder;

final class IdentificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $employees = Employee::all(['id']);

        foreach ($employees as $employee) {
            Identification::factory()->create([
                'employee_id' => $employee->id,
            ]);
        }
    }
}
