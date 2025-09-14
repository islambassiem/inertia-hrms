<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\Position;
use Illuminate\Database\Seeder;

final class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Position::factory()->count(20)->create();

        $employees = Employee::all(['id']);
        foreach ($employees as $employee) {
            $employee->positions()->attach(Position::all(['id'])->random(1)->pluck('id'));
        }
    }
}
