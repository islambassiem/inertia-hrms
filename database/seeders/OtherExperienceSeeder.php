<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\OtherExperience;
use Illuminate\Database\Seeder;

final class OtherExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OtherExperience::factory(20)->create();
    }
}
