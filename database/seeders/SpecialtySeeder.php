<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Specialty;
use Illuminate\Database\Seeder;

final class SpecialtySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Specialty::factory()->count(20)->create();
    }
}
