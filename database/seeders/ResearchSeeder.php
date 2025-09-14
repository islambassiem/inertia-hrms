<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Research;
use Illuminate\Database\Seeder;

final class ResearchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Research::factory()->count(20)->create();
    }
}
