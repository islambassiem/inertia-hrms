<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Faculty;
use Illuminate\Database\Seeder;

final class FacultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Faculty::factory()->count(20)->create();
    }
}
