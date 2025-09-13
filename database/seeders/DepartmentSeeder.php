<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\Employee;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Department::factory()->count(10)->create();

        $employees = Employee::all(['id']);
        foreach ($employees as $employee) {
            $employee->departments()->attach(Department::all(['id'])->random(1)->pluck('id'));
        }
    }
}
