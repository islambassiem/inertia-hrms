<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Salary;
use Illuminate\Database\Seeder;

final class SalarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Salary::factory()->count(100)->create();
    }
}
