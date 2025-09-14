<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\AcademicRank;
use Illuminate\Database\Seeder;

final class AcademicRankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AcademicRank::factory()->count(20)->create();
    }
}
